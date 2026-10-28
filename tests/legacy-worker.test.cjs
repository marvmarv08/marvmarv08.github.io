const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('retires only the old worker and moves only legacy study tabs without clearing storage', async () => {
  const events = new Map();
  const navigated = [];
  let unregistered = 0;
  let skipWaiting = 0;
  const urls = [
    'https://marvmarv08.github.io/reviewer-organizer/?code=example#type=recovery',
    'https://marvmarv08.github.io/reviewer-organizer#/settings',
    'https://marvmarv08.github.io/StudyNest/',
    'https://marvmarv08.github.io/',
    'https://outside.example/reviewer-organizer/',
  ];
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../reviewer-organizer/sw.js'), 'utf8'), {
    URL,
    self: {
      location: { origin: 'https://marvmarv08.github.io' },
      addEventListener: (type, listener) => events.set(type, listener),
      skipWaiting: async () => { skipWaiting++; },
      registration: { unregister: async () => { unregistered++; } },
      clients: { matchAll: async () => urls.map(url => ({ url, navigate: async destination => { navigated.push(destination); } })) },
    },
  });
  let pending;
  events.get('install')({ waitUntil: promise => { pending = promise; } });
  await pending;
  events.get('activate')({ waitUntil: promise => { pending = promise; } });
  await pending;
  assert.equal(skipWaiting, 1);
  assert.equal(unregistered, 1);
  assert.deepEqual(navigated.sort(), [
    'https://marvmarv08.github.io/StudyNest/?code=example#type=recovery',
    'https://marvmarv08.github.io/StudyNest/#/settings',
  ].sort());
});

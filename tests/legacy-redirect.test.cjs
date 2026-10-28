const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function destination(search, hash) {
  let result;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../reviewer-organizer/redirect.js'), 'utf8'), {
    URL,
    window: { location: {
      origin: 'https://marvmarv08.github.io', search, hash,
      replace: value => { result = value; },
    } },
  });
  return result;
}

test('old bookmarks open the renamed study app', () => {
  assert.equal(destination('', ''), 'https://marvmarv08.github.io/StudyNest/');
});

test('email callbacks preserve their query and recovery fragment', () => {
  assert.equal(destination('?code=example-code', '#access_token=example&type=recovery'),
    'https://marvmarv08.github.io/StudyNest/?code=example-code#access_token=example&type=recovery');
});

test('a next parameter cannot change the redirect host', () => {
  assert.equal(new URL(destination('?next=https://outside.example', '#/settings')).origin,
    'https://marvmarv08.github.io');
});

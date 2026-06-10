'use strict'

const test = require('tape')

test('package entry supports commonjs and esm import shapes', async function (t) {
  const Bonjour = require('../dist')
  const { Bonjour: NamedBonjour } = require('../dist')
  const imported = await import('../dist/index.js')

  t.equal(typeof Bonjour, 'function')
  t.equal(Bonjour, NamedBonjour)
  t.equal(imported.default, Bonjour)
  t.equal(imported.Bonjour, Bonjour)
  t.end()
})

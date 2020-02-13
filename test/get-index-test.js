let sandbox = require('@architect/sandbox')
let data = require('@begin/data')
let tiny = require('tiny-json-http')
let test = require('ava')

let end

test.before(async () => {
  end = await sandbox.start()
})

test.after(async () => {
  await end()
})

test('get /', async t => {
	t.plan(1)
  let url = 'http://localhost:3333'
  let result = await tiny.get({url})
  t.true(result.body.ok)
})

test('@begin/data', async t => {
  t.plan(2)
  // write some data  
  let tmp = await data.set({table: 'tmp'})
  t.is(tmp.table, 'tmp')
  // read some data
  let result = await data.get({table: 'tmp'})
  t.is(result.length, 1)
  console.log(result)
})

import HookEvent from '../src/index'

test('setEventGroups', async () => {
  const ins = new HookEvent()

  const arr: string[] = []
  ins.setEventGroups('request', {
    before: 500,
    after: 1500,
  })

  ins.on('request#after', () => {
    arr.push('after')
  })
  ins.on('request#before', () => {
    arr.push('before')
  })
  ins.on('request', () => {
    arr.push('default')
  })

  await ins.emit('request')

  expect(arr).toEqual(['before', 'default', 'after'])
})

test('group', async () => {
  const ins = new HookEvent()

  let arr: string[] = []
  ins.setEventGroups('request', {
    before: 500,
    after: 1500,
  })

  ins.on('request#after', () => {
    arr.push('after')
  })
  ins.on('request#before', () => {
    arr.push('before')
  })
  ins.on('request', () => {
    arr.push('default')
  })

  await ins.emit('request#')

  expect(arr).toEqual(['default'])

  await ins.emit('request#default')
  expect(arr).toEqual(['default', 'default'])

  arr = []

  await ins.emit('request#before')
  expect(arr).toEqual(['before'])
})

test('run times', async () => {
  const ins = new HookEvent()
  const arr: string[] = []
  ins.on('response*2', () => {
    arr.push('response')
  })

  await ins.emit('response')

  expect(arr).toEqual(['response'])

  await ins.emit('response')
  expect(arr).toEqual(['response', 'response'])

  await ins.emit('response')
  expect(arr).toEqual(['response', 'response'])
})

test('off all', async() => {
  const ins = new HookEvent()
  ins.setEventGroups('response', {
    start: 500,
    after: 1500
  })
  const arr: string[] = []
  ins.on('response#start', function() {
    arr.push('start')
  })
  ins.on('response#end', function() {
    arr.push('end')
  })
  ins.off('response')
  await ins.emit('response')
  expect(arr).toEqual([])
})
test('off one group', async() => {
  const ins = new HookEvent({
    defaultGroup: 'foo'
  })
  ins.setEventGroups('response', {
    start: 500,
    end: 1500
  })
  const arr: string[] = []
  ins.on('response#start', function() {
    arr.push('start')
  })
  ins.on('response#end', function() {
    arr.push('end')
  })
  ins.on('response#', function() {
    arr.push('foo')
  })
  ins.off('response#start')
  await ins.emit('response')
  expect(arr).toEqual(['foo', 'end'])
})
test('off default group', async() => {
  const ins = new HookEvent()
  ins.setEventGroups('response', {
    start: 500,
    end: 1500
  })
  const arr: string[] = []
  ins.on('response#start', function() {
    arr.push('start')
  })
  ins.on('response#end', function() {
    arr.push('end')
  })
  ins.on('response#', function() {
    arr.push('default')
  })
  ins.off('response#')
  await ins.emit('response')
  expect(arr).toEqual(['start', 'end'])
})

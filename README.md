# event

```js
const evt = new Event()

evt.on('request#user*30', function () {})

evt.off('request#user')

evt.once('request#sys')

evt.emit('request')

evt.emit('request#user')

evt.emit('request#') == evt.emit('request#default')

evt.trigger()
```

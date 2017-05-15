import '@/actions/init.js'
import {store} from 'san-store'
import {router} from 'san-router'
import App from '@/App.san'

store.dispatch('init')

router.setMode('hash')

router.add({
  rule: '/',
  Component: App,
  target: 'body'
})

router.start()

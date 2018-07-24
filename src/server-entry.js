import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store } = createApp()
    context.state = store.state
    resolve(app)
  })
}

import createApp from './lib/create-app.js'

const app = createApp()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/info', (c) => {
  c.var.logger.info("Welcome to Pino logger! (info)")

  return c.json({ logger: "Logged Properly" })
})

export default app

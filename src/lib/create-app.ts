import { OpenAPIHono } from "@hono/zod-openapi"
import { notFound, onError } from "stoker/middlewares"

import { customLogger } from "@/middleware/pino-logger.ts"

import type { AppBindings } from "./types"

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false
  })

  app.use(customLogger())
  
  // Stoker - CJ's middleware for turning not found
  //  to JSON
  app.notFound(notFound)
  app.onError(onError)

  return app
}

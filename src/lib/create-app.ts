import { OpenAPIHono } from "@hono/zod-openapi"
import { notFound, onError } from "stoker/middlewares"
import { defaultHook } from "stoker/openapi"

import { customLogger } from "@/middleware/pino-logger.ts"

import type { AppBindings } from "./types"

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook
  })
}

export default function createApp() {
  const app = createRouter()

  app.use(customLogger())
  
  // Stoker - CJ's middleware for turning not found
  //  to JSON
  app.notFound(notFound)
  app.onError(onError)

  return app
}

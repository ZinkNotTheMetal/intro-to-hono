import { createRoute, z } from "@hono/zod-openapi"
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent } from "stoker/openapi/helpers"

import { createRouter } from "@/lib/create-app"

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Test"],
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          z.object({
            message: z.string()
          }),
          "Test API Endpoint"
        )
      }
    }),
    (c) => c.json({
      message: "Hello from Hono & Stoker"
    }, HttpStatusCodes.OK)
)

export default router
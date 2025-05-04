import { Scalar } from "@scalar/hono-api-reference";

import type { AppOpenApi } from "./types";

import packageJson from '../../package.json'

export default function configureOpenApi(app: AppOpenApi) {
  app.doc("/open-api", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Test API w/ Hono"
    }
  })

  app.get('docs',
    Scalar({
      theme: 'solarized',
      layout: 'classic',
      url: '/open-api',
      defaultHttpClient: {
        targetKey: 'node',
        clientKey: 'fetch'
      }
    })
  )
}
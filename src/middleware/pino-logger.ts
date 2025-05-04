import { pinoLogger } from "hono-pino";
import { pino } from "pino";
import pretty from "pino-pretty";

import env from "../env.ts";


export function customLogger() {
  return pinoLogger({
    pino: pino({
      level: env.LOG_LEVEL || "info"
    }, env.NODE_ENV === "production" ? undefined : pretty()),
    http: {
      referRequestIdKey: crypto.randomUUID()
    }
  })
}
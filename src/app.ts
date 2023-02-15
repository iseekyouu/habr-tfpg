import Fastify, { FastifyServerOptions } from 'fastify'

export type AppOptions = Partial<FastifyServerOptions>;

async function buildApp(options: AppOptions = {}) {
  const fastify = Fastify(options);

  return fastify;
}

export { buildApp }
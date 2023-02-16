import Fastify, { FastifyServerOptions } from 'fastify'
import prismaPlugin from './prisma.plugin';

export type AppOptions = Partial<FastifyServerOptions>;

async function buildApp(options: AppOptions = {}) {
  const fastify = Fastify(options);
  fastify.register(prismaPlugin);

  return fastify;
}

export { buildApp }
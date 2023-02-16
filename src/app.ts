import Fastify, { FastifyServerOptions } from 'fastify'
import { grpcServerPlugin } from './grpc.plugin';
import prismaPlugin from './prisma.plugin';

export type AppOptions = Partial<FastifyServerOptions>;

async function buildApp(options: AppOptions = {}) {
  const fastify = Fastify(options);
  fastify.register(prismaPlugin);
  fastify.register(grpcServerPlugin);

  return fastify;
}

export { buildApp }
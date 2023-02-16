import { GetUsersResponse } from './proto/interfaces/example/GetUsersResponse';
import { GetUsersRequest__Output } from './proto/interfaces/example/GetUsersRequest';
import fp from 'fastify-plugin';
import { join } from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/interfaces/example';

declare module 'fastify' {
  interface FastifyInstance {
    grpcServer: {
      start: () => void,
    },
  }
}

const grpcServerOptions = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: false,
  oneofs: true,
};

const grpcServerPlugin = fp(async (fastify) => {
  // load proto files from directory
  const packageDefinition = protoLoader.loadSync([join(__dirname, '../proto/example.proto')], grpcServerOptions);
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
  const grpcServer = new grpc.Server();

  // mapping between handlers and rpc services
  grpcServer.addService(proto.example.UserService.service, {
    GetUsers: async (
      req: grpc.ServerUnaryCall<GetUsersRequest__Output, GetUsersResponse>,
      res: grpc.sendUnaryData<GetUsersResponse>) => {
        return res(null, {
          users: [{
            id: 'test',
            email: 'test',
          }],
        })
    },
  });

  function start(opts: { port: number } = { port: 50501 }) {
    return grpcServer.bindAsync(
      `0.0.0.0:${opts.port}`,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error(err);
          return;
        }

        grpcServer.start();
        console.log(`GRPC Server listening on ${port}`);
      },
    );
  }

  fastify.decorate('grpcServer', { start });
});

export { grpcServerPlugin };
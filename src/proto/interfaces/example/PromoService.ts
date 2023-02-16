// Original file: proto/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUsersRequest as _example_GetUsersRequest, GetUsersRequest__Output as _example_GetUsersRequest__Output } from '../example/GetUsersRequest';
import type { GetUsersResponse as _example_GetUsersResponse, GetUsersResponse__Output as _example_GetUsersResponse__Output } from '../example/GetUsersResponse';

export interface PromoServiceClient extends grpc.Client {
  GetUsers(argument: _example_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _example_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _example_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _example_GetUsersRequest, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _example_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _example_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _example_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _example_GetUsersRequest, callback: grpc.requestCallback<_example_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PromoServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUsers: grpc.handleUnaryCall<_example_GetUsersRequest__Output, _example_GetUsersResponse>;
  
}

export interface PromoServiceDefinition extends grpc.ServiceDefinition {
  GetUsers: MethodDefinition<_example_GetUsersRequest, _example_GetUsersResponse, _example_GetUsersRequest__Output, _example_GetUsersResponse__Output>
}

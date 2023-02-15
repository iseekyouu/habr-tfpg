"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = void 0;
const fastify_1 = __importDefault(require("fastify"));
async function buildApp(options = {}) {
    const fastify = (0, fastify_1.default)(options);
    return fastify;
}
exports.buildApp = buildApp;

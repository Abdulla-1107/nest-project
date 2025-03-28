"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let OrderGateway = class OrderGateway {
    server;
    users = new Map();
    handleConnection(client) {
        const userId = client.handshake.auth.userId;
        if (userId) {
            this.users.set(userId, client.id);
            console.log(`User ${userId} connected with socket ${client.id}`);
        }
    }
    handleDisconnect(client) {
        const userId = [...this.users.entries()].find(([_, socketId]) => socketId === client.id)?.[0];
        if (userId) {
            this.users.delete(userId);
            console.log(`User ${userId} disconnected`);
        }
    }
    sendOrderNotification(data) {
        const socketId = this.users.get(data.userId);
        if (socketId) {
            this.server.to(socketId).emit("receiveOrderNotification", data);
            console.log(`Notification sent to user ${data.userId}`);
        }
        else {
            console.log(`User ${data.userId} is not connected`);
        }
    }
};
exports.OrderGateway = OrderGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], OrderGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("sendOrderNotification"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderGateway.prototype, "sendOrderNotification", null);
exports.OrderGateway = OrderGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true })
], OrderGateway);
//# sourceMappingURL=order.gateway.js.map
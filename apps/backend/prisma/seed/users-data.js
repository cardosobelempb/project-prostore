"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var bcryptjs_1 = require("bcryptjs");
exports.users = [
    {
        name: "John",
        email: "admin@example.com",
        password: (0, bcryptjs_1.hashSync)("123456", 10),
        role: "ADMIN",
    },
    {
        name: "Jane",
        email: "user@example.com",
        password: (0, bcryptjs_1.hashSync)("123456", 10),
        role: "USER",
    },
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSecret = exports.URI = exports.HostName = void 0;
let LOCAL = false;
let HostName, URI;
if (LOCAL) {
    exports.URI = URI = "mongodb://localhost/contacts";
    exports.HostName = HostName = "localhost";
}
else {
    exports.HostName = HostName = "Mongo DB Atlas";
    exports.URI = URI = "mongodb+srv://Bency2506:5BcN72XQNux3vy2c@cluster0.5cz9mf3.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0";
}
exports.SessionSecret = "INFT2202SessionSecret";
//# sourceMappingURL=db.js.map
import { getPlayer, postPlayer,readPlayer, updatePlayer, deletePlayer } from './player.swagger';

module.exports = {
    swagger: "2.0",
    info: {
        "version": "1.0.0",
        "title": "Simple API",
        "description": "A simple API to learn how to write OpenAPI Specification"
    },
    schemes: [
        "https"
    ],
    host: "simple.api",
    basePath: "/openapi101",
    paths: {
        "/player": {
            "get": getPlayer,
            "post": postPlayer
        },
        "/player/:id": {
            get: readPlayer,
            put: updatePlayer,
            delete: deletePlayer
        }
    }
}


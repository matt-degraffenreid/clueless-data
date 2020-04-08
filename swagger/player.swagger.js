export const getPlayer = {
    summary: "Gets some players",
    description: "Returns a list containing all players currently in game.",
    responses: {
        200: {
            description: "A list of players",
            schema: {
                type: "array",
                items: {
                    properties: {
                        player_id: {
                            type: "number"
                        },
                        player_socket: {
                            type: "string"
                        },
                        player_location: {
                            type: "number"
                        },
                        player_character: {
                            type: "number"
                        }
                    }
                }
            }
        }
    }
}

export const  postPlayer = {
    summary: "Post some players",
    description: "Posts a single player to be saved into the database.",
    responses: {
        200: { }
    }
}

export const readPlayer = {

}

export const updatePlayer = {
    summary: "Update some player",
    description: "Updates a single player to be saved into the database.",
    responses: {
        200: {
            description: "Success message",
            schema: {
                type: "object",
                items: {
                   
                }
            }
        }
    }
}

export const deletePlayer = {
    summary: "Deletes some player",
    description: "Deletes a single player to be saved into the database.",
    responses: {
        200: {
            description: "Success message",
            schema: {
                type: "object",
                items: {
                    properties: {
                        message: {
                            type: "string",
                            example: "Player successfully deleted" 
                        }
                    }
                }
            }
        }
    }
}

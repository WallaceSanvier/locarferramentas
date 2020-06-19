const connection = require("../database/connection");
//serve para retornar todas as ferramentas alugadas de um usuário
module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const tools = await connection("tools")
            .where("user_id", user_id)
            .select("*");

        return response.json(tools);
    },
};

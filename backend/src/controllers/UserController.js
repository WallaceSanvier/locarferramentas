const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
    // faz a listagem
    async index(request, response) {
        const users = await connection("users").select("*");

        return response.json(users);
    },
    //Faz a criaçao da tabela
    async create(request, response) {
        const { name, email, whatsapp } = request.body;

        const userExists = await connection("users")
            .where("email", email)
            .select("email")
            .first();

        if (userExists) {
            return response.status(400).json({ error: "User already exists" });
        }

        const id = generateUniqueId();

        await connection("users").insert({
            id,
            name,
            email,
            whatsapp,
        });

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const user = await connection("users")
            .where("id", id)
            .select("id")
            .first();

        if (user.user_id !== user_id) {
            return response
                .status(401)
                .json({ error: "Operation not permitted." });
        }

        await connection("users").where("id", id).delete();

        return response.status(200).json({ success: "Tool deleted." });
    },
};

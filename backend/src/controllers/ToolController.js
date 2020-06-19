const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection("tools").count();

        const tools = await connection("tools")
            .join("users", "users.id", "=", "tools.user_id")

            .select(["tools.*", "users.name", "users.email", "users.whatsapp"]);

        response.header("X-Total-Count", count["count(*)"]);

        return response.json(tools);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection("tools").insert({
            title,
            description,
            value,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const tool = await connection("tools")
            .where("id", id)
            .select("user_id")
            .first();

        if (tool.user_id !== user_id) {
            return response
                .status(401)
                .json({ error: "Operation not permitted." });
        }

        await connection("tools").where("id", id).delete();

        return response.status(200).json({ success: "Tool deleted." });
    },
};

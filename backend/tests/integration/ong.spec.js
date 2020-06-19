const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("USER", () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it("should be able to create a new User", async () => {
        const response = await request(app).post("/ongs").send({
            name: "teste",
            email: "teste@teste.com.br",
            whatsapp: "65555555555",
        });

        expect(response.body).toHaveProperty("id");
        expect(response.body.id).toHaveLength(8);
    });
});

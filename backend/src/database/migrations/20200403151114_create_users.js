exports.up = function (knex) {
    //método up é responsável por criar a tabela.

    return knex.schema.createTable("users", function (table) {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("whatsapp").notNullable();
    });
};

exports.down = function (knex) {
    //método down serve para deletar a tabela se caso acontecer um erro.
    return knex.schema.dropTable("users");
};

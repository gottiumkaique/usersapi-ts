import Knex from "knex"

export function up (knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary()
        table.string("name", 80).notNullable()
        table.string("email", 256).notNullable().unique()
        table.string("password").notNullable()
        table.timestamps()
    })
}

export function down (knex: Knex) {
    return knex.schema.dropTable("users")
}
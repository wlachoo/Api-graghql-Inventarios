exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('usuarios', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('apellido')
      table.string('cedula')
      table.string('password')
      table.string('correo')
      table.string('status')
      table.string('cota')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('usuarios')
  ])
)
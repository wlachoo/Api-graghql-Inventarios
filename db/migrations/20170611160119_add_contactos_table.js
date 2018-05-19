exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('contactos', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('apellido')
      table.string('ciudad')
      table.string('descripcion')
      table.string('correo')
      table.string('telefono')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('contactos')
  ])
)

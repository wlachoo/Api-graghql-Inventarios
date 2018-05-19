exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('proveedores', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('descripcion')
      table.string('cota')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('proveedores')
  ])
)
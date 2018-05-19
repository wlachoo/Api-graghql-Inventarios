exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('promociones', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.integer('producto_id').unsigned()
      table.string('descripcion')
      table.string('cota')
      table.float('precio')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('promociones')
  ])
)
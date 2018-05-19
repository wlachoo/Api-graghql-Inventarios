exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('ventas', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('cantidades')
      table.integer('producto_id').unsigned()
      table.integer('usuario_id').unsigned()
      table.string('observaciones')
      table.string('cota')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('ventas')
  ])
)
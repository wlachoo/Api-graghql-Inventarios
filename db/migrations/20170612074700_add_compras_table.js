exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('compras', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('cantidades')
      table.integer('producto_id').unsigned()
      table.integer('proveedor_id').unsigned()
      table.string('observaciones')
      table.string('cota')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('compras')
  ])
)
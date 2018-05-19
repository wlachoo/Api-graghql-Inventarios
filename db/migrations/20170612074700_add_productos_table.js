exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('productos', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.float('precio')
      table.integer('cantidad_disponible')
      table.string('descripcion')
      table.string('clasificacion')
      table.string('cota')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('productos')
  ])
)
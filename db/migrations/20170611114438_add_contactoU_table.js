exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('contactoU', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('descripcion')
      table.string('Asunto')
      table.integer('usuario_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('contactoU')
  ])
)
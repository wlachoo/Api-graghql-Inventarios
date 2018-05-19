const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('compras').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('compras').insert([{
        id: i + 1,
        cantidades: casual.random,
        observaciones: casual.text,
        proveedor_id: 1,
        producto_id: 1,
        cota: casual.integer(from = -1000, to = 1000)
      }])
    })

    return Promise.all(promises)
  })
}
const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('promociones').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('promociones').insert([{
        id: i + 1,
        nombre: casual.name,
        descripcion: casual.text,
        precio: casual.random,
        cota: casual.integer(from = -1000, to = 1000),
        producto_id: 1
      }])
    })

    return Promise.all(promises)
  })
}
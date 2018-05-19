const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('proveedores').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('proveedores').insert([{
        id: i + 1,
        nombre: casual.name,
        cota: casual.integer(from = -1000, to = 1000),
        descripcion: casual.text
      }])
    })

    return Promise.all(promises)
  })
}

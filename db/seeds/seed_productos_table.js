const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('productos').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('productos').insert([{
        id: i + 1,
        nombre: casual.name,
        precio: casual.random,
        cantidad_disponible: casual.random,
        descripcion: casual.text,
        clasificacion: casual.text,
        cota: casual.integer(from = -1000, to = 1000)
      }])
    })

    return Promise.all(promises)
  })
}
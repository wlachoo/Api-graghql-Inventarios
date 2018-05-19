const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('contactos').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('contactos').insert([{
        id: i + 1,
        nombre: casual.name,
        apellido: casual.last_name,
        ciudad: casual.state,
        descripcion: casual.text,
        correo: casual.email,
        telefono: casual.phone,
      }])
    })

    return Promise.all(promises)
  })
}

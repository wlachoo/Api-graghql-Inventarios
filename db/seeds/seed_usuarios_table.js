const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('usuarios').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('usuarios').insert([{
        id: i + 1,
        nombre: casual.name,
        apellido: casual.last_name,
        cedula: casual.building_number,
        password: casual.building_number,
        correo: casual.email,
        status: casual.random_element(['true', 'false'])
      }])
    })

    return Promise.all(promises)
  })
}
const { Model } = require('objection')
const path = require('path')

class Contacto extends Model {
  static get tableName () {
    return 'contactos'
  }
}

module.exports = Contacto

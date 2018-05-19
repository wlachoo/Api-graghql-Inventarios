const { Model } = require('objection')
const path = require('path')

class Proveedor extends Model {
  static get tableName () {
    return 'proveedores'
  }
}

module.exports = Proveedor
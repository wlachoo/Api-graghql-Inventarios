const { Model } = require('objection')
const path = require('path')

class Ventas extends Model {
  static get tableName () {
    return 'ventas'
  }
}

module.exports = Ventas
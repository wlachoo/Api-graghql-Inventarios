const { Model } = require('objection')
const path = require('path')

class Compras extends Model {
  static get tableName () {
    return 'compras'
  }
}

module.exports = Compras
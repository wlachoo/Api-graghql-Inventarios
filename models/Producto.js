const { Model } = require('objection')
const path = require('path')

class Producto extends Model {
  static get tableName () {
    return 'productos'
  }
}

module.exports = Producto
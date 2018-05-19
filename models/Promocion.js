const { Model } = require('objection')
const path = require('path')

class Promocion extends Model {
  static get tableName () {
    return 'promociones'
  }
}

module.exports = Promocion
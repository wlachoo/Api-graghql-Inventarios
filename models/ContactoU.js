const { Model } = require('objection')
const path = require('path')

class ContactoU extends Model {
  static get tableName () {
    return 'contactoU'
  }
}

module.exports = ContactoU
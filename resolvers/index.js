const Contacto = require('../models/Contacto')
const Usuario = require('../models/Usuario')
const Producto = require('../models/Producto')
const Proveedor = require('../models/Proveedor')
const Venta = require('../models/Ventas')
const Compra = require('../models/Compras')
const ContactoU = require('../models/ContactoU')

module.exports = {
  Query: {
    productos: () => Producto.query(),
    producto: () => Producto.query().findById(args.id),
    usuarios: () => Usuario.query(),
    usuario: () => Usuario.query().findById(args.id),
    proveedores: () => Proveedor.query(),
    proveedor: () => Proveedor.query().findById(args.id),
    venta: (rootValue, args) => Venta.query().eager('[productos, usuarios]').findById(args.id),
    ventas: () => Venta.query().eager('[productos, usuarios]'),
    compra: (rootValue, args) => Compra.query().eager('[proveedores, usuarios]').findById(args.id),
    compras: () => Compra.query().eager('[proveedores, usuarios]'),
    contactoU: () => ContactoU.query().eager('usuarios'),
    contactoUs: (rootValue, args) => ContactoU.query().eager('usuarios').findById(args.id),
    buscar: (rootValue, params) => {
      return [
        Producto.query().findById(3),
        Usuario.query().findById(1)
      ]
    }
  },
  Mutation: {
    contactoAdd: (_, { contacto }) => {
      return Contacto
        .query()
        .insert(contacto)
    },
    usuarioAdd: (_, { usuario }) => {
      return Usuario
        .query()
        .insert(usuario)
    }
  }       
}
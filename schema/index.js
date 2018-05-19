const { makeExecutableSchema } = require('graphql-tools')
const Compras = require('./compra')
const Contacto = require('./contacto')
const ContactoU = require('./contactoU')
const Producto = require('./producto')
const Promocion = require('./promocion')
const Proveedor = require('./proveedor')
const Super_usuario = require('./super_usuario')
const Usuario = require('./usuario')
const Ventas = require('./venta')
const resolvers = require('../resolvers')

const rootTypes = `
  union ResultadoBusqueda = Producto | Usuario | Contacto
  type Query {
    productos: [Producto]
    contactoUs: [ContactoU]
    contactoU(id: Int): ContactoU
    compras: [Compras]
    compra(id: Int): Compras
    ventas: [Ventas]
    venta(id: Int): Ventas
    proveedores: [Proveedor]
    proveedor(id: Int): Proveedor
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    producto(id: Int): Producto
    buscar(query: String): [ResultadoBusqueda]
  }

  input NuevoUsuario {
    nombre: String!
    apellido: String!
    cedula: String!
    password: String!
    status: Boolean!
    correo: String!
  }

  input NuevoContacto {
    nombre: String!
    ciudad: String!
    descripcion: String!
    correo: String!
    telefono: Int!
    mensaje: String!
  }

  type Mutation {
    usuarioAdd(usuario: NuevoUsuario): Usuario
    contactoAdd(contacto: NuevoContacto): Contacto
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootTypes, Contacto, Usuario, Producto, Ventas, Compras, Proveedor, ContactoU],
  resolvers
})

module.exports = schema
module.exports = `
  type Promocion {
    id: ID!
    cota: String!
    nombre: String!
    precio: Float!
    descripcion: String
    productos: [Producto]
  }
`
module.exports = `
  type Producto {
    id: ID!
    cota:String!
    nombre: String!
    precio: Float!
    cantidad_disponible: Int!
    descripcion: String
    clasificacion: String!
  }
`
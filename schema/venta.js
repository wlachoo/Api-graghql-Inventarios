module.exports = `
  type Ventas {
    id: ID!
    cota:String!
    observaciones: String!
    cantidades: Int!
    producto: [Producto]
    usuario: [Usuario]
  }
`
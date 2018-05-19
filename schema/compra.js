module.exports = `
  type Compras {
    id: ID!
    cota:String!
    observaciones: String
    cantidades: Int!
    proveedores: [Proveedor]
    productos: [Producto]
  }
`
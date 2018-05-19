module.exports = `
  type ContactoU{
    id: ID!
    descripcion:String!
    asunto: String!
    usuario: [Usuario]
  }
`
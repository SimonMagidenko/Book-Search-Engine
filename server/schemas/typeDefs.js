const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    books: [Book]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(authors: String!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

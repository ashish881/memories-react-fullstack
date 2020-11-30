const { GET_POST, POST_DATA, UPDATE_POST, DELETE_POST, LIKE_POST } = require("../constant/constant");



export const getPostReducer = (post = [], action) => {
  switch (action.type) {
    case GET_POST:
      return action.payload
    


    case POST_DATA:
      return [...post, action.payload]


    case UPDATE_POST:
      return post.map((p) => p._id === action.payload._id ? action.payload : p)


    case LIKE_POST:
      return post.map((p) => p._id === action.payload._id ? action.payload : p)

    case DELETE_POST:
      return post.filter(post => post._id !== action.payload)


    default:
      return post
  }
}


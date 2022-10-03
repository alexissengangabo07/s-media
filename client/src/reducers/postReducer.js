
const postReducer = (posts = [] ,  action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return posts;
    case "CREATE_POST":
      return posts;
    default:
      return posts;
    break;
  }
};

export default postReducer;
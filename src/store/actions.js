export const FETCH_CARDS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_CARDS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_CARDS_FAIL = "FETCH_POSTS_FAIL";
export const ADD_CARD = "ADD_POST";

export function fetchPostsBegin() {
  return {
    type: FETCH_CARDS_BEGIN,
  };
}

export function fetchPostsSuccess(value) {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: value,
  };
}

export function fetchPostsFail(value) {
  return {
    type: FETCH_CARDS_FAIL,
    payload: value,
  };
}

export function fetchAddPost(value) {
  return {
    type: ADD_CARD,
    payload: value,
  };
}

export function fetchHttp() {
  return (dispatch) => {
    dispatch(fetchPostsBegin());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("SERVER ERROR");
        } else {
          return response;
        }
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((err) => fetchPostsFail(err.message));
  };
}

export const addPost = (post) => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const newPost = await response.json();
  dispatch(fetchAddPost(newPost));
};

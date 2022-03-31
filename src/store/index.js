import { combineReducers, createStore } from "redux";

const initialState = {
  count:333,
  posts: [
    { id: 1, title: "Reduxについて" },
    {
      id: 2,
      title: "ReduxのHooksについて",
    },
  ],
};

const countReducer = (
    state = {
        count: 50
    }
) => {
    return state;
};

const postsReducer = (
    state = {
      posts: [
        { id: 1, title: 'Reduxについて' },
        {
          id: 2,
          title: 'ReduxのHooksについて',
        },
      ],
    }
  ) => {
    return state;
  };

const  rootReducer = combineReducers({
    countReducer,
    postsReducer
})

const store = createStore(rootReducer);

export default store;

import { createStore, combineReducers, compose } from "redux";
import persistState from "redux-localstorage";

function tokenReducer(state = "", action) {
  switch (action.type) {
    case "SET_TOKEN":
      return action.token;
    case "CLEAR_TOKEN":
      return "";
    default:
      return state;
  }
}

function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return action.user;
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
}

function albumsReducer(state = [], action) {
  switch (action.type) {
    case "SET_ALBUMS":
      return action.albums;
    case "CLEAR_ALBUMS":
      return [];
    default:
      return state;
  }
}

function albumReducer(state = null, action) {
  switch (action.type) {
    case "SET_ALBUM":
      return action.album;
    case "CLEAR_ALBUM":
      return null;
    default:
      return state;
  }
}

function photosReducer(state = [], action) {
  switch (action.type) {
    case "SET_PHOTOS":
      return action.photos;
    case "CLEAR_PHOTOS":
      return [];
    default:
      return state;
  }
}
let rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  albums: albumsReducer,
  mainAlbum: albumReducer,
  photos: photosReducer,
});

let mainEnhancer = compose(persistState("token"));

export default createStore(rootReducer, {}, mainEnhancer);

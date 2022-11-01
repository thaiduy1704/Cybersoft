import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CarouselReducer";
import { ListMovieReducer } from "../reducers/ListMovieReducer";

const rootReducers = combineReducers({
  // state
  CarouselReducer,
  ListMovieReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

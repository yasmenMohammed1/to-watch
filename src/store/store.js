import favourite_reducer from "./reducers/favourite";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = createStore(favourite_reducer, composeWithDevTools());

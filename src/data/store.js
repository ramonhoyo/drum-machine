import { createStore } from "redux";
import { rootReducer } from "./reducers";

var store = createStore(rootReducer);

export { store }

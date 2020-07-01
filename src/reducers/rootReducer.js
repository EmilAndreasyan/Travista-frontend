import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';
 
const rootReducer = combineReducers({
  users: usersReducer,
  items: itemsReducer
});
 
export default rootReducer;

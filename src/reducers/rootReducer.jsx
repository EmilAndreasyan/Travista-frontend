import { combineReducers } from "redux";
import countriesReducer from './countriesReducer';
import citiesReducer from './countriesReducer';
 
const rootReducer = combineReducers({
  countries: countriesReducer,
  cities: citiesReducer,
});
 
export default rootReducer;

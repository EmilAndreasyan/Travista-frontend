import { combineReducers } from "redux";
import countriesReducer from './countriesReducer';
import citiesReducer from './countriesReducer';
import sightseeingsReducer from './sightseeingsReducer'
 
const rootReducer = combineReducers({
  countries: countriesReducer,
  cities: citiesReducer,
  sightseeings: sightseeingsReducer
});
 
export default rootReducer;

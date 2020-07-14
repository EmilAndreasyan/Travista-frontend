//import uuid from 'uuid';
export default function countriesReducer(state = {countries: [], cities: [], sightseeings: []}, action) {
 //debugger
  // action.payload is object with arrays{[], []}, is the same as countries from backend when fetched in actions, that's why state.countries should be {[],[]}?
  // sometimes action.payload shows data, sometimes it shows empty array
  switch (action.type) {
    case 'FETCH_COUNTRIES':
     //return {...state, countries: [...state.countries = {...action.payload}]}
     return {...state, countries: action.payload}

    case 'ADD_COUNTRY':
      return {...state, countries: [...state.countries, action.payload]} //all previous countries + added country (action.payload), like push()
      //return state.countries.concat(action.payload)

    case 'EDIT_COUNTRY':
      let editedCountry = state.countries.map(country => {
        if (country.id === action.payload.id) {
          return action.payload // replace country with the same id
        } else {
          return country
        }
      })
      return {...state, countries: editedCountry}

      case 'DELETE_COUNTRY':
        let deletedCountry = state.countries.map(country => {
          if (country.id === action.payload.id) {
            return action.payload
          } else
          return country
        })
        return {...state, countries: deletedCountry}

    case 'FETCH_CITIES':
      // const elementsIndex = this.state.countries.findIndex(element => element.id == id )
      // const newArray = [...this.state.countries]
      // newArray[elementsIndex] = {...newArray[elementsIndex]}
      //does't work, need to populate nested cities array of countries with action.payload
      return {...state, country: {...state.country, cities: action.payload}}

    case 'ADD_CITY':
      let cities = state.cities.map(city => {
        if (city.id === action.payload.id) {
          return action.payload // replace city with the same id
        } else {
          return city
        }
      })
      return {...state, cities: cities}
      
    case 'EDIT_CITY':
      let editedCity = state.cities.map(city => {
        if(city.id === action.payload.id) {
          return action.payload
        } else
        return city
      })
      return {...state, cities: editedCity}

    case 'DELETE_CITY':
      let deletedCity = state.cities.map(city => {
        if (city.id === action.payload.id) {
          return action.payload // replace city with the same id
        } else {
          return city
        }
      })
      return {...state, cities: deletedCity}
    default:  
    return state
  }
    // let idx;
    // switch (action.type) {
    //   case "ADD_AUTHOR":
    //     return [...state, action.author];
   
    //   case "REMOVE_AUTHOR":
    //     idx = state.findIndex(book => book.id === action.id);
    //     return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
    //   case "ADD_BOOK":
    //     let existingAuthor = state.filter(
    //       author => author.authorName === action.book.authorName
    //     );
    //     if (existingAuthor.length > 0) {
    //       return state;
    //     } else {
    //       return [...state, { authorName: action.book.authorName, id: uuid() }];
    //     }
   
    //   default:
    //     return state;
    // }
    
  }
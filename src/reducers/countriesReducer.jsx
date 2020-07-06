//import uuid from 'uuid';
export default function countriesReducer(state = {countries: []}, action) {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return {countries: action.payload}

    case 'ADD_COUNTRY':
      return {...state, countries: [...state.countries, action.payload]} //all previous countries + added country (action.payload), like push()

    case 'EDIT_COUNTRY':
      let editedCountry = state.countries.map(country => {
        if (country.id === action.payload.id) {
          return action.payload // replace country with the same id
        } else {
          return country
        }
      })
      return {...state, countries: editedCountry}

    case 'ADD_CITY':
      let countries = state.countries.map(country => {
        if (country.id === action.payload.id) {
          return action.payload // replace country with the same id
        } else {
          return country
        }
      })
      return {...state, countries: countries}
    case 'DELETE_CITY':
      let deletedCity = state.countries.map(country => {
        if (country.id === action.payload.id) {
          return action.payload // replace country with the same id
        } else {
          return country
        }
      })
      return {...state, countries: deletedCity}
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
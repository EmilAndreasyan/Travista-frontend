//import uuid from 'uuid';
export default function countriesReducer(state = {countries: [], cities: []}, action) {
 //debugger
  // action.payload is object with arrays{[], []}, is the same as countries from backend when fetched in actions, that's why state.countries should be {[],[]}?
  switch (action.type) {
    case 'FETCH_COUNTRIES':
     //return {...state, countries: [...state.countries = {...action.payload}]}
     return {...state, countries: action.payload}

    case 'ADD_COUNTRY':
      return {...state, countries: [...state.countries, action.payload]} //returns all previous countries + added country (action.payload), like push()
      //return state.countries.concat(action.payload)

    case 'EDIT_COUNTRY':
      let countriesWithEdited = state.countries.map(country => {
        if (country.id === action.payload.id) {
          return action.payload // replace country with the same id
        } else {
          return country
        }
      })
      return {...state, countries: countriesWithEdited}

      case 'DELETE_COUNTRY':
        // let countriesWithoutDeleted = state.countries.map(country => {
        //   if (country.id === action.payload.id) {
        //     return action.payload
        //   } else
        //   return country
        // })
        let countriesWithoutDeleted = state.countries.filter(country => country.id !== action.payload.id)
        return {...state, countries: countriesWithoutDeleted}

    case 'FETCH_CITIES':
      // const elementsIndex = this.state.countries.findIndex(element => element.id == id )
      // const newArray = [...this.state.countries]
      // newArray[elementsIndex] = {...newArray[elementsIndex]}
      return {...state, country: {...state.country, cities: action.payload}}

    case 'ADD_CITY':
      let cities = state.cities.map(city => {
        if (city.id === action.payload.id) {
          return action.payload // replace city with the same id?
        } else {
          return city
        }
      })
      return {...state, cities: cities}
      
    case 'EDIT_CITY':
      let citiesWithEdited = state.cities.map(city => {
        if(city.id === action.payload.id) {
          return action.payload
        } else
        return city
      })
      return {...state, cities: citiesWithEdited}

    case 'DELETE_CITY':
      let citiesWithoutDeleted = state.cities.map(city => {
        if (city.id === action.payload.id) {
          return action.payload // replace city with the same id
        } else {
          return city
        }
      })
      return {...state, cities: citiesWithoutDeleted}

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
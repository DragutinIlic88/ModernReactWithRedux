import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //reducer add key to our global application state called books
  // and the value is returned value from BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

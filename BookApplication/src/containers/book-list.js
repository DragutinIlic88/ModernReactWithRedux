//containers are smart component - care about particulary piss of state from redux
import React, {Component} from 'react';
//importing connect function from react-redux library which is glue between react and redux
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//this function takes application state as argument
//and what it returns it will show up as props in our container
function mapStateToProps(state){
    return {
        books: state.books
    };
}

// Anything returned to this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    //dispatch function takes all actions and passes them to reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//connect function takes function and component and produces container
//whenever BookList component changes it state container will automatically rerender
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
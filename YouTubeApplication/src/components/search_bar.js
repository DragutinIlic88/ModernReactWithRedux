import React, { Component } from 'react';
 
//example of react functional component
/*const SearchBar = () => {
    return <input />;
};*/

//example of react class component
class SearchBar extends Component {
    constructor(props){
        super(props);

        //initializing state in class based component
        //properties which we want to record for state
        //term refer to searchTerm
        this.state = {term: ''};
    }
    render() {
        //for updateing state always use seter method
        //we created input to be controlled component(field) seting value to 
        // get value from state
        return(
            <div className="search-bar"> 
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
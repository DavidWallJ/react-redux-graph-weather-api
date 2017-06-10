/**
 * Created by david on 5/18/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
        // term; searchTerm
        this.onInputChange = this.onInputChange.bind(this);
        // when we call onInputChange it doesn't know where this is pointing to
        // it should be pointing to this SearchBar class
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // event.target.value is not a React thing its just javascript
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        // this tells the browser to submit/post the form
        // which is the standard html way of doing things

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});

    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch)
}

// this container doesn't care about state thus 'null'
export default connect(null, mapDispatchToProps)(SearchBar);
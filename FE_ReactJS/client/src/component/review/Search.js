import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchWords } from '../react-redux/actions/reviewAction';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: ''
        }
    }
    
    isChange = (event) => {
        this.setState({
            searchData: event.target.value
        });
        this.props.searchWords(this.state.searchData)
    }
    clickSearchWord = () => {
        this.props.searchWords(this.state.searchData)
    }
    render() {
        return (
            <div className="search container">
                <div className="row">
                    <div className="col-6 btn-group">
                        <input
                            type="text"
                            className="form-control"
                            name="search"
                            id=""
                            aria-describedby="helpId"
                            placeholder="Tìm kiếm"
                            onChange={(event) => this.isChange(event)}
                        />
                        <button className="btn btn-primary" onClick={() => {this.clickSearchWord()}}>
                            <i className="fa-solid fa-magnifying-glass"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        review: state.review
    }
}
const mapDispatchToProps = {
    searchWords
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
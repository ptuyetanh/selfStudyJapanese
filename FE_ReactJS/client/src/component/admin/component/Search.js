import React, { Component } from 'react';

class Search extends Component {
    
    render() {
        return (
            <div className="search btn-group">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Tìm kiếm"
                    onChange={this.props.isChange}
                />
                <button type="button" className="btn btn-primary" onClick={this.props.clickSearch}>
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>

        );
    }
}

export default Search;
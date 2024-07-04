import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <div className="search container">
                <div className="row">
                    <div className="col-6 btn-group">
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="helpId"
                            placeholder="Tìm kiếm"
                            onChange={this.props.isChange}
                        />
                        <button className="btn btn-primary" onClick={this.props.clickSearch}>
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default (Search);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Level extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-3">
                <Link to={this.props.linkTo}
                    name=""
                    id=""
                    className="btn btn-primary"
                    role="button"
                >
                    {this.props.content}
                </Link>
            </div>
        );
    }
}

export default Level;
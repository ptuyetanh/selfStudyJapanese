import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link">
                                Previous
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" >
                                1
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" >
                                2
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" >
                                3
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
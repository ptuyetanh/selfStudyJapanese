import React, { Component } from 'react';

class ModelInfoCommunication extends Component {
    render() {
        return (
            <div className="modal" tabIndex={-1} id="communicationInfo">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giao tiếp chi tiết</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>{'1 A: ' + this.props.one_a}</li>
                                <li>{'1 B: ' + this.props.one_b}</li>
                                <li>{'2 A: '+ this.props.two_a}</li>
                                <li>{'2 B: ' + this.props.two_b}</li>
                                <li>{'3 A: ' + this.props.three_a}</li>
                                <li>{'3 B: ' + this.props.three_b}</li>
                                <li>{'4 A: '+ this.props.four_a}</li>
                                <li>{'4 B: ' + this.props.four_b}</li>
                                <li>{'5 A: '+ this.props.five_a}</li>
                                <li>{'5 B: ' + this.props.five_b}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelInfoCommunication;
import React, { Component } from 'react';

class ModelPaymentPhoto extends Component {
    render() {
        return (
            <div className="modal" tabIndex={-1} id="paymentPhoto">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={"/images/" + this.props.paymentphoto}
                                className="img-fluid rounded-top"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelPaymentPhoto;
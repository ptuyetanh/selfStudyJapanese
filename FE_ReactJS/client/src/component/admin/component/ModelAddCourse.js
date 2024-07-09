import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ModelAddCourse extends Component {
    showButtonDisableOrNoDisable = () => {
        if (this.props.file_csv === '' || this.props.error_file_csv !== '') {
            return (
                <button type="button" className="btn btn-primary" disabled>
                    Lưu
                </button>
            )
        } else {
            return (
                <button type="button" className="btn btn-primary" onClick={this.props.clickSave}>
                    Lưu
                </button>
            )
        }
    }
    render() {
        return (
            <div className="modal" tabIndex={-1} id="addCourse" >
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <form className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.tittle}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Choose file</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="file_csv"
                                    id=""
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={this.props.onChange}
                                />
                                <small id="helpId" className="form-text">{this.props.error_file_csv}</small>
                            </div>
                            <Link to={this.props.fileExcel} className="filecsv">File mẫu: excel</Link>

                        </div>
                        <div className="modal-footer">
                            {this.showButtonDisableOrNoDisable()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ModelAddCourse;
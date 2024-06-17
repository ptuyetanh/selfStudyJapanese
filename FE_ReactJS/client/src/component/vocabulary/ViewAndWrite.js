import React, { Component } from 'react';
import AlertSuccessStudy from './AlertSuccessStudy';
import AlertErrorStudy from './AlertErrorStudy';

class ViewAndWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            showAlertStudy: ''
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    clickCheck = () => {
        if (this.state.answer === this.props.name || this.state.answer === this.props.pronunciation) {
            this.setState({
                showAlertStudy: 'success'
            });
        } else {
            this.setState({
                showAlertStudy: 'error'
            });
        }
    }

    render() {
        return (
            <div className="viewAndWrite">
                <h2>Xem và viết đáp án</h2>
                <div className="viewVocab">{this.props.mean}</div>
                <div className="writeVocab">
                    <input
                        type="text"
                        className="form-control"
                        name="answer"
                        id=""
                        placeholder="Nhập tên hoặc cách đọc"
                        onChange={(event) => this.isChange(event)}
                    />
                </div>
                <button name="" id="" className="btn btn-primary check" onClick={this.clickCheck}>
                    kiểm tra
                </button>
                {this.state.showAlertStudy === 'success' && <AlertSuccessStudy name = {this.props.name} pronunciation = {this.props.pronunciation} mean = {this.props.mean} example = {this.props.example} example_mean = {this.props.example_mean} howtolearnNext = {this.props.howToLearnNext}/>}
                {this.state.showAlertStudy === 'error' && <AlertErrorStudy name = {this.props.name} pronunciation = {this.props.pronunciation} mean = {this.props.mean} example = {this.props.example} example_mean = {this.props.example_mean} howToLearnBack = {this.props.howToLearnBackWrite}/>}
            </div>
        );
    }
}

export default ViewAndWrite;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertSuccessStudy from '../grammar/AlertSuccessStudy';
import AlertErrorStudy from '../grammar/AlertErrorStudy';

class ViewAndChooseMean extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption: '',
            optionValue: this.takeOptions(),
            showAlertStudy: ''
        }
    }
    takeOptions = () => {
        const { grammarData } = this.props.study;
        const correctOptions = this.props.grammar_id;
        const otherOptions = grammarData.map(value => value.grammar_id).filter(grammar_id => grammar_id !== correctOptions);
        const randomOptions = this.shuffle(otherOptions).slice(0, 3);
        const allOptions = this.shuffle([...randomOptions, correctOptions]);
        return allOptions;
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    clickOptionChoose = (option) => {
        var optionChoose = document.querySelectorAll('.optionChoose')
        for (var i = 0; i < optionChoose.length; i++) {
            optionChoose[i].onclick = function () {
                for (let a = 0; a < optionChoose.length; a++) {
                    optionChoose[a].classList.remove('optionChooseColor')

                }
                this.classList.add('optionChooseColor')
            }
        }
        this.setState({
            selectOption: option
        });
    }

    clickCheck = () => {
        const correctOptions = this.props.grammar_id;
        const {selectOption} = this.state;
            if (correctOptions === selectOption){
                this.setState({
                    showAlertStudy:'success'
                });
            }else{
                this.setState({
                    showAlertStudy:'error'
                });
            }
    }

    render() {
        console.log(this.props.grammar_id);
        const {grammarData} = this.props.study;
        const meanOptionById = (id) => {
            const nameOption = grammarData.find(value => value.grammar_id === id);
            return nameOption ? nameOption.mean : '';
        }
        return (
            <div className="viewAndChoose">
                <h2>Hãy xem và chọn đáp án</h2>
                <div className="view_grammar">{this.props.name}</div>
                <div className="optionChooseALL">
                    {
                        this.state.optionValue.map(value => (
                            <button key={value} type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose(value)}>
                                {meanOptionById(value)}
                            </button>
                        ))
                    }
                </div>
                <button name="" id="" className="btn btn-primary check" onClick = {this.clickCheck}>
                    kiểm tra
                </button>
                {this.state.showAlertStudy === 'success' && <AlertSuccessStudy name = {this.props.name} mean = {this.props.mean} example = {this.props.example} mean_example = {this.props.mean_example} howToLearnNext = {this.props.howToLearnNext}/>}
                {this.state.showAlertStudy === 'error' && <AlertErrorStudy  name = {this.props.name} mean = {this.props.mean} example = {this.props.example} mean_example = {this.props.mean_example} howToLearnBack= {this.props.howToLearnBackChooseMean}/>}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        study: state.study
    }
}
export default connect(mapStateToProps)(ViewAndChooseMean);
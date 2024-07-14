import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertSuccessStudy from '../vocabulary/AlertSuccessStudy';
import AlertErrorStudy from '../vocabulary/AlertErrorStudy';

class ListenAndChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption:'',
            optionValue : this.takeOptions(),
            showAlertStudy: ''
        }
    }
    
    clickIconSound = () => {
        var clickIcon = document.querySelector('.fa-solid.fa-volume-high');
        console.log(clickIcon);
        var soundCard = document.querySelector('.audios');
        clickIcon.onclick = function () {
            soundCard.play();
            this.classList.toggle('scale');
            this.addEventListener("webkitAnimationEnd", function () {
                this.classList.remove('scale')
            })
        }
    }
    takeOptions = () => {
        const {vocabularyData} = this.props.study;
        const correctOptions = this.props.vocab_id;
        const otherOptions = vocabularyData.map(value => value.vocab_id).filter(vocab_id => vocab_id !== correctOptions);
        // console.log(otherOptions);
        const randomOptions = this.shuffle(otherOptions).slice(0,3);
        // console.log(randomOptions);
        const allOptions = this.shuffle([...randomOptions,correctOptions]);
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
            selectOption:option
        });
    }

    clickCheck = () => {
        const correctOptions = this.props.vocab_id;
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
        const {vocabularyData} = this.props.study;
        const nameOptionById = (id) => {
            const nameOption = vocabularyData.find(value => value.vocab_id === id);
            return nameOption ? nameOption.name : '';
        }
        return (
            <div className="listenAndChoose">
                <h2>Hãy nghe và chọn đáp án</h2>
                <div className="sound_listen">
                    <audio className="audios" autoplay>
                        <source src={"/sound/" + this.props.sound} type="audio/mpeg" />
                    </audio>
                    <i className="fa-solid fa-volume-high" onClick={() => this.clickIconSound()} />
                </div>
                <div className="optionChooseALL">
                    {this.state.optionValue.map(value =>(
                        <button key={value} type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose(value)}>
                        {nameOptionById(value)}
                    </button>
                    ))}
                </div>
                <button name="" id="" className="btn btn-primary check" onClick={this.clickCheck}>
                    kiểm tra
                </button>
                {this.state.showAlertStudy === 'success' && <AlertSuccessStudy name = {this.props.name} pronunciation = {this.props.pronunciation} mean = {this.props.mean} example = {this.props.example} example_mean = {this.props.example_mean} howtolearnNext = {this.props.howToLearnNext}/>}
                {this.state.showAlertStudy === 'error' && <AlertErrorStudy name = {this.props.name} pronunciation = {this.props.pronunciation} mean = {this.props.mean} example = {this.props.example} example_mean = {this.props.example_mean} howToLearnBack = {this.props.howToLearnBackChoose}/>}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        study: state.study
    }
}
export default connect(mapStateToProps)(ListenAndChoose)
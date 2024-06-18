import React, { Component } from 'react';

class ViewAndChoose extends Component {
    clickOptionChoose = () => {
        var optionChoose = document.querySelectorAll('.optionChoose')
        for (var i = 0; i < optionChoose.length; i++) {
            optionChoose[i].onclick = function () {
                for (let a = 0; a < optionChoose.length; a++) {
                    optionChoose[a].classList.remove('optionChooseColor')

                }
                this.classList.add('optionChooseColor')
            }
        }
    }
    render() {
        return (
            <div className="viewAndChoose">
                <h2>Hãy xem và chọn đáp án</h2>
                <div className="view_grammar">có...(sở hữu)</div>
                <div className="optionChooseALL">
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        います
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        あります
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        始めます
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        vてみます
                    </button>
                </div>
                <button name="" id="" className="btn btn-primary check">
                    kiểm tra
                </button>
            </div>
        );
    }
}

export default ViewAndChoose;
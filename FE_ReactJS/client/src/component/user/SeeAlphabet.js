import React, { Component } from 'react';
import MenuIndex from './MenuIndex';

class SeeAlphabet extends Component {
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_alphabet container-fluid">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <a
                                    name=""
                                    id=""
                                    href='/'
                                    className="btn btn-primary mb-3"
                                    role="button"
                                >
                                    <h3>Hiragana</h3>
                                    <h2>あ</h2>
                                    <p className="study_free">Học thử miễn phí</p>
                                </a>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <a
                                    name=""
                                    id=""
                                    href='/'
                                    className="btn btn-primary mb-3"
                                    role="button"
                                >
                                    <h3>Katagana</h3>
                                    <h2>ア</h2>
                                    <i className="fa-solid fa-lock" />
                                </a>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <a
                                    name=""
                                    id=""
                                    href='/'
                                    className="btn btn-primary mb-3"
                                    role="button"
                                >
                                    <h3>Bộ thủ</h3>
                                    <h2>一</h2>
                                    <i className="fa-solid fa-lock" />
                                </a>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <a
                                    name=""
                                    id=""
                                    href='/'
                                    className="btn btn-primary "
                                    role="button"
                                >
                                    <h3>Hán tự</h3>
                                    <h2>学</h2>
                                    <i className="fa-solid fa-lock" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SeeAlphabet;
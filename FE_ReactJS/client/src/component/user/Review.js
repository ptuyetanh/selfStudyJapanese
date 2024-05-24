import React, { Component } from 'react';
import MenuIndex from './MenuIndex';

class Review extends Component {
    render() {
        return (
            <div className='All'>
                <MenuIndex />
                <main>
                    <div className="content">
                        <div className="vocabulary">
                            <h3>
                                Hiện tại chưa có từ vựng để <br />
                                ôn tập
                            </h3>
                            <button type="button" className="btn btn-primary">
                                Từ vựng
                            </button>
                        </div>
                        <div className="grammar">
                            <h3>
                                Hiện tại chưa có ngữ pháp để <br /> ôn tập
                            </h3>
                            <button type="button" className="btn btn-primary">
                                Ngữ pháp
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Review;
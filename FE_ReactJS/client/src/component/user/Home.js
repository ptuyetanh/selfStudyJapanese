import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: ''
        }
    }
    
    componentDidMount() {
        this.props.isAuthUser();
    }

    render() {
        if (!this.props.auth.isauth) {
            return <div>đăng nhập lỗi</div>
        }
        return (
            <main>
                <MenuHome />
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
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        logIn: state.logIn
    }
}
const mapDispatchToProps = {
    isAuthUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
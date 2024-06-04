import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import AlphabetFree from '../alphabet/AlphabetFree';
import AlphabetLook from '../alphabet/AlphabetLook';

class SeeAlphabet extends Component {
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_alphabet container-fluid">
                        <div className="row">
                            <AlphabetFree/>
                            <AlphabetLook h3 = 'Katagana' h2 = 'ア'/>
                            <AlphabetLook h3 = 'Bộ thủ' h2 = '一'/>
                            <AlphabetLook h3 = 'Hán tự' h2 = '学'/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SeeAlphabet;
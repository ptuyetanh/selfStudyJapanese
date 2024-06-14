import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class ChatBots extends Component {
    render() {
        return (
                <ChatBot
                    // headerTitle="Luyện shadowing nào"
                    // speechSynthesis={{ enable: true, lang: 'ja' }}
                    // recognitionEnable={true}
                    // recognitionLang="ja"
                    steps={[
                        {
                            id: 'hello',
                            message: 'おはようございます。',
                            trigger: 'sound', 
                        },
                        {
                            id: 'sound', 
                            component: (
                                <audio controls>
                                    <source src={'/sound/'+ this.props.sound_shadowing} type="audio/mp3" />
                                </audio>
                            ),
                            trigger: 'notice',
                        },
                        // {
                        //     id: 'note',
                        //     component: (
                        //         <h5>Hãy nghe nhiều lần và luyện tập</h5>
                        //     ),
                        //     trigger: 'one_a',
                        // },
                        // {
                        //     id: 'one_a',
                        //     message: this.props.one_a,
                        //     trigger: 'one_b_write', 
                        // },
                        // {
                        //     id: 'one_b_write',
                        //     user: true,
                        //     trigger: 'one_b',
                        // },
                        // {
                        //     id: 'one_b',
                        //     component: (
                        //         <div>Đáp án: {this.props.one_b}</div>
                        //     ),
                        //     trigger: 'two_a',
                        // },
                        // {
                        //     id: 'two_a',
                        //     message: this.props.two_a,
                        //     trigger: 'two_b_write', 
                        // },
                        // {
                        //     id: 'two_b_write',
                        //     user: true,
                        //     trigger: 'two_b',
                        // },
                        // {
                        //     id: 'two_b',
                        //     component: (
                        //         <div>Đáp án: {this.props.two_b}</div>
                        //     ),
                        //     trigger: 'three_a',
                        // },
                        // {
                        //     id: 'three_a',
                        //     message: this.props.three_a,
                        //     trigger: 'three_b_write', 
                        // },
                        // {
                        //     id: 'three_b_write',
                        //     user: true,
                        //     trigger: 'three_b',
                        // },
                        // {
                        //     id: 'three_b',
                        //     component: (
                        //         <div>Đáp án: {this.props.three_b}</div>
                        //     ),
                        //     trigger: 'four_a',
                        // },
                        // {
                        //     id: 'four_a',
                        //     message: this.props.four_a,
                        //     trigger: 'four_b_write', 
                        // },
                        // {
                        //     id: 'four_b_write',
                        //     user: true,
                        //     trigger: 'four_b',
                        // },
                        // {
                        //     id: 'four_b',
                        //     component: (
                        //         <div>Đáp án: {this.props.four_b}</div>
                        //     ),
                        //     trigger: 'five_a',
                        // },
                        // {
                        //     id: 'five_a',
                        //     message: this.props.five_a,
                        //     trigger: 'five_b_write', 
                        // },
                        // {
                        //     id: 'five_b_write',
                        //     user: true,
                        //     trigger: 'five_b',
                        // },
                        // {
                        //     id: 'five_b',
                        //     component: (
                        //         <div>Đáp án: {this.props.five_b}</div>
                        //     ),
                        //     trigger: 'mean',
                        // },
                        // {
                        //     id: 'mean',
                        //     component: (
                        //         <div>Nghĩa: {this.props.mean_shadowing}</div>
                        //     ),
                        //     trigger:'notice'
                        // },
                        {
                            id: 'notice',
                            component: (
                                <div>Bài học được hoàn thành</div>
                            ),
                            end: true,
                        },
                    ]}
                />
        );
    }
}

export default ChatBots;
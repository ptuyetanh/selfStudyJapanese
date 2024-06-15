import React, { Component } from 'react';

class FlashCardsVocab extends Component {
    render() {
        return (
            <div class="flashCards">
                <div class="sound_flash_cards">
                    <audio className="audios">
                        <source src='' type="audio/mpeg" />
                    </audio>
                    <i class="fa-solid fa-volume-high"></i>
                </div>
                <div class="flashcardBefore">
                    <h2 class="name">学生</h2>
                    <p class="example">私は学生です</p>
                </div>
                <div class="flashcardAfter">
                    <h3 class="mean">Ý nghĩa: Học sinh</h3>
                    <h3 class="pronunciation">がくせい</h3>
                    <h3 class="sino_vietnamese_sound">Âm hán việt: HỌC SINH</h3>
                </div>
                <i class="fa-solid fa-hand-pointer"></i>
                <a name="" id="" class="btn btn-primary continue" href="#" role="button">Tiếp tục</a>
            </div>
        );
    }
}

export default FlashCardsVocab;
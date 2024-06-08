document.addEventListener('DOMContentLoaded', function () {
    //alphabet_audio
    var button_alphabet = document.querySelectorAll('.button_alphabet');
    for (var i = 0; i < button_alphabet.length; i++) {
        button_alphabet[i].onclick = function () {
            var audio = document.querySelector('.audios');
            var source = document.querySelector('source')
            source.src = this.getAttribute('data-srcAudio')
            console.log(source);
            audio.load();
            audio.play();

        }
    }
    // alphabet_flashcard
    // alphabet_flashcard right
    var clickRight = document.querySelector('i.fa-solid.fa-chevron-right');
    var flashcards = document.querySelectorAll('.flashcards_alphabet .flashcard');
    var numberFlashcardsNow = 0;
    var numberFlashcards = flashcards.length;
    clickRight.onclick = function() {
        var flashcardNow = flashcards[numberFlashcardsNow];
        console.log(flashcardNow);
        if (numberFlashcardsNow < numberFlashcards - 1) {
            numberFlashcardsNow++;
        }else{
            console.log('Học xong');
            numberFlashcardsNow = 0
        }
        var flashcardNext = flashcards[numberFlashcardsNow];
        flashcardNow.classList.remove('active');
        flashcardNext.classList.add('active');
    }
    // alphabet_flashcard right
    var clickLeft = document.querySelector('i.fa-solid.fa-chevron-left');
    clickLeft.onclick = function() {
        var flashcardNow = flashcards[numberFlashcardsNow];
        console.log(flashcardNow);
        if (numberFlashcardsNow > 0) {
            numberFlashcardsNow --;
        }else{
            numberFlashcardsNow = numberFlashcards - 1
        }
        var flashcardNext = flashcards[numberFlashcardsNow];
        flashcardNow.classList.remove('active');
        flashcardNext.classList.add('active');
    }
})
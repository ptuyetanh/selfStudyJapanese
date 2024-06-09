document.addEventListener('DOMContentLoaded',function(){
    //end soundshow
    var clickIcon = document.querySelectorAll('.fa-solid.fa-volume-high');
    console.log(clickIcon);
    var soundCard = document.querySelector('.audios');
    for (var i = 0; i < clickIcon.length; i++) {
        clickIcon[i].onclick = function() {
            soundCard.play();
            this.classList.toggle('scale');
            this.addEventListener("webkitAnimationEnd",function(){
                this.classList.remove('scale')
            })
         }
    }
    ////flashcard
    var flashCardsBefore = document.querySelector('.flashCards .flashcardBefore');
    var flashCardsAfter = document.querySelector('.flashCards .flashcardAfter')
    flashCardsBefore.onclick = function(){
        this.classList.add('hiddenBefore');
        flashCardsAfter.classList.add('showAfter');
        this.classList.remove('showBefore');
        flashCardsAfter.classList.remove('hiddenAfter');
    }
    flashCardsAfter.onclick = function(){
        flashCardsBefore.classList.remove('hiddenBefore');
        this.classList.remove('showAfter');
        flashCardsBefore.classList.add('showBefore');
        this.classList.add('hiddenAfter');
    } 
    //// listenAndChoose
    var optionChoose = document.querySelectorAll('.listenAndChoose .optionChoose')
    console.log(optionChoose);
    for (var i = 0; i < optionChoose.length; i++) {
         optionChoose[i].onclick = function() {
            for (let a = 0; a < optionChoose.length; a++) {
                optionChoose[a].classList.remove('optionChooseColor')
                
            }
            this.classList.add('optionChooseColor')
         }
        
    }
})
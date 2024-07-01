document.addEventListener('DOMContentLoaded',function(){
    //menu
    var iconBar = document.querySelector('.fa-bars');
    var menu = document.querySelector('.menuAll')
    iconBar.onclick = function(){
        menu.classList.toggle('hiddenMenu');
    }
    //pass eye and eye-slash
    var pass = document.getElementById('input_pass');
    var icon_eye = document.querySelector('.fa-eye');
    var icon_eye_slash = document.querySelector('.fa-eye-slash');
    icon_eye.onclick = function () {
        var type_pass_show = pass.getAttribute('type');
        if (type_pass_show) {
            pass.setAttribute('type','text');
            icon_eye_slash.classList.remove('hidden');
            this.classList.toggle('hidden_eye');
        }
    }
    icon_eye_slash.onclick = function() {
        var type_pass_hiddens = pass.getAttribute('type');
        if (type_pass_hiddens) {
            pass.setAttribute('type','password')
            this.classList.toggle('hidden');
            icon_eye.classList.remove('hidden_eye');
        } 
    }
})
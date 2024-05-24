document.addEventListener('DOMContentLoaded', function () {
    var course = document.getElementsByClassName('nav-item');
    var sign_up = document.querySelector('.sign_up');
    console.log(sign_up);
    var log_in = document.querySelector('.sign_in')
    //sign_up log_in
    sign_up.onclick = function(){
        // console.log("đã click");
        for (let b = 0; b < course.length; b++) {
            course[b].classList.remove('active');              
        }
    }
    log_in.onclick = function(){
        // console.log("đã click");
        for (let c = 0; c < course.length; c++) {
            course[c].classList.remove('active');              
        }
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
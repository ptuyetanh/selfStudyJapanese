document.addEventListener('DOMContentLoaded', function () {
    var course = document.getElementsByClassName('nav-item');
    for (var i = 0; i < course.length; i++) {
        course[i].onclick = function () {
            console.log('ddax click');
            for (var a = 0; a < course.length; a++) {
                course[a].classList.remove('active');
            }
            this.classList.toggle('active');
        }
    }
})
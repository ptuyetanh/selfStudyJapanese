document.addEventListener('DOMContentLoaded',function(){
    //show and hidden info
    var infoUser = document.querySelector('.info_user');
    var infoDetails = document.querySelector('.info_details');
    console.log(infoDetails);
    infoUser.onclick = function() {
        // console.log("đã click");
        infoDetails.classList.toggle('hidden_info');
    }
})
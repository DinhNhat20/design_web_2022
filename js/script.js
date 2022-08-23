function changeImage(obj) {
    var path = obj.src
    var img = document.getElementById("mainShow")
    img.src = path
}

var index = 1;
changeImageTime = function(){
    var imgs = ["./images/code5.jpg", "./images/C++5.png", "./images/code4.jpg"];
    document.getElementById('mainShow').src = imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImageTime, 3000);
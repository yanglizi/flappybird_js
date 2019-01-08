
function load(sourse,callback){
    var imgElms = {};
    var imgCount= sourse.length;
    for (var i = 0; i < imgCount; i++){
        var name = sourse[i].name;
        var newImg = new Image();
        newImg.src = sourse[i].src;
        imgElms[name] = newImg;
        imgElms[name].addEventListener("load",function(){
            imgCount--;
            if(imgCount == 0){
                callback(imgElms);
            }
        })
    }
}
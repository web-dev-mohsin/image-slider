var photos = ["img/1.jpg","img/2.jpg","img/3.jpg"];
var imgTagSelect = document.querySelector("img");


var count = 0;

function next(){
    count++;
    if(count >=photos.length){
        count = 0;
        imgTagSelect.src = photos[count];
    }else{
        imgTagSelect.src = photos[count];

    }

}

 
function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imgTagSelect.src = photos[count];
    }else{
        imgTagSelect.src = photos[count];
    }
}
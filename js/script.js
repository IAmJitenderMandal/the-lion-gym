var i = 0;
var imgs = [
    "imgs/img1.jpg",
    "imgs/img2.jpg",
    "imgs/img3.jpg"    
]

function slider () { 
    document.slide.src = imgs[i];
    
    if(i == imgs.length - 1){ 
        i = 0;    
    }else if( i <= imgs.length - 1) {
        i++;
    }
    
    setTimeout("slider()", 2000);
}

slider();


// trainer page 






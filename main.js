

// scrolling actions 
var hdrScrl = document.getElementById('header');
var scrlSign = document.querySelector('#scrl-sign');

window.addEventListener('scroll' , function(){

    this.scrollY >= 50 ? hdrScrl.style.backgroundColor = 'rgb(17, 15, 14)'
                       : hdrScrl.style.backgroundColor = 'transparent';
    
    this.scrollY >= 50 ? scrlSign.style.display = 'block'
                       : scrlSign.style.display = 'none';                                   
})


// pop up  actions 
var popUpMain = document.getElementById('popUpMain');
var popUpImg = document.getElementById('popUpImg');
var popUpIcon = document.getElementById('popUpIcon');
var imgElement = document.querySelectorAll('#imgElement');

// close the pop up slide
popUpIcon.addEventListener('click' , function(){
    popUpMain.style.display = 'none';
})

// display the pop up slide
for( var i = 0 ; i < imgElement.length ; i++ )
    {
        imgElement[i].addEventListener('click' , function(e){

            var imgElementSrc = e.target.getAttribute('src');
            popUpImg.src = imgElementSrc;
            console.log(imgElementSrc)
            popUpMain.style.display = 'flex'; 

        })
    }




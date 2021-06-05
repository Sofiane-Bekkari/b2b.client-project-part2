//*** Berger Menu ***//
const berger = document.querySelector('.berger');
//const shadow = document.querySelector('.shadow');
const navBar = document.querySelector('.nav-bar');

// Event for berger menu
berger.addEventListener('click', function(){
    navBar.classList.toggle('show-nav');
})


///**** lamp light ****/// 

let lamp = document.querySelector('.light-lamp');
const showcaseWidth = document.querySelector('.showcase');
const lampDark = document.querySelector('.lamp-dark-1');
const yellowLamp = document.querySelector(".lamp-yellow");
const lightTime = document.querySelector('.spot-light');
const shadowLight = document.querySelector('img.lamp-shadow');

//**** Main Text Hide ****//
const mainText = document.getElementById('hide-right');

//*** FIXED Section ***// 
const yellowSection = document.querySelector(".yellow-section");
const blueSection = document.querySelector(".section-blue");

// TV, Sofa, Window, Section
const panelTv = document.querySelector(".panel-tv");
const panelSofa = document.querySelector(".panel-sofa");
const panelWindow = document.querySelector(".panel-window");
const pillowSofa = document.querySelector(".pillows");

//LAYERS SLIDE
const layerTv = document.querySelector('.layer-tv');
const layerSofa = document.querySelector('.layer-sofa');
const layerWin = document.querySelector('.layer-win');

// TEXTS ANIMATION
const textTV = document.querySelector(".t-tv");
const textSofa = document.querySelector(".t-sofa");
const textWindow = document.querySelector(".t-window");
console.log(textTV)

// ELEMENTS ANIMATION
const elementTV = document.querySelector(".tv");
const elementSofa = document.querySelector(".sofa");
const elementWindow = document.querySelector(".window");
console.log(elementTV);

// Event on Scroll
window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    console.log("Scrolling: ",scroll)
    // hide text
    if (scroll > 100){
        mainText.style.transform = "translate(-1500px)"
    }
    else if (scroll < 100){
        mainText.style.transform = "translate(0px)"
    }

    // Scrolling the grey lamp
    if (scroll > 50 & width > 890){
        lamp.style.top = `${calcul - 100}px`;
    }

    // test yollow FIXED ******
    if (scroll > 1800) {
        yellowSection.style.position = "fixed";
        yellowSection.style.top = "0%";
        yellowSection.style.width = "100%";
    } else {
        yellowSection.style.position = "static"
    }
    
    // test tv FIXED  ****** 
    if(scroll > 2500){ 
        panelTv.style.position = "fixed";
        panelTv.style.top = "0%";
        layerTv.style.transform = 'translateY(0%)';
        layerTv.style.visibility = 'visible';

      
    } else {
        panelTv.style.position = "static"
        layerTv.style.visibility = 'hidden';
        layerTv.style.transform = 'translateY(-100%)';
    }
    // test ELEMENT ANIMATION
    if(scroll > 2550) {
        textTV.style.transform = 'translateY(0%)';
        elementTV.style.transform = 'translateX(100%)';
       
    } else {
        textTV.style.transform = 'translateY(120%)';
        elementTV.style.transform = 'translateX(100%)';
      
    }


    // test Sofa FIXED ******
    if(scroll > 3500){
        panelSofa.style.position = "fixed";
        panelSofa.style.top = "0%";
        layerSofa.style.visibility = 'visible';
        layerSofa.style.transform = 'translateY(0%)';
    } else {
        panelSofa.style.position = "static";
        layerSofa.style.transform = 'translateY(-100%)';
        layerSofa.style.visibility = 'hidden';
    }
    // test ELEMENTS ANIMATION
    if(scroll > 3630) {
        textSofa.style.transform = 'translateY(0%)';
        elementSofa.style.transform = 'translateX(-38%)'
        pillowSofa.style.top = '550px'; 
        pillowSofa.style.transition = '3.5s';
    } else {
        textSofa.style.transform = 'translateX(-130%)';
        elementSofa.style.transform = 'translateX(100%)';
        pillowSofa.style.top = '-150px';
        pillowSofa.style.transition = '1s';

    }



    // test Window FIXED ****** 
    if(scroll > 4500){
        panelWindow.style.position = "fixed";
        panelWindow.style.top = "0%";
        layerWin.style.transform = 'translateY(0%)';
        layerWin.style.visibility = 'visible';

    } else {
        panelWindow.style.position = "static";
        layerWin.style.visibility = 'hidden';
        layerWin.style.transform = 'translateY(-100%)';
    }
    // test ELEMENT ANIM
    if(scroll > 4630) {
        elementWindow.style.transform = 'translateX(0%)';
        textWindow.style.transform = 'translateX(0%)';
    } else {
        textWindow.style.transform = 'translateX(-150%)';
        elementWindow.style.transform = 'translateX(580%)'

    }
        

    // Cheching not true  <900>
    if (width > 900){
        checkScreen();
    }

    // Cheching if time to lighting            
    if (width > 900){
        timeLighting();
        continueScroll();
        yellowCheck();
        elementAnim1();

    }

    // Cheching light on 1200px 
    if (width > 1200){
        timeLightingTwo();
        continueScroll();
    }

    // Cheching light on 1400px 
    if (width > 1400){
        timeLightingThree();
        continueScroll();
    }
    // 2500px
    if (width > 2500){
        lamp.style.top = `${calcul -300}px`;
        checkScreen2();
        timeLightingSuperLarge();
        continueScrollX();
        yellowCheckX();
    }
    // 2880PX
    if (width > 2800){
        lamp.style.top = `${calcul -300}px`;
        checkScreen3(); // for screen check
       // sliderBlueX(); // for slider
       // sliderSofaX(); // slider sofa
       // sliderWindowX(); // slider WINDOW
        timeLightingSuperLargeX(); // for hite light
        continueScrollX2(); // keep on scroll
        yellowCheckX2(); // keep move lamp
    }

});

//**** NEW FUN FOR ELEMENT ANIMATION TV ****//
function elementAnim1(){
    const scroll = window.pageYOffset
    const width = showcaseWidth.offsetWidth
    // 900px
    // test ELEMENT ANIMATION
    if(scroll > 2630 && width > 900) {
        textTV.style.transform = 'translateY(0%)';
        textTV.style.transition = 'all 2s ease-in'
        elementTV.style.transition = 'all 2.5s ease-in-out'
        elementTV.style.transform = 'translateX(-40%)';
       
    } else {
        textTV.style.transform = 'translateY(-220%)';
        textTV.style.transition = 'all 1s ease-in';
        elementTV.style.transition = 'all 1s ease-in-out'
        elementTV.style.transform = 'translateX(80%)';
      
    }
}





/*** CONTINUE SCROLL ***/
function continueScroll(){
    scroll = window.pageYOffset

    if(scroll > 1200){
        lampDark.style.top = `${scroll -1100}px`
        lightTime.style.display = `none`;
        shadowLight.style.display = `none`;
        
    }
}
//***CONTINUE S FOR 2500PX***//
function continueScrollX(){
    scroll = window.pageYOffset

    if(scroll > 1400){
        lampDark.style.top = `${scroll -1300}px`
        lightTime.style.display = `none`;
        shadowLight.style.display = `none`;
        
    }
}
//***CONTINUE S FOR 2880PX***//
function continueScrollX2(){
    scroll = window.pageYOffset

    if(scroll > 1800){
        lampDark.style.top = `${scroll -1300}px`
        lightTime.style.display = `none`;
        shadowLight.style.display = `none`;
        
    }
}
/*** YELLOW LAMP 2500px ***/
function yellowCheckX(){

    const width = showcaseWidth.offsetWidth
    const scroll = window.pageYOffset

    if(scroll > 2280 && width < 2800){
        yellowLamp.style.display = `block`;
        yellowLamp.style.top = `${scroll -2040}px`;
        console.log('THAT HAPPEND 2500px!!')
     }
}
/*** YELLOW LAMP 2880px ***/
function yellowCheckX2(){

    scroll = window.pageYOffset

    if(scroll > 3000){
        yellowLamp.style.display = `block`;
        yellowLamp.style.top = `${scroll -2150}px`;
       console.log('THAT HAPPEND 2880px!!')
     }
}  
/*** YELLOW LAMP ***/
function yellowCheck(){

    const scroll = window.pageYOffset
    const width = showcaseWidth.offsetWidth

    if(scroll > 1790 && width < 2000){
        lampDark.style.display = 'none';
        yellowLamp.style.display = `block`;
        //yellowLamp.style.top = `${scroll -1980}px`;
        yellowLamp.style.top = "0%";
    }
    else {
         lampDark.style.display = 'block';

     }
} 

//***Functions for Light***///
function checkScreen(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 650 & width > 890 ) {
        lamp.style.display = `none`;
        yellowLamp.style.display = `none`; 
        lampDark.style.top =  `90px`; 
       
    } else {
        lamp.style.display = `block`;
        yellowLamp.style.display = `block`; 
}}
//** 1200 CHECK */
function checkScreen12(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 800 & width < 1400 ) {
        lamp.style.display = `none`;
        yellowLamp.style.display = `none`; 
        lampDark.style.top =  `${scroll -500}px`; 
      
    } else {
        lamp.style.display = `block`;
        yellowLamp.style.display = `block`; 
}}
//**checking on 2500px **//
function checkScreen2(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 850 && width > 2400 ) {
        lamp.style.display = `none`;
        lampDark.style.display = `block`; 
        lampDark.style.top =  `-70px`; 
       
    } else {
        lamp.style.display = `block`; 
       
}}
//**checking on 2880/1880px **//
function checkScreen3(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    if (scroll > 1000 && width > 2800 ) {
        lamp.style.display = `none`; 
        lampDark.style.top =  `700px`; 
     
    } else {
        lamp.style.display = `block`; 
       
}}

function timeLighting(){
    // ON the light in right time
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 900 && width < 1190 ) { 
      lampDark.style.top = `20px`;
      lightTime.style.transform = `block`;
      lightTime.style.display = `block`;
      shadowLight.style.display = `block`;
      
    } else {
        lightTime.style.display = `none`;
        shadowLight.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
     
    }
}

/// 1200PX
function timeLightingTwo(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 950 ) {
        lampDark.style.top = `70px`
        lightTime.style.display = `block`;
        lampDark.style.display = `block`;
        shadowLight.style.display = `block`;
        console.log('LIGHT IS ON 1200px!');
        console.log('scroll is:', scroll)
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
        shadowLight.style.display = `none`;
      
    }
}

/// 1400px
function timeLightingThree(){

        let scroll = window.pageYOffset
        let width = showcaseWidth.offsetWidth
        let calcul = scroll - 300
    
        if (scroll >= 900 & width > 1400) {
            lampDark.style.top = `55px`
            lightTime.style.transform = `block`;
            lightTime.style.display = `block`;
            shadowLight.style.display = `block`
          
        } else {
            lightTime.style.display = `none`;
            lampDark.style.top = `${calcul -650}px`;
            shadowLight.style.display = `none`;
           
        }
}
// 2500PX
function timeLightingSuperLarge(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 1200 & width > 2500) { 
        lampDark.style.top = `60px`
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        shadowLight.style.display = `block`
      
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -950}px`;
        shadowLight.style.display = `none`;
      
    }
}  

// 2880PX
function timeLightingSuperLargeX(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 1500 & width > 2800) { 
        lampDark.style.top = `300px`
        console.log(scroll)
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        shadowLight.style.display = `block`
       
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -950}px`;
        shadowLight.style.display = `none`;
       
    }
}  



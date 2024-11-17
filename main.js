// window.addEventListener("scroll", function(event){

//     var top = this.scrollY;

//     console.log(top);

//     var layers = document.querySelectorAll("[data-type='parallax']");
//     console.log(layer);

//     var layer, speed, yPos;
//     for (var i = 0; i < layers.length; i++) {
//         layer = layers[i];
//         speed = layer.getAttribute('data-speed');
//         var yPos = -(top * speed / 100);
//         layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

//     }
// });

// Parallax scroll effect
// window.addEventListener("scroll", function (event) {
//     var top = this.scrollY;
//     console.log(top);

//     var layers = document.querySelectorAll("[data-type='parallax']");
//     var layer, speed, yPos;
//     for (var i = 0; i < layers.length; i++) {
//         layer = layers[i];
//         speed = layer.getAttribute('data-speed');
//         yPos = -(top * speed / 100);
//         layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
//     }
// });

// const spacat = document.querySelector('#spacat');
// const layerOne = document.querySelector('.layer-1');
// const layerTwo = document.querySelector('.layer-2');
// const layerThree = document.querySelector('.layer-3');
// const mouse = document.querySelector('#mouse');
// const mouseCenter = document.querySelector('#mouse-center');

// document.addEventListener('mousemove', (evt) => {
//     let cx = window.innerWidth / 2;
//     let cy = window.innerHeight / 2;

//     let clientX = evt.clientX;
//     let clientY = evt.clientY;

//     let mouseLoc = `Top mouse ${clientX}px and ${clientY}px`;
//     mouse.innerHTML = mouseLoc;

//     let mc_x = cx - clientX;
//     let mc_y = cy - clientY;

//     let centerLoc = `center ${mc_x}px and ${mc_y}px`;
//     mouseCenter.innerHTML = centerLoc;

//     layerOne.style.transform = 'translateX(' + mc_x / 100 + '%) translateY(' + mc_y / 100 + '%)';
    
//     layerTwo.style.transform = 'translateX(' + mc_x / 350 + '%) translateY(' + mc_y / 350 + '%)';
//     layerThree.style.transform = 'translateX(' + mc_x / 200 + '%) translateY(' + mc_y / 200 + '%)'; 

// });

// window.addEventListener('scroll', function (event) {
//     var winScroll = this.document.body.scrollTop || document.documentElement.scrollTop;
//     var height = this.document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById('myBar').style.width = scrolled + '%';
// });


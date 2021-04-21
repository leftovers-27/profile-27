const slider=document.querySelector(".slider");
const before=document.querySelector(".before-container");
const after=document.querySelector(".after-container");
const container=document.querySelector(".container");

const drag=(e) => {
let xPos=e.layerX;
let size=container.offsetWidth;
after.style.width=xPos+"px";
slider.style.left=xPos+"px";
if(xPos<50){
    after.style.width=0;
    slider.style.left=o;
}
if(xPos+50 > size){
    after.style.width= size+"px";
    slider.style.left= size+"px";
}

}

container.addEventListener("mousemove",drag);

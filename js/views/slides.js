import { WRender, ComponentsManager, WAjaxTools, WArrayF } from "../WDevCore/WModules/WComponentsTools.js";
import { StylesControlsV2, StylesControlsV3, StyleScrolls } from "../WDevCore/StyleModules/WStyleComponents.js"
import { css } from "../WDevCore/WModules/WStyledRender.js";

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];


const btnLeft = document.querySelector("#btn-left");
const btnRight= document.querySelector("#btn-right");

btnLeft.addEventListener("click",e => movetoLeft())
btnRight.addEventListener("click",e => movetoRight())

let operacion = 0;
    widthImg = 100 / sliderSection.length

function movetoRight() {
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
}
function movetoLef() {

}

/* slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let slider_sectionFirst = document.querySelectorAll(".slide_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slider_sectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Previus() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    let slider_sectionFirst = document.querySelectorAll(".slide_section")[0];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Previus();
}); */
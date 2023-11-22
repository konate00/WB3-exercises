"use strict";

window.onload = init;

let buttonConvert;
function init(){
    buttonConvert = document.getElementById('buttonConvert');
    buttonConvert.onclick = buttonConvertClick;
}

function buttonConvertClick(){
    const inputDate = document.getElementById('inputDate').value;
    console.log(inputDate);
    // Calculate
    // let dateAsDate = new Date(inputDate.toString());
    // console.log(inputDate.toString());
    // console.log(dateAsDate.toString());
    let dateObj = new Date(inputDate);
    let date = dateObj.toString();
    // let date = dateObj.toLocaleString();
    // let date = dateObj.toDateString();
    // let date = dateObj.toISOString();

    //Output

    let outputDate = document.getElementById('outputDate');
    outputDate.innerText = date;
}
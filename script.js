const navBar = document.querySelector(".navbar");
const lineA = document.getElementById("line1");
const lineB = document.getElementById("line2");
const lineC = document.getElementById("line3");
const feat = document.querySelector(".feature");
const ul = document.querySelector(".features");

const company = document.querySelector(".company");
const companyContent = document.querySelector(".company-content");
const featContent = document.querySelector(".feat-content");
const overlay = document.querySelector(".overlay");

navBar.addEventListener("click", ()=>{
    // console.log('clicked');
    lineA.classList.toggle("active");
    lineB.classList.toggle("active");
    lineC.classList.toggle("active");
    ul.classList.toggle("active");
    overlay.classList.toggle('active');
})
let featActive;
let companyActive;

feat.addEventListener('click', ()=>{
    
    featureActive =  featContent.classList.toggle('active');
    
})
company.addEventListener('click', ()=>{
    companyActive = companyContent.classList.toggle('active')
})

// cross.addEventListener("click", ()=>{
//     side.classList.toggle("active");
//     cross.classList.toggle("active");
// })
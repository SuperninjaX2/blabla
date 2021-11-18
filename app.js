(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()
/*

let title=document.getElementById('title'); 
let main=document.getElementById('images');
let price=document.getElementById('tag');
//index.html
let mtitle=document.getElementById('mtitle'); 
let spinner=document.getElementById('spinner');
let mprice=document.getElementById('mprice');
let body=document.getElementById("body");
function change(){
    title.innerHTML=mtitle;
    price.innerHTML=mprice;
}
body.addEventListener("load", function() {
        
    spinner.style.display="block";
}*/

const fetchBtn = document.getElementById("blog"); 
const title = document.getElementsByClassName("blog-card-title"); 
const desc = document.getElementsByClassName("desc"); 
  
fetchBtn.addEventListener("load", buttonHandler); 
  
// Defining buttonHandler function 
function buttonHandler() { 
  
    // First create an XMLHttprequest object 
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", "blog.json", true); 
    xhr.getResponseHeader("Content-type", "application/json"); 
  
    xhr.onload = function() { 
        const obj = JSON.parse(this.responseText); 
        Array.from(title).forEach((titles, index) => { 
            titles.innerText = obj.blog_post[index].title; 
        }); 
  
        Array.from(desc).forEach((description, index) => { 
            description.innerText = obj.blog_post[index].title; 
        }); 
    } 
  
    xhr.send(); 
}
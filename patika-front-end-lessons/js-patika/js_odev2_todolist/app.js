
var ulDOM = document.querySelector("#list");
var inputDOM = document.querySelector("#task");
var btnadd = document.querySelector("#liveToastBtn");

//inputDOM.value.trim() // prevent empty items
//<zx<xz<x gives error with innerHtml, use textContent
//***innerHTML=... delete textContent, use =+ operator

/* toast message
<div .......
    <div class="toast success hide"......
      <div class="toast-body">Listeye eklendi.</div>....

<div .........class="toast error hide" .......... */

btnadd.addEventListener("click", addElement)

function addElement() {
    //prevent empty item
    if (inputDOM.value.trim()) {
        //add to-do items 
        var liDOM = document.createElement("li");
        liDOM.textContent = inputDOM.value;
        liDOM.innerHTML += `<span class="close">×</span>`;
        ulDOM.appendChild(liDOM);
        //clean box
        inputDOM.value = "";
        //toast success message //Listeye eklendi.
        $(".success").toast("show")
    }
    //toast error message // Listeye boş ekleme yapamazsınız!
    else {
        $(".error").toast("show");
    }
}

//event.target--select clicked element
//parentElement--select parent 
//give click event all childs of ul. 
//using duplicated span,li or class selectors not working.
//<li>Yemek Yap<span class="close">×</span></li>

var list = document.querySelector('ul');

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        //remove to-do item //e.target span but hide parent li
        e.target.parentElement.style.display = "none";
    }
    // line-through to-do item //e.target li and line-through li
    else { e.target.classList.toggle('checked') }
});


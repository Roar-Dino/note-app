const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener('click', createNote);

loadStorage();
function createNote(){
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/trash.png';
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();

}

notesContainer.addEventListener('click', removeItem);

function removeItem(e){
    let target = e.target;
    if(target.tagName === "IMG"){
        console.log(e);
        target.parentNode.remove();
    } else if(target.tagName==='P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach((e)=>{
            e.onkeyup = function(){
                updateStorage;
            }
        })
    }
    updateStorage();
}

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function loadStorage(){
    notesContainer.innerHTML = localStorage.getItem('notes');
    
}

document.addEventListener('keydown',enterBtn);

function enterBtn(e){
    if(e.key==='Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
        updateStorage();
    }
}
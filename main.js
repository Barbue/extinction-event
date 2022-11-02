//1. querySelectorAll
//#ordered-dinos - parent id
let dinoList1 = document.querySelectorAll('#ordered-dinos li');

function olStrike(){
    for(let i = 0; i < dinoList1.length;i++){
        dinoList1[i].addEventListener('click',function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = 'line-through';
})
}
}
olStrike();

//#unordered-dinos - parent div
let dinoList2 = document.querySelector('#unordered-dinos');

dinoList2.addEventListener('click', function(event){

    let listItem = event.target;
    console.log(listItem.innerText);
    listItem.style.opacity = '0';
})

// #row  dinoimages
let dinoImages = document.querySelectorAll('#row img');

function images(){
    for(let i = 0; i < dinoImages.length;i++){
        dinoImages[i].addEventListener('click', function(){
            dinoImages[i].style.width = '0px';
})
}
}
images();


let dinoList3 = document.querySelectorAll('#unordered-dinos li');
let meteorButton = document.querySelector('#destroy-all');

meteorButton.addEventListener('click',function(){

for(let i = 0; i < dinoList1.length;i++){
    
        dinoList1[i].style.textDecoration = 'line-through';
}

for(let i = 0; i < dinoList3.length;i++){

       dinoList3[i].style.opacity = '0';
}
    
for(let i = 0; i < dinoImages.length;i++){

      dinoImages[i].style.width = '0px';
}
});


  





  






    


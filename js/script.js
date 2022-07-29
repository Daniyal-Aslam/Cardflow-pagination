const form = document.getElementById('search-form');
var mainBox = document.querySelector('.card-content');
var bioBox = document.querySelector('.card'); 
var avatar = document.querySelector('.card img');
var url; 
form.addEventListener('submit',e=>{
    e.preventDefault(); 
    var input = document.getElementById('type-search').value 
    var name = input.split(' ').join('-')
    alert(name);
    fetch('https://api.github.com/users/'+name)
    .then((response)=>response.json())
    .then((data)=>{
       avatar.setAttribute('src',`${data.avatar_url}`);
       console.log(data);
    })
    mainBox.appendChild(bioBox);
})
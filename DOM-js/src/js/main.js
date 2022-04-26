let  author = document.createElement('li');
let classAuthor = document.getElementById('play-list');
let playList = document.getElementById('user-list');

let whatAuthor = prompt('Введите имя автора');
let whatSound = prompt('Введите назву песни');

author.className = 'play-item';
author.innerHTML = whatAuthor;
playList.append(author);

// let color = document.getElementById('cont')

// let btn = document.querySelector('.btn');

// btn.onclick = function() {
//     console.log(this);
//     color.classList.toggle('red')
// }

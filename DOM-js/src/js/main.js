document.addEventListener("DOMContentLoaded", function(event) { 
    let div = document.getElementById('cont');
    let ol = document.createElement('ol');
    ol.className = 'play-list;'
    div.append(ol);

    let playList = [
        {
        
         author: "LED ZEPPELIN",
        
         song:"STAIRWAY TO HEAVEN"
        
        },
        {
        
         author: "QUEEN",
        
         song:"BOHEMIAN RHAPSODY"
        
        },
        {
        
         author: "LYNYRD SKYNYRD",
        
         song:"FREE BIRD"
        
        },
        {
        
         author: "DEEP PURPLE",
        
         song:"SMOKE ON THE WATER"
        
        },
        {
        
         author: "JIMI HENDRIX",
        
         song:"ALL ALONG THE WATCHTOWER"
        
        },
        {
        
         author: "AC/DC",
        
         song:"BACK IN BLACK"
        
        },
        {
        
         author: "QUEEN",
        
         song:"WE WILL ROCK YOU"
        
        },
        {
        
         author: "METALLICA",
        
         song:"ENTER SANDMAN"
        
        }
    ];

    console.log(playList);

    for(let i = 0, song = playList.length; i<song; i++){
        let li = document.createElement('li');
        li.className = 'play-item';
        li.innerHTML = playList[i];
        ol.appendChild(li);
    }

    let cont = document.getElementById('cont');
    let btn = document.querySelector('.btn');

    btn.onclick = function(){
        if(cont.classList.contains('red')){
            cont.classList.add("green");
            cont.classList.remove('red');
        }else{
            cont.classList.add("red");
            cont.classList.remove("green");
        }
    }
});


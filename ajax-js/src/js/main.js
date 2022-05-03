fetch('https://dummyjson.com/products/24').then((response)=>{
    return response.json();
}).then((tellback)=>{
    console.log(tellback);
    const cont = document.querySelector('.container');
    const cart = `
        <div class="img-holder">
            <img src="${tellback.thumbnail}" alt="image description" class="img">
        </div>
        <div class="text-holder">
            <h2 class="tell-title">${tellback.title}</h2>
            <ul class="tell-list">
                <li class="tell-item">${tellback.brand}</li>
                <li class="tell-item">${tellback.price}</li>
                <li class="tell-item">${tellback.rating}</li>
                <li class="tell-item">${tellback.category}</li>
            </ul>
            <div class="text-description">
                <p>${tellback.description}</p>
            </div>
            <div class="btn-holder"><a href="#" class="btn-link">Купить</a></div>
        </div>
            `        
    cont.insertAdjacentHTML('beforeend', cart);
    const image = document.querySelector('.image-description');
    tellback.images.map(image =>{
        const newImg = `
        <div class="col-img">
            <img src="${image}" alt="image description" class="img">
        </div>
        `   
    });
    image.insertAdjacentHTML('beforeed', newImg);
})



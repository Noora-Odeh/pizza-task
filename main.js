async function getNews() {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await res.json();
    const results = data.recipes; 

    const result = results.map(function(ele) {
        return `
        <div class='article'>
        <h2>${ele.title}</h2>
        <img src='${ele.image_url}'>
        </div>
        `;
    }).join('');

    document.querySelector(".data"). innerHTML +=result;
}

getNews();

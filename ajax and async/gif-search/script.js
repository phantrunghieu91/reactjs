const searchFormSubmitBtn = document.querySelector('button.giphy__search-form__submit-btn');

searchFormSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=aATaab87z5U9CBngQUT5zPYZ0w7oX9DV&limit=6&q=${document.querySelector('input.giphy__search-form__search-input').value}`)
        .then(response => {
            const gifs = response.data.data;
            renderGif(gifs);
        })
});

const renderGif = (gifs) => {
    const gifContainer = document.querySelector('div.giphy__gif-container');
    gifContainer.innerHTML = '';
    gifs.map(gif => {
        const gifImg = document.createElement('img');
        gifImg.src = gif.images.original.url;
        gifImg.alt = gif.title;
        gifImg.classList.add('giphy__gif-container__gif-item');
        gifContainer.append(gifImg);
    });
};

document.querySelector('button.giphy__search-form__clear-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('input.giphy__search-form__search-input').value = '';
    document.querySelector('div.giphy__gif-container').innerHTML = '';
});
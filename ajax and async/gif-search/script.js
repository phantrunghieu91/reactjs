const searchFormSubmitBtn = document.querySelector('button.giphy__search-form__submit-btn');

searchFormSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=aATaab87z5U9CBngQUT5zPYZ0w7oX9DV&limit=6&q=${document.querySelector('input.giphy__search-form__search-input').value}`)
        .then(response => {
            const gifs = response.data.data;
            console.log(gifs[0]);
            renderGif(gifs);
        })
});

const renderGif = (gifs) => {
    const gifContainer = document.querySelector('div.giphy__gif-container');
    gifs.map(gif => {
        const gifFrame = document.createElement('iframe');
        gifFrame.src = gif.embed_url;
        gifFrame.alt = gif.title;
        gifFrame.classList.add('giphy__gif-container__gif-item');
        gifContainer.append(gifFrame);
    });
};

document.querySelector('button.giphy__search-form__clear-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('input.giphy__search-form__search-input').value = '';
    document.querySelector('div.giphy__gif-container').innerHTML = '';
});
const init = () => {
  const inputArea = document.querySelector('form');
  inputArea.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.children[1].value);
    const inputForm = document.querySelector('input#searchByID');
    console.log(inputForm.value);

    fetch(`http://localhost:3000/movies/${inputForm.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const title = document.querySelector("section#movieDetails h4");
            const description = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            description.innerText = data.summary;
        })
        inputArea.reset();
  })
}

document.addEventListener('DOMContentLoaded', init);
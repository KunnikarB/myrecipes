function toggleMenu() {
  var nav = document.getElementById('myTopnav');
  if (nav.className === 'topnav') {
    nav.className += ' responsive';
  } else {
    nav.className = 'topnav';
  }
}

function generateRecipe(response) {
  new Typewriter('#recipe', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ' 🇹🇭',
  });
}

function getRecipe(event) {
  event.preventDefault();

  let apiKey = '6654fa001cd5343d304f9bt068o34b25';
  let context =
    'Generate a Thai recipe based on user input. Focus on using a clear user input form and provide concise, easy-to-follow instructions. Ingredient measurements must use deciliters (dl) instead of cups. Present the entire recipe in clean HTML format using tags like <p>, <ul>, and <li>, but do not mention the word "HTML" anywhere in the output.';
  let prompt = `Generate a Thai recipe for ${
    document.querySelector('#recipe-name').value
  }`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector('#recipe');
  recipeElement.classList.remove('hidden');
  recipeElement.innerHTML = `<div class="generating"> AI Generating a recipe for ${
    document.querySelector('#recipe-name').value
  } please wait 🍲 </div>`;

  axios.get(apiUrl).then(generateRecipe);
}

let recipeButton = document.querySelector('#recipe-form ');
recipeButton.addEventListener('submit', getRecipe);



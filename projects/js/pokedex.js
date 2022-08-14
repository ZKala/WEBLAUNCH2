const poke_container = document.getElementById('poke-container');

const pokemon_count = 500;

// pokemon types colors
const colors = {
 fire: '#B22222',
 grass: '#228B22',
 electric: '#FFD700',
 water: '#1E90FF',
 ground: '#f4e7da',
 rock: '#d5d5d4',
 fairy: '#fceaff',
 poison: '#FF00FF',
 bug: '#f8d5a3',
 dragon: '#97b3e6',
 psychic: '#eaeda1',
 flying: '#F5F5F5',
 fighting: '#E6E0D4',
 normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

// pokemon types colors

const fetchPokemons = async () => {
 for(let i = 001; i <= pokemon_count; i++) {
  await getPokemon(i)
 }
}

const getPokemon = async(id) => {
 const url = `https://pokeapi.co/api/v2/pokemon/${id}`; //this site doesnt work
 // const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}`; < no idea what code to use here
 const res = await fetch(url);
 const data = await res.json();
 createCard(data)
}

const createCard = (pokemon) => {
 const pokemonEl = document.createElement('div');
 pokemonEl.classList.add('pokemon');

// pokecounter

// var increment = ("000" + pokemon.id).slice(-3); is this to change the number
var id = pokemon.id.toString().padStart(3, '0');
console.log(id)
// pokecounter

// pokemon name
const pokename = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

// pokemon name

const poke_types = pokemon.types.map(type => type.type.name);
const type = main_types.find(type => poke_types.indexOf(type) > -1);

const color = colors[type];

console.log(type)
// console.log(color)

pokemonEl.style.backgroundColor = color;

const pokemonInnerHtml = `
 <div class="img-container">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
  </div>
  <div class="info">
     <span class="number">#${id}</span>
     <h3 class="name">${pokename}</h3>
     <small class="type">Type: <span>${poke_types}</span></small>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonEl);
  
}

fetchPokemons()
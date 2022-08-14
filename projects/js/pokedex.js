const poke_container = document.getElementById('poke-container');

const pokemon_count = 10;

const colors = {
 fire: '#FDDFDF',
 grass: '#DEFDE0',
 electric: '#FCF7DE',
 water: '#DEF3FD',
 ground: '#f4e7da',
 rock: '#d5d5d4',
 fairy: '#fceaff',
 poison: '#98d7a5',
 bug: '#f8d5a3',
 dragon: '#97b3e6',
 psychic: '#eaeda1',
 flying: '#F5F5F5',
 fighting: '#E6E0D4',
 normal: '#F5F5F5'
}

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

var increment = ("000" + pokemon.id).slice(-3);

// pokecounter

// pokemon name
const pokename = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);

// pokemon name

const poke_types = pokemon.types.map(type => type.type.name);

console.log(poke_types)

const pokemonInnerHtml = `
 <div class="img-container">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${increment}.png" alt="">
  </div>
  <div class="info">
     <span class="number">#${increment}</span>
     <h3 class="name">${pokename}</h3>
     <small class="type">Type: <span>${poke_types}</span></small>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonEl);
  
}

fetchPokemons()
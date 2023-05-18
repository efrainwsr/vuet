const pokemon = fetchPokemon()
async function fetchPokemon(){
for(let i =1; i<=10; i++){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+[i])
    let data = await res.json()
 }
 return data
 
}

fetchPokemon()
console.log(pokemon)


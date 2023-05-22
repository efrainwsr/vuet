<script setup>
// https://morioh.com/p/a0fe12e6daa0
//mport Table from './components/Table.vue'
import { ref, onMounted } from 'vue'
import Dtable from '../components/Dtable.vue'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const pok = []
var data = []


const fetchPokemon = onMounted(async () =>{
	
	for(let i = 1;  i <= 10;  i++){
		let res  = await fetch(url+i)
		let datos = await res.json()
		
		let pokemonRes = {
			nombre: datos.name, peso: datos.weight, alto: datos.height}
			
		data.push(pokemonRes)
		//data[i] = pokemonRes
	}
	console.log(data)
 })


 
 
 
 const colum = ['Nombre', 'Tamaño', 'Peso']
 
 const dat = [
       {name: "Ditto", tamano:"Computer Science", peso:"50"},
      {name: "Pikachu", tamano:"Philosophy", peso:"20"},  
     ]

console.log(dat)


</script>

<template>
    <Dtable  :cols="colum" :data="data"/>
</template>
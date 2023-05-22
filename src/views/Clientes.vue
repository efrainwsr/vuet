<script setup>
// https://morioh.com/p/a0fe12e6daa0
//mport Table from './components/Table.vue'
import { ref, onMounted } from 'vue'
import Dtable from '../components/Dtable.vue'

//const url = 'https://pokeapi.co/api/v2/pokemon/'
const url2 = 'http://127.0.0.1/api-products/'
const pok = []
var data = []
const productos = ref([])

const apiProducts = onMounted(async()=>{

	const res2 = await fetch(url2)
	const data2 = await res2.json()
	
	let productosObj = {
		id: data2.id,
		nombre: data2.name,
		desc: data2.description,
		precio: data2.price,
	}
	productos.value = productosObj
	console.log(data2)
})

console.log(productos)


/*
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
*/

 
 
 
 const colum = ['Nombre', 'Tamaño', 'Peso']
 const colum2 = ['ID', 'Nombre', 'Descripcion', 'Precio']
 
 const dat = [
       {name: "Ditto", tamano:"Computer Science", peso:"50"},
      {name: "Pikachu", tamano:"Philosophy", peso:"20"},  
     ]
</script>

<template>
    <Dtable  :cols="colum2" :data="productos"/>
</template>
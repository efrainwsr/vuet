<script setup>
// https://morioh.com/p/a0fe12e6daa0
//mport Table from './components/Table.vue'
import { ref, onMounted } from 'vue'
import Dtable from '../components/Dtable.vue'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const url2 = 'http://127.0.0.1/api-products/'
var data = ref([])

//const productos = ref([])

const apiProducts = onMounted(async()=>{
	const res2 = await fetch(url2)
	productos.value = await res2.json()
	console.log(productos.value)
})

const fetchPokemon = onMounted(async () =>{
	for(let i = 1;  i <= 10;  i++){
		let res  = await fetch(url+i)
		let datos = await res.json()
		let pokemonRes = {
			nombre: datos.name, peso: datos.weight, alto: datos.height,
		}
			
		data.value.push(pokemonRes)
	}
	console.log(data.value)
 })


 
const productos = [
	{id: 1, nombre: 'Harina pan', desc: 'Harina de maiz', precio: '1.5'},
	{id: 2, nombre: 'Salsa de tomate', desc: 'Tomate', precio: '2'},
	
] 
 
 const colum = ['Nombre', 'Peso', 'Altura']
 const colum2 = ['ID', 'Nombre', 'Descripcion', 'Precio']
 
</script>

<template>
    <Dtable  :cols="colum" :data="data.value"/>
</template>
<script setup>
// https://morioh.com/p/a0fe12e6daa0
//mport Table from './components/Table.vue'
import { ref } from 'vue'
import Dtable from './components/Dtable.vue'
import Clientes from './views/Clientes.vue'

const pok = {
	name: '',
	weight: '',
	height: ''
}


const fetchPokemon = async ()=>{  
	const res  = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
	const data = await res.json()
	
	pok.name = data.name
	pok.weight = data.weight
	pok.height = data.height
 }
 
 const colum = ['Nombre', 'Tamaño', 'Peso']
 
 const data = [
       {name: "Ditto", tamano:"Computer Science", peso:"50"},
      {name: "Pikachu", tamano:"Philosophy", peso:"20"},  
     ]

fetchPokemon()
console.log(pok)

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <Dtable  :cols="colum" :data="data"/>
      </div>
      <div class="col-2"></div>
    </div>
    
  </div>
</template>




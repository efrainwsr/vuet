<script setup>
import {ref, onMounted, watch} from 'vue'
import Dtable from '../components/Dtable.vue'

const data = ref([])


const options = {

    language:{
      "emptyTable":     "No hay datos disponibles",
      "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      "infoEmpty":      "Mostrando 0 to 0 de 0 entradas",
      "infoFiltered":   "(Filtrado de _MAX_ entradas totales)",
      "lengthMenu":     "Mostrando _MENU_ Resultados",
      "loadingRecords": "Cargando...",
      "search":         "Buscar:",
      "zeroRecords":    "No matching records found",
      "paginate": {
          "first":      "Primero",
          "last":       "Ultimo",
          "next":       "Siguiente",
          "previous":   "Anterior"
      },
    }
  }

  onMounted(async()=>{
    let res = await fetch('http://localhost/api-products/') 
    data.value = await res.json()
    console.log(data)
   })
</script>

<template>
    <Dtable :data="data" :options="options">
      <!-- enlaza la referencia de la tabla a la propiedad ref de DataTable -->
      <template #default="{ tableRef }">
        <DataTable :ref="tableRef" />
      </template>
    </Dtable>
  </template>
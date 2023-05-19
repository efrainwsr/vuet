<script setup>
import {ref, onMounted, watch} from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import Dtable from '../components/Dtable.vue'
DataTable.use(DataTablesCore);

const data = ref([])

onMounted(async()=>{
    let res2 = await fetch('http://localhost/api-products/') 
    data.value = await res2.json()
    console.log(data.value)
   })

const options = {
    responsive: true,
    ordering: true,
    select: true,
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
</script>

<template>
    <DataTable :data="data" :options="options" :columns="col" />
  </template>
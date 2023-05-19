<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesBs5 from 'datatables.net-bs5';

// vincular DataTablesBs5 a DataTable
DataTable.use(DataTablesBs5);


const props = defineProps({
	cols:{ type: Array, required: true},
	data:{type: Array, required: true}
	

  /*data: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: () => {},
  },
  cols: {
	  type: Array,
	  required: true,
  }
  */

  
});

 
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

</script>

<template>
  <DataTable id="myTable" :options="options" class="display table table-hover">
      <thead>
          <tr v-for="column in cols">
              <th>{{ column }}</th>
          </tr>
      </thead>
      <tbody>
            <tr v-for="item in data" :key='item'>
            <td v-for="column in cols" :key='column'>{{item[column]}}</td>
          </tr>
      </tbody>
  </DataTable>
</template>
  
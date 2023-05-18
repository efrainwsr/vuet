<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
 
DataTable.use(DataTablesCore);
 
const options = {
  responsive: true,
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

const data = [
  [1, 2],
  [3, 4],
];
</script>
 
<template>
    <DataTable class="display table table-hover table-dark"
    :data="data" 
    :options="options">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
            </tr>
        </thead>
    </DataTable>
</template>
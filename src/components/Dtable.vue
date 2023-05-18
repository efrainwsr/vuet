<script setup>
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net-bs5';
  import {ref, onMounted} from 'vue'
   
  DataTable.use(DataTablesCore);
  
  const pokemon = ref([])
   
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

  
  
  
   onMounted(async()=>{
      for(let i =1; i<=10; i++){
          let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+[i])
          let data = await res.json()
          pokemon.value.push(data)
      }
  })
  
  const col = [
      {data: 'name', title:'Nombre'},
      {data: 'weight', title:'Peso'},
      {data: 'height', title:'Altura'},
      { data: 'abilities',
        title: 'Habilidades',
        render: function(data) {
        return data.map(ability => ability.ability.name).join(', ');}
    }
  ]
  
  </script>
   
  <template>
      <div class="table-responsive">
      <DataTable class="display table table-hover"
      :columns="col"
      :data="pokemon"
      :options="options">
      <thead></thead>
      </DataTable>
  </div>
  </template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesBs5 from 'datatables.net-bs5';

// vincular DataTablesBs5 a DataTable
DataTable.use(DataTablesBs5);


const tableRef = ref(null);

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: () => {},
  },

  
});

onMounted(() => {
  const table = DataTable(tableRef.value, {
    data: props.data,
  });

  // manejar cambios en los datos
  watch(() => props.data, () => {
    table.clear().rows.add(props.data).draw();
  });
});

</script>

<template>
  <DataTable :ref="tableRef" />
</template>
  
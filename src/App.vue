<template>
  <div id="app">
     <img src="./assets/logo.png">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in rows" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">{{ col }}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <div>
      <button @click='move(15)'>Move</button>
      <button @click='inctable'>Inc table</button>
      <button @click='increment'>Increment +1</button>
      <button @click='decrement'>Decrement -1</button>
      <h3>Count is {{ count }}</h3>
    </div>
     Hello there
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'move',
      'inctable'
    ])
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
      rows: 'getRows'
    })
  }
}
</script>

<style scoped>
  body {
    font-family: Helvetica, sans-serif;
  }
  table {
    border-collapse: collapse;
  }
  td {
    width: 20px;
    height: 20px;
    border: solid 1px black;
    text-align: center;
  }
</style>

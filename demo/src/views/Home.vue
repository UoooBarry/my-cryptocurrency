<template>
  <div class="container">
    <h1>Block chain</h1>
    <p>Each block contains mutiple transacations</p>
    <Blocks @onBlockSeleted='onBlockSeleted'/>
    <hr>
    <h1>Transactions in this block</h1>
    <Transacations :index='selectedIndex' :key='selectedIndex'/>
  </div>
</template>

<script>
import Blocks from '@/components/blocks';
import Transacations from '@/components/transactions';
export default {
  name: 'Home',
  components: {
    Blocks,
    Transacations
  },
  methods:{
    onBlockSeleted(index){
      this.selectedIndex = index;
    }
  },
  data(){
    return{
      selectedIndex: 0
    }
  }
}
</script>

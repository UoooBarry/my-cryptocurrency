<template>
  <div class="container">
    <div class='content'>
      <h1>Block chain</h1>
      <p>Each block contains mutiple transacations</p>
      <Blocks @onBlockSeleted='onBlockSeleted'/>
    </div>
    <hr>
    <div class='content'>
      <h1>Transactions in this block</h1>
      <Transacations :index='selectedIndex' :key='selectedIndex'/>
    </div>
    <hr>
    <h1>Balance check</h1>
    <BalanceCheck />
  </div>
</template>

<script>
import Blocks from '@/components/blocks';
import Transacations from '@/components/transactions';
import BalanceCheck from '@/components/BalanceCheck';
export default {
  name: 'Home',
  components: {
    Blocks,
    Transacations,
    BalanceCheck
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

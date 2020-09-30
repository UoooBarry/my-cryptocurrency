<template>
  <div class="container">
    <h1>Block chain</h1>
    <p>Each block contains mutiple transacations</p>
    <Blocks />

  </div>
</template>

<script>
import Blocks from '@/components/blocks';

export default {
  name: 'Home',
  components: {
    Blocks
  }
}
</script>

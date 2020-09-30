<template>
    <div class='row'>
        <div class='col' v-for="(block,index) in chain" v-bind:key="index">
            <Block :block="block" :index="index" />
        </div>
    </div>
</template>

<script>
import Block from './block';
export default {
    name: 'Blocks',
    components:{
        Block
    },
    data(){
        return{
            chain: []
        }
    },
    async created(){
        const res = await this.axios.get('http://localhost:5000/api/v1/chain/');
        this.chain = res.data.chain;
    }
}
</script>
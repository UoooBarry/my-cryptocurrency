<template>
    <table class='table'>
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Sender</th>
                <th scope="col">Reciver</th>
                <th scope="col">Amount</th>
                <th scope="col">Timestamp</th>
                <th scope="col">isValidate?</th>
            </tr>
        </thead>
        <tbody v-for="(transaction,index) in transactions" v-bind:key="index">
            <Transaction :index='index' :transaction='transaction'/>
        </tbody>
    </table>
</template>

<script>
import Transaction from './Transaction';
export default {
    name: 'Transacations',
    props: ['index'],
    components:{
        Transaction
    },
    data(){
        return{
            transactions:[]
        }
    },
    async created(){
        const res = await this.axios.get(`http://localhost:5000/api/v1/blocks/${this.index}/transactions`);
        this.transactions = res.data.transactions;
    }
}
</script>
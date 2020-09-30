<template>
    <div style="text-align: left">
        <ul class="list-group">
            <li class="list-group-item">
                <h2>Pulic address </h2>
                {{$route.params.id}}
            </li>
            <li class="list-group-item">
                <h2>Balance </h2>
            {{balance}}
            </li>
        </ul>
        
        
    </div>
</template>

<script>
export default {
    name: 'Wallet',
    data(){
        return{
            balance: 0
        }
    },
    async created(){
        const res = await this.axios.get(`http://localhost:5000/api/v1/balance/${this.$route.params.id}`);
        this.balance = res.data.balance;
    }
}
</script>
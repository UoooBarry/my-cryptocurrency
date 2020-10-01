<template>
    <div class='content'>
        <form @submit.prevent="checkBalance">
            <div class="form-group">
                <label for="from">Your public key</label>
                <input type="text" class="form-control" id="from" v-model="sender_public" placeholder="Enter public key" required>
            </div>
            <div v-if="balance" style="text-align: left"><h2>Balance: </h2> {{balance}}</div>
            <button type="submit" class="btn btn-secondary btn-lg btn-block" @click="checkBalance()">Check balance</button>
        </form>
    </div>
    
</template>

<script>
export default {
    name: 'BalanceChecker',
    data(){
        return{
            sender_public: '',
            balance: null
        }
    },
    methods:{
        async checkBalance(){
            const res = await this.axios.get(`http://localhost:5000/api/v1/balance/${this.sender_public}`);
            this.balance = res.data.balance;
        }
    }
}
</script>
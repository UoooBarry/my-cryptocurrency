<template>
    <div class='container'>
        <button class="btn btn-lg btn-primary" @click='createWallet()'>Get a wallet</button>
        <hr>
        <div class='row' v-if="wallet">
            <WalletInfo :wallet='wallet'/>
            <h1>Please save your details, and do not tell your secret key to anybody!</h1>
        </div>
    </div>
</template>

<script>
import WalletInfo from '@/components/WalletInfo';
export default {
    name: 'Register',
    components:{
        WalletInfo
    },
    data(){
        return{
            wallet: ''
        }
    },
    methods: {
        async createWallet(){
            const res = await this.axios.post(`http://localhost:5000/api/v1/wallet/create`);
            this.wallet = res.data;
            console.log(this.wallet);
        }
    },
}
</script>
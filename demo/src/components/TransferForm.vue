<template>
    <form  @submit.prevent="transfer">
         <div class="form-group">
            <label for="from">Your public key</label>
            <input type="text" class="form-control" id="from" v-model="sender_public" placeholder="Enter public key" required>
        </div>
        <div class="form-group">
            <label for="secret">Your secret key</label>
            <input type="password" class="form-control" id="secret" v-model="secret" placeholder="Enter private key" required>
        </div>
        <div class="form-group">
            <label for="to">Pay to address</label>
            <input type="text" class="form-control" id="to" v-model="receiver" placeholder="Receiver" required>
        </div>
        <div class="form-group">
            <label for="amount" >Amount</label>
            <input type="number" class="form-control" id="amount" v-model="amount" required>
        </div>
        <button type="submit" class="btn btn-secondary btn-lg btn-block">Transfer</button>
    </form>
</template>

<script>
export default {
    name: 'TransferForm',
    data(){
        return{
            secret: '',
            receiver: '',
            amount: 0,
            sender_public: ''
        }
    },
    methods:{
        async transfer(){
            const res = await this.axios.post('http://localhost:5000/api/v1/transactions/create', {
                sender_public: this.sender_public,
                secret: this.secret,
                receiver: this.receiver,
                amount: this.amount
            });
            if(res.data.message === 'success'){
                alert('success!');
            }else{
                alert(res.data.reason);
            }
        }
    }
}
</script>
<template>
    <div class='container'>
    <form @submit.prevent="mine">
         <div class="form-group">
            <label for="from">Your public key</label>
            <input type="text" class="form-control" id="from" v-model="sender_public" placeholder="Enter public key" required>
        </div>
        <h3>This is not a real mine case, just for demo</h3>
        <button type="submit" class="btn btn-secondary btn-lg btn-block">Mine</button>
    </form>
    </div>
</template>

<script>
export default {
    name: 'TransferForm',
    data(){
        return{
            sender_public: ''
        }
    },
    methods:{
        async mine(){
            const res = await this.axios.get(`http://localhost:5000/api/v1/mine/${this.sender_public}`);
            alert(`Successfully get ${res.data.reward} coins!`);
        }
    }
}
</script>
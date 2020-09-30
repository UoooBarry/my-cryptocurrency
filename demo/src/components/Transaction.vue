<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td class="hash"><p v-if="isSystemSent()">System</p> <router-link :to="senderWalletHref">{{transaction.sender}}</router-link></td>
        <td class='hash'><router-link :to="receiverWalletHref">{{transaction.receiver}}</router-link></td>
        <td>
            {{transaction.amount}}
            <b v-if="isSystemSent()">
                <br>
                (Reward)
            </b>
        </td>
        <td>{{transaction.timestamp}}</td>
        <td>{{transaction.validate}}</td>
    </tr>
</template>


<script>
export default ({
    name: 'Transaction',
    props: ['transaction', 'index'],
    data(){
        return{
            senderWalletHref: `/wallet/${this.transaction.sender}`,
            receiverWalletHref: `/wallet/${this.transaction.receiver}`
        }        
    },
    methods:{
        isSystemSent(){
            return this.transaction.sender === null;
        }
    }
})
</script>


<style scoped>
.hash{
    overflow-y: scroll;
    white-space: nowrap;
    max-width: 20px;
}
</style>
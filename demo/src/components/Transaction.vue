<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td class="hash"><p v-if="isSystemSent()">System</p>{{transaction.sender}}</td>
        <td class='hash'>{{transaction.receiver}}</td>
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
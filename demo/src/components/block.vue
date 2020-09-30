<template>
    <div>
        <input type="radio" name='block-check' :id="index" @click="selectBlock"/> 
            <label :for="index" class='block-select radio'>
            <div class='card block-card'>
                <div class="card-body">
                    <h5 class="card-title"> Block {{index}} </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item block-hash">
                            <b>Hash</b>
                            <a v-bind:class="{ 'odd-hash' : index % 2 !== 0 }" style="color: rgb(231, 71, 183)">{{block.hash}}</a>
                        </li>
                        <li class="list-group-item block-hash">
                            <b>Pervious hash</b>
                            <a v-bind:class="{ 'odd-prehash' : index % 2 !== 0 }" style="color:  rgb(6, 177, 71)">{{block.precedingHash}}</a>
                        </li>
                        <li class="list-group-item block-hash">
                            <b> Nonce </b>
                            <a>{{block.nonce}}</a>
                        </li>
                        <li class="list-group-item block-hash">
                            <b> TimeStamp </b>
                            <a>{{block.timestamp}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['block', 'index'],
    methods:{
        selectBlock(){
            this.$emit('onBlockSeleted', this.index);
        }
    }
}
</script>

<style scoped>
.block-select{
    cursor: pointer;
}
input[type=radio] {
   display:none;
}

input[type=radio]:checked + .radio {
    border: 1px solid peachpuff;
}
.block-card{
    max-width: 280px;
}
.block-hash{
    overflow-y: scroll;
    white-space: nowrap;
}

.block-hash b{
    text-align: left;
    display: block;
}

.block-hash a{
    text-align: left;
    display: block;
}

.odd-hash{
    color: rgb(6, 177, 71) !important;
}

.odd-prehash{
    color: rgb(231, 71, 183) !important;
}

</style>
<template>
    <ul class="list-group">
        <li class="list-group-item">
            <h3>Public key</h3>
            {{wallet.address}}
        </li>
        <li class="list-group-item">
            <h3>Secert key</h3>
            {{wallet.secret}}
        </li>
    </ul>
</template>


<script>
export default {
    name: 'WalletInfo',
    props: ['wallet']
}
</script>
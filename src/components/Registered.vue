<template>
    <p>{{ registeredMessage }}</p>
</template>
<script>
export default {
    props:{
        registeredMessage:String
    }
}
</script>

<style scoped>
p{
    font-size:10px;
    font-style: italic;
}
</style>
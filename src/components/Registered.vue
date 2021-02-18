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
    font-style: italic;
}
</style>
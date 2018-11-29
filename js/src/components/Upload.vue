<template>

    <div id="app">
        <h2>↓画像↓</h2>
        <img v-show="uploadedImage" :src="uploadedImage" />
        <input type="file" accept="image/*" v-on:change="onFileChange">
    </div>
</template>

<script>
    export default {
        name: "upload",
        data () {
            return {
                uploadedImage: '',
            }
        },
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                this.createImage(files[0]);
            },
            // アップロードした画像を表示
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadedImage = e.target.result;
                };
                reader.readAsDataURL(file);
            },
        },
    }
</script>

<style scoped>

</style>
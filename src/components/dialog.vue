<template>
    <div class="dialog-wrapper" :class="{'open':is_open}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                is_open: false
            }
        },
        methods: {
            open() {
                this.is_open = true;
                //this.$emit('dialogopen');  //??????
            },
            close() {
                this.is_open = false
                //this.$emit('dialogclose'); //???????
            }
        }
    }
</script>

<style>
  .dialog-wrapper {
    height: 100%;
    display: none;
  }
  .dialog-wrapper.open {
    display: block;
  }
  .dialog-wrapper > .overlay {
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: fixed;
    left: 0px;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .dialog-wrapper > .dialog {
    z-index: 10;
    background: #fff;
    position: fixed;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    padding: 24px 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .8);   
  }
  .dialog heading {
      padding: 12px;
   }
</style>
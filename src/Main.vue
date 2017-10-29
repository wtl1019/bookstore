<template>
  <div>
    <tabs></tabs>
    <div class="contet">
    	 <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
    import Tabs from './components/tabs.vue'
export default {
    components: {
        Tabs
    }
}
</script>

<style>
</style>

<template>
  <MHeader/>
  <Tab />
  <router-view></router-view>
</template>
<script>
import { defineComponent } from 'vue'
import MHeader from './components/header/header'
import Tab from './components/tab/tab'

export default defineComponent({
  name: 'App',
  components: { MHeader, Tab }
})
</script>

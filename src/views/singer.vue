<template>
<div>歌手页面</div>
</template>

<script>
import { getSingerList } from '@/service/singer'

export default {
  name: 'singer',
  async created() {
    const result = await getSingerList()
    console.log(result)
  }
}
</script>

<style scoped>

</style>

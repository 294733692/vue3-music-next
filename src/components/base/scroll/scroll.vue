<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useScroll from './userScroll'

export default defineComponent({
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props)
    return {
      rootRef,
      scroll
    }
  }
})
</script>

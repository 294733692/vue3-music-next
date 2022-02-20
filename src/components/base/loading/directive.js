import { createApp } from 'vue'
import Loading from './loading'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

const loadingDirective = {
  mounted (el, binding) {
    const app = createApp(Loading) // 创建新的 vue 实例
    const instance = app.mount(document.createElement('div')) // 动态创建 div 挂载到 app 上
    el.instance = instance // 将 loading 组件的实例挂在到 el 对象上
    const title = binding.arg // 获取动态参数
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated (el, binding) {
    const title = binding.arg // 获取动态参数
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

/**
 *  将当前 dom 挂在到 loading 组件作用的 dom 上
 * @param {Object} el
 */
function append (el) {
  const style = getComputedStyle(el)
  if (['absolute', 'relative', 'fixed'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

/**
 * 将当前 dom 挂在到 loading 组件作用的 dom 上, 进行移除操作
 * @param {Object} el
 */
function remove (el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective

/**
 * 动态添加 class
 * @param el
 * @param className
 */
export function addClass(el, className) {
  // 如果 dom 节点上不包含当前 class，就添加 className
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

/**
 * 移除 dom 上的 class样式
 * @param el
 * @param className
 */
export function removeClass(el, className) {
  el.classList.remove(className)
}

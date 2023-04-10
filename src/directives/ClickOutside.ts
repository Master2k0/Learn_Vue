import type { DirectiveBinding } from 'vue'

const clickOutside = {
  mounted(el: any, binding: DirectiveBinding) {
    el.__ClickOutsideHandler__ = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted: (el: any) => {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__)
  }
}
export default clickOutside

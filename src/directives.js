import getSvg from './services/svg.service'
import { getTrans } from './services/i18.service'
import { userService } from './services/user.service'

const edit = {
  mounted: (el, binding) => {
    el.setAttribute('contenteditable', binding.value)
  },
  updated: (el, binding) => {
    el.setAttribute('contenteditable', binding.value)
  },
}

const icon = {
  mounted: (el, binding) => {
    const icon = getSvg(binding.value)
    el.innerHTML = icon
  },
  updated: (el, binding) => {
    const icon = getSvg(binding.value)
    el.innerHTML = icon
  }
}
const trans = {
  mounted: (el, binding) => {
    const userLang = userService.getByKey('lang')
    const txt = getTrans(binding.value, userLang)
    el.innerHTML = txt
  },

}

export { edit, icon, trans }

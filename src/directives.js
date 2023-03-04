import getSvg from './services/svg.service'
import { getTrans } from './services/i18.service'
import { userService } from './services/user.service'
import { itemService } from './services/item.service'

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
  updated: (el, binding) => {
    const userLang = userService.getByKey('lang')
    const txt = getTrans(binding.value, userLang)
    el.innerHTML = txt
  }

}

const clickOutside = {
  mounted(el) {
    el.clickOutside = (ev) => {
      if (!el.contains(ev.target)) {
        itemService.setModalType(null)
        console.log('closing')
      }
    }
    setTimeout(() => {
      document.addEventListener('click', el.clickOutside)
    }, 0)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutside)
  },
}



// ((el, binding) => {
//   const handler = (event) => {
//     if (!el.contains(event.target)) {
//       binding.value(event);
//     }
//   };

//   onMounted(() => {
//     document.addEventListener('click', handler);
//   });
// });




export { edit, icon, trans, clickOutside }

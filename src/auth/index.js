import { ref } from 'vue'
const lsKey = ref('__user-app-auth__')
// export function useAppAuth() {
//   //const lsKey = ref('__user-app-auth__')
//   const isLoggedIn = ref(false)

//   // const authentication = () => {
//   //   if (!localStorage.getItem(lsKey.value)) return
//   //   isLoggedIn.value = localStorage.getItem(lsKey.value)
//   // }

//   const login = () => {
//     isLoggedIn.value = true
//     //localStorage.setItem(lsKey.value, isLoggedIn.value)
//   }

//   const logout = () => {
//     isLoggedIn.value = false
//     alert(isLoggedIn.value)
//     //localStorage.setItem(lsKey.value, isLoggedIn.value)
//   }

//   return { isLoggedIn, login, logout }
// }

export const isLoggedIn = ref(false)

export const login = () => {
  isLoggedIn.value = true
  localStorage.setItem(lsKey.value, isLoggedIn.value)
}

export const logout = () => {
  isLoggedIn.value = false
  //alert(isLoggedIn.value)
  localStorage.setItem(lsKey.value, isLoggedIn.value)
}

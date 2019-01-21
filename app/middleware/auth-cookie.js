import Cookies from 'universal-cookie'

export default ({ route }) => {
  // if (route.name !== "users-id") {
  //   return
  // }

  // if (route.params.id === null) {
  //   return
  // }

  console.log(route)
  const cookies = new Cookies()
  cookies.set('pub_key',JSON.stringify(route.params.id))
  console.log(cookies)
}

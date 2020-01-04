export default class NavigationUtil {
  /**
    @param params
    @param page page name
  */
  static goPage (params, page) {
    const navigation = NavigationUtil.navigation
    if (!navigation) {
      console.log('Navigation can not be bull')
      return
    }
    navigation.navigate(page, { ...params })
  }
  static goBack (navigation) {
    navigation.goBack()
  }
  static resetToHomePage (params) {
    const { navigation } = params
    navigation.navigate("Main")
  }
}
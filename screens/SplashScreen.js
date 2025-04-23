import { View, Image } from "react-native"
import styles from "../styles/SplashScreenStyle"

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
    </View>
  )
}

export default SplashScreen

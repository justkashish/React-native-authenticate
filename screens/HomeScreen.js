import { useWindowDimensions } from "react-native"
import { View, Text, TouchableOpacity } from "react-native"
import { supabase } from "../lib/supabase"
import styles from "../styles/HomeScreenStyle"

const HomeScreen = () => {
  const { width } = useWindowDimensions()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Error signing out:", error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.content, width >= 768 && { width: "30%" }]}>
        <Text style={styles.greeting}>Hi!</Text>
        <Text style={styles.welcomeText}>Welcome to your account</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

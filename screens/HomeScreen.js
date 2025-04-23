"use client"

import { useState, useEffect } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Alert,
  useWindowDimensions
} from "react-native"
import { supabase } from "../lib/supabase"
import styles from "../styles/HomeScreenStyle"

const HomeScreen = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const { width } = useWindowDimensions();
  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData()
  }, [])

  // Fetch user profile data from Supabase
  const fetchUserData = async () => {
    try {
      setLoading(true)

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setUser(user)
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  // Handle pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true)
    fetchUserData()
  }

  // Handle logout
  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          try {
            setLoggingOut(true)
            const { error } = await supabase.auth.signOut()
            if (error) {
              console.error("Error signing out:", error.message)
              Alert.alert("Error", "Failed to logout. Please try again.")
            }
          } catch (err) {
            console.error("Exception during logout:", err)
            Alert.alert("Error", "An unexpected error occurred.")
          } finally {
            setLoggingOut(false)
          }
        },
        style: "destructive",
      },
    ])
  }

  // Show loading indicator while fetching data
  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4285F4" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/logo.png")} style={styles.headerLogo} resizeMode="contain" />
        </View>
    
        <View style={styles.card}>
          <Text style={styles.greeting}>Hi{user?.email ? `, ${user.email.split("@")[0]}` : ""}!</Text>
          <Text style={styles.welcomeText}>Welcome to your account</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{user?.email || "Not available"}</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>User ID</Text>
              <Text style={styles.infoValue}>{user?.id ? `${user.id.substring(0, 8)}...` : "Not available"}</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Last Sign In</Text>
              <Text style={styles.infoValue}>
                {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "Not available"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => Alert.alert("Coming Soon", "This feature will be available in the next update!")}
          >
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => Alert.alert("Coming Soon", "This feature will be available in the next update!")}
          >
            <Text style={styles.actionButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.logoutButton, loggingOut && styles.buttonDisabled]}
          onPress={handleLogout}
          disabled={loggingOut}
        >
          {loggingOut ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={styles.logoutButtonText}>Logout</Text>
          )}
        </TouchableOpacity>
      </View>
     
    </ScrollView>
  )
}



export default HomeScreen




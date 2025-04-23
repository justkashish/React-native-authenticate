"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image , useWindowDimensions } from "react-native"
import { supabase } from "../lib/supabase"
import styles from "../styles/AuthScreenStyle"

const AuthScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const { width } = useWindowDimensions();

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert("Error", error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      Alert.alert("Error", error.message)
    } else {
      Alert.alert("Success", "Registration successful! Please check your email for verification.")
    }
    setLoading(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</Text>
        <Text style={styles.subtitle}>{isLogin ? "Sign in to continue" : "Sign up to get started"}</Text>

        <View style={[styles.form, width >= 768 && { width: "30%" }]}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="email@address.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={isLogin ? signInWithEmail : signUpWithEmail}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.switchButton} onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AuthScreen

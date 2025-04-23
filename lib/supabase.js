import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState, Platform } from "react-native";
import "react-native-url-polyfill/auto";

// Replace with your Supabase URL and anon key
const supabaseUrl = "https://wwdpzrafnsehzhoqdwgq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZHB6cmFmbnNlaHpob3Fkd2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjk0NTQsImV4cCI6MjA2MDc0NTQ1NH0._g1m7Oe8z0szx13hSW3JbS2ll8zswztByoCWICa2iVA";

// Set storage only for non-web
const options = {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        ...(Platform.OS !== "web" && { storage: AsyncStorage }),
    },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);

// Handle app state changes only on mobile
if (Platform.OS !== "web") {
    AppState.addEventListener("change", (state) => {
        if (state === "active") {
            supabase.auth.startAutoRefresh();
        } else {
            supabase.auth.stopAutoRefresh();
        }
    });
}
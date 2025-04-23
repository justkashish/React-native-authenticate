// HomeScreenStyles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    greeting: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 18,
        color: "#666",
        marginBottom: 40,
    },
    logoutButton: {
        backgroundColor: "#f44336",
        borderRadius: 8,
        padding: 15,
        width: "80%",
        alignItems: "center",
    },
    content: {
        width: "100%", // Mobile view
        alignItems: "center",
    },
    logoutButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
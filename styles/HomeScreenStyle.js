// HomeScreenStyles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
        paddingVertical: 20,
    },
    headerLogo: {
        width: 60,
        height: 60,
    },
    main: {
        justifyContent: "center"
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    greeting: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    welcomeText: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    infoContainer: {
        marginTop: 10,
    },
    infoItem: {
        marginBottom: 15,
    },
    infoLabel: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 16,
        color: "#333",
        fontWeight: "500",
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    actionButton: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 15,
        flex: 0.48,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    actionButtonText: {
        color: "#4285F4",
        fontSize: 16,
        fontWeight: "500",
    },
    logoutButton: {
        backgroundColor: "#f44336",
        borderRadius: 8,
        padding: 15,
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    buttonDisabled: {
        backgroundColor: "#f8a8a3",
    },
    logoutButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
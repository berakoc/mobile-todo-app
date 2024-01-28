import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Color} from "../../common";

export default function Layout({ children }) {
    return <SafeAreaView style={styles.layout}>
        {children}
        <StatusBar style="light" />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    layout: {
        padding: 24,
        flex: 1,
        backgroundColor: Color.SECONDARY,
    }
})
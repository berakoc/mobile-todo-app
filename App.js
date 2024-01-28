import Layout from "./pages/Layout";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Home from "./pages/Home";

export default function App() {
  return (
      <SafeAreaProvider>
          <Layout>
              <Home />
          </Layout>
      </SafeAreaProvider>
  );
}

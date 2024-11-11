import { Stack } from "expo-router";
import "../global.css";


export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{title: "Home"}} />
      <Stack.Screen name="about" options={{title: "About"}} /> */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="+not-found" options={{title: "Not Found"}} />
    </Stack>
  );
}

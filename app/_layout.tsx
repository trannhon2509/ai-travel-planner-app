import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function RootLayout() {
  // Tải font
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  // Chỉ khi fontsLoaded là true, đặt isReady thành true để tránh render liên tục
  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  // Nếu font chưa được tải, hiển thị màn hình chờ hoặc component thay thế
  if (!isReady) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  // Nếu font đã được tải, hiển thị layout chính
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

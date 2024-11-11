import { View, Text, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CircleButton({ onPress }: { onPress: () => void }) {
  return (
    <View>
      <Pressable
        className="bg-white h-[84] w-[84] items-center justify-center rounded-full border-4 p-1 border-amber-500 "
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

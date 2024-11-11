import { View, Text, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type IconButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
  return (
    <Pressable onPress={onPress} className="items-center justify-center gap-2">
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="text-white">{label}</Text>
    </Pressable>
  );
}

import { View, Text, Modal, Pressable } from "react-native";
import React, { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type EmojiPickerProps = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({
  isVisible,
  onClose,
  children,
}: EmojiPickerProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="h-[25%] w-full bg-[#111e2d] rounded-e-2xl absolute bottom-0">
        <View className="h-[16%] bg-[#464C55] px-10 flex-row justify-between items-center">
          <Text className="text-lg text-white">Choose a sticker.</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#fff" />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

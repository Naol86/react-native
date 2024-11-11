import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { type ImageSource } from "expo-image";
import { useState } from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const placeholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>();

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(undefined);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={placeholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={100} stickerSource={pickedEmoji} />
        )}
      </View>

      {showAppOptions ? (
        <View className="flex flex-row items-center justify-between w-full px-10 pb-10 m-3">
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a Photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this Photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#61dafb",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

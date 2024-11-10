import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const placeholderImage = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string>();


  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('you did not select any image.')
    }
    }
  return (
    <View
      style={styles.container}
    >

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>

        <Button label="Choose a Photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this Photo" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  }
})

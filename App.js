import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const startModal = () => {
    setmodalIsVisible(true);
  };

  return (

    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title = 'Kurs Ekle' color = {'red'} onPress={startModal}/>
        <CourseInput 
        visible = {modalIsVisible}
        />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal:20,
  
  },
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const startModal = () => {
    setmodalIsVisible(true);
  };

  const endModal = () => {
    setmodalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    console.log(courseTitle);
    endModal();
  };

  return (

    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title = 'Kurs Ekle' color = {'slateblue'} onPress={startModal}/>
        <CourseInput 
        visible = {modalIsVisible} onAddCourse = {addCourse} onCancel={endModal}
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

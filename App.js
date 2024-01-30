import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button, FlatList} from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setmodalIsVisible(true);
  };

  const endModal = () => {
    setmodalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
   // console.log(courseTitle);
    setCourses((currentCourses) => [
      ...currentCourses, 
      {text: courseTitle, id: Math.random().toString()},
    ])
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
        <View>
          <FlatList 
          data = {courses}
          renderItem={({item}) => (
            <View style = {styles.courseItem} >
                <Text style = {styles.courseText}>
                {item.text}
                </Text>

               </View>
          )} 
          
          />
        </View>
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
  courseItem:{
    backgroundColor: 'lightslategrey',
    margin:8,
    borderRadius:5,

  },
  courseText:{ 
    padding:8,
    color:'white',

  },
});

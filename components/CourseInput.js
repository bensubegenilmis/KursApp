import { StyleSheet, Text, View ,Modal, Image, TextInput, Button} from 'react-native';
import React , {useState} from 'react';

export default function CourseInput({visible, onAddCourse, onCancel}) {

    const [enteredCourseText, setEnteredCourseText] = useState('')

    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText(''); //textinputun içini boşaltır
    };
    // const courseInputHandler = (enteredText) => {
    //     setEnteredCourseText(enteredCourseText);
    // }

  return (
    <Modal
    animationType="slide"
    visible={visible}
  >
    <View style={styles.inputContainer}>
        <Image style={styles.image} source ={require('../assets/images/bb.jpg')}/>
        <TextInput  style={styles.textInput}
        placeholder='Yeni Kurs Ekle !'
        value={enteredCourseText}
        onChangeText={(text) => setEnteredCourseText(text)}
        />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title='İptal Et' color='mediumvioletred' onPress={onCancel}/>
        </View>

        <View style={styles.button}>
            <Button title='Ekle' color='midnightblue' onPress={addCourseHandler}/>
        </View>
       
      </View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'mistyrose',
        padding:15,
    },
    image:{
        width:150,
        height:150,
        borderRadius:30,
        margin:20, 
       
    },
    textInput:{
        borderWidth:1,
        width: '100%',
        padding:10,
        borderRadius:10,
        backgroundColor:'ghostwhite',
        borderColor:'ghostwhite',
       
    },
    buttonContainer:{
        flexDirection:'row',

    },
    button:{
        width:100,
        marginHorizontal: 8,
        marginTop:15,

    },

});
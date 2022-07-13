import React , {useState} from 'react';
import {View , Text , StyleSheet} from 'react-native'
import {colors} from '../utiles/colors'
import { TextInput } from 'react-native-paper'
import {RoundedButton} from '../component/RoundedButton'
import {spacing} from '../utiles/sizes'

export const Focus = ({addSubject}) => {
  const [text , setText] = useState("")
   console.log(text)
  return(
    
  <View style={styles.container}>
     <View style={styles.inputContainer}>
    <TextInput  
     style={styles.textInput}
     label="What would you like to focus on ?"
     onChangeText={setText}
    />
      <View style={styles.center}>
      <RoundedButton title="+"  size={50} style={styles.button} onPress={() => addSubject(text)}/>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
   container:{
   
   },
   center:{
     justifyContent:'center'

   },
   textInput:{
    flex:1,
    marginRight:spacing.sm,
   },
   button:{
    justifyContent:"center",
    
   },
    inputContainer:{
      padding:spacing.lg,
      justifyContent:"top",
      flexDirection:"row"

    }
})
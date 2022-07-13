import React from 'react'
import {View , StyleSheet} from 'react-native'
import {RoundedButton} from '../component/RoundedButton'



export const Timing = ({onChangeTime}) => {
  return (
    <>
     <View style={styles.timingButton}> 
       <RoundedButton  size={75} title={30} onPress={()=> onChangeTime(30) }/>
     </View>
      <View style={styles.timingButton}> 
       <RoundedButton  size={75} title={15} onPress={()=> onChangeTime(15) }/>
     </View>
      <View style={styles.timingButton}> 
       <RoundedButton  size={75} title={10} onPress={()=> onChangeTime(10) }/>
     </View>
     </>
  )
}

const styles =  StyleSheet.create({
  timingButton : {
    flex: 1,
    alignItems:'center'
  }
})
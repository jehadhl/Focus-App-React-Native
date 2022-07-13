import React from 'react'
import {View ,Text , StyleSheet , FlatList} from 'react-native'
import {colors} from '../utiles/colors'
import {spacing , fontSizes} from '../utiles/sizes'


export const FocusHistory = ({history}) => {
    if(!history || !history.length) return <Text style={styles.textt}>We haven't focused on anything yet</Text> ;

    const renderItem = ({item}) => {
      return(
        <Text style={styles.item}>- {item}</Text>
      )
    } 


  return(
    <View style={styles.container}>
      <Text style={styles.text}>Things we've foucsed on : </Text>
        <FlatList
          data= {history}
          renderItem={renderItem}
        />
    </View>
      )
}

const styles = StyleSheet.create({

  textt: {
     color:colors.white,
     paddingLeft:30,
     fontSize:fontSizes.md,
     fontWeight:"bold"
  },
  container: {
     paddingLeft:30,
     flex:1,
  },

   item: {
     color:colors.white,
     paddingTop:spacing.sm,
     fontSize:fontSizes.md
   },
  text: {
     fontWeight:"bold",
    color:colors.white,
    fontSize:fontSizes.lg
  }
})
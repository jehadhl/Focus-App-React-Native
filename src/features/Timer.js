import React , {useState} from "react"
import {Text , View , StyleSheet , Button , Platform ,Vibration} from "react-native"
import {Countdown} from "../component/Countdown"
import {RoundedButton} from "../component/RoundedButton"
import {spacing} from "../utiles/sizes"
import {colors} from "../utiles/colors"
import { ProgressBar, MD3Colors } from 'react-native-paper';
import {Timing} from './Timing'
import { useKeepAwake } from 'expo-keep-awake';

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS
  ];

export const Timer = ({focusSubject , clearSubject , onTimerEnd}) => {
  const [isStarted , setIsStarted] = useState(false)
  const [progress , setProgress] = useState(1)
  const [minutes , setMinutes] = useState(0.1)

    const onEnd = (reset) => {
     Vibration.vibrate(PATTERN);
     setProgress(1) ;
     setIsStarted(false) ;
     reset();
     onTimerEnd(focusSubject)
  }
     useKeepAwake();
  return (
  <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
         minutes={minutes}
         isPaused={!isStarted}
         onProgress={setProgress}  
         onEnd={onEnd}
         />
         <View style={{paddingTop:spacing.lg}}>
                <Text style={styles.title}>Focusing On :</Text>
                <Text style={styles.task}>{focusSubject}</Text>
          </View>
      </View> 
      <View>
        <ProgressBar 
        progress={progress} 
        color={colors.prograssBar} 
        style={{height:spacing.sm}}
        />
      </View>
         <View style={styles.timingWrapper}>
           <Timing onChangeTime={setMinutes}/>
        </View>
        <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title ={"start"} onPress={() => setIsStarted(true)}/>
        )}

         {isStarted && (
          <RoundedButton title ={"pause"} onPress={() => setIsStarted(false)}/>
        )}
        </View>
        <View style={styles.clear}>
           <RoundedButton size={50} title={"-"} onPress={clearSubject}/>
        </View>
  </View>
  )
}


const styles = StyleSheet.create({
  countdown  : {
    alignItems:"center",
    justifyContent:'center',
    flex:0.5
  },
  container:{
    flex:1,
  },
  timingWrapper: {
     flex:0.1,
     flexDirection:"row",
     paddingTop:spacing.lg
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection:"row",
    padding:20,
    justifyContent: "center",
    alignItems:'center',
  },
  title : {
    color:colors.white,
    fontWeight:"bold",
    textAlign:'center',
    fontSize:22,
    paddingBottom:5
  },
  clear: {
     justifyContent:"center",
     alignItems:'center'
  },
  task: {
  color:colors.white,
  textAlign:"center",
  fontSize:20
  }
})
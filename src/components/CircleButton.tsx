import {
    Text, StyleSheet, TouchableOpacity,
    type ViewStyle
 } from 'react-native'

interface Props{
    children:JSX.Element
    style?: ViewStyle
    onPress?: () => void
}

const CircleButton = (props:Props):JSX.Element => {
    const { children, style, onPress } =props
    return(
             <TouchableOpacity onPress={onPress} style={[styles.circleBotton, style]}>
                  <Text style={styles.circleBottonLabel}>{ children }</Text>
             </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    circleBotton:{
        width:64,
        height:64,
        borderRadius:32,
        backgroundColor:'rgb(83, 146, 240)',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:40,
        bottom:40,
        shadowColor:'rgb(8, 4, 4)',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0,height:8},
        elevation:8
       },
       circleBottonLabel:{
        color:'rgb(24, 23, 23)',
        fontSize:40,
        lineHeight:48
       }
})

export default CircleButton
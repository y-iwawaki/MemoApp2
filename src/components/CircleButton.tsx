import { View, Text, StyleSheet } from "react-native"

interface Props{
    children:string
}

const CircleButton = (props:Props):JSX.Element => {
    const { children } =props
    return(
             <View style={styles.circleBotton}>
                  <Text style={styles.circleBottonLabel}>{ children }</Text>
             </View>
    )
}

const styles =StyleSheet.create({
    circleBotton:{
        width:64,
        height:64,
        borderRadius:32,
        backgroundColor:'#467FD3',
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
        color:'rgb(243, 237, 237)',
        fontSize:40,
        lineHeight:48
       }
})

export default CircleButton
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    label:string
}

const Button =(prpos:Props): JSX.Element => {
    const {label} =prpos
   return(
    <View style={styles.button}>
        <Text style={styles.buttonlabel}>{label}</Text>
    </View>
   )
}

const styles = StyleSheet.create({

    button:{
        backgroundColor:'rgb(86, 147, 238)',
        borderRadius: 4,
        alignSelf:'flex-start',
        marginBottom: 24

    },
    buttonlabel:{
        fontSize:16,
        lineHeight:32,
        color:' #ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24

    }
})

export default Button
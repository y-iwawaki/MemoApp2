import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    label:string
    onPress?: () => void
}

const Button =(prpos:Props): JSX.Element => {
    const {label, onPress} =prpos
   return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonlabel}>{label}</Text>
    </TouchableOpacity>
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
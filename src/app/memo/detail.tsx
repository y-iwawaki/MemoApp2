import {View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const  Detail = ():JSX.Element => {
    return(
      <View style={styles.container}>
        <Header />
        <View style={styles.memoHeader}>
            <Text style={styles.memoTotle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2025年01月19日 10:00</Text>
        </View>
        <ScrollView style={styles.memoBody}>
            <Text style={styles.memoBodyText}>
                あいうえおおおおおおおお

            </Text>
        </ScrollView>
        <CircleButton style={{top:160, bottom:'auto'}}>
             <Icon name='pencil' size={40} color='rgb(245, 21, 21)'/>
        </CircleButton>
      </View>
    )
}

const styles =StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#ffffff'
   },
   memoHeader:{
    backgroundColor:'rgb(88, 151, 245)',
    height:96,
    justifyContent:'center',
    paddingVertical:24,
    paddingHorizontal:19

   },
   memoTotle:{
       color: 'rgb(255, 255, 255)',
       fontSize:20,
       lineHeight:32,
       fontWeight:'bold'

   },
   memoDate:{
    color: 'rgb(255, 255, 255)',
    fontSize:12,
    lineHeight:16
   },
   memoBody:{
    paddingVertical:32,
    paddingHorizontal:27
   },
   memoBodyText:{
    fontSize:16,
    lineHeight:24,
    color: 'rgb(14, 1, 1)'
   }

}
)

export default Detail
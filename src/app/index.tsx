import { View, Text, StyleSheet } from 'react-native'

const Index = ():JSX.Element => {
    return(
        <View style={styles.container}>
         <View>
            <View>
             <Text>Memo App</Text>
             <Text>ログアウト</Text> 
            </View>
         </View>     
         <View>

        <View>
            <View>
                <Text>買い物リスト</Text>
                <Text>2024年01月12日</Text>
            </View>
            <View>
                <Text>XX</Text>
            </View>
         </View>
        
         <View>
            <View>
                <Text>買い物リスト</Text>
                <Text>2024年01月12日</Text>
            </View>
            <View>
                <Text>XX</Text>
            </View>
         </View>

         <View>
            <View>
                <Text>買い物リスト</Text>
                <Text>2024年01月12日</Text>
            </View>
            <View>
                <Text>XX</Text>
            </View>
         </View>

         </View>
         <View>
            <Text>+</Text>
         </View>
        </View>
    )
 

}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 }
})

export default Index

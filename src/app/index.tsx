import { View, Text, StyleSheet } from 'react-native'

const Index = ():JSX.Element => {
    return(
      <View style={styles.container}>     
         <View style={styles.header}>
              <View style={styles.headerInner}>
                  <Text style={styles.headerTitle}>Memo App</Text>
                  <Text style={styles.headerRight}>ログアウト</Text> 
              </View>
         </View>

         <View>

         <View style={styles.memoListItem}>
             <View>
                 <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                 <Text style={styles.memoListItemDate}>2024年01月12日</Text>
             </View>
             <View>
                 <Text>XX</Text>
             </View>
         </View>
        
         <View style={styles.memoListItem}>
             <View>
             <Text style={styles.memoListItemTitle}>買い物リスト</Text>
             <Text style={styles.memoListItemDate}>2024年01月12日</Text>
             </View>
             <View>
                 <Text>XX</Text>
             </View>
         </View>

         <View style={styles.memoListItem}>
             <View>
             <Text style={styles.memoListItemTitle}>買い物リスト</Text>
             <Text style={styles.memoListItemDate}>2024年01月12日</Text>
             </View>
             <View>
                 <Text>XX</Text>
             </View>
         </View>

         </View>
             <View style={styles.circleBotton}>
                  <Text style={styles.circleBottonLabel}>+</Text>
             </View>
        </View>
    )
 

}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: ' #ffffff'
 },
 header:{
    backgroundColor: 'rgb(12, 100, 233)',
    height: 104,
    justifyContent:'flex-end'    
 },
 headerInner:{
    alignItems:'center'
 },
 headerRight:{
    position:'absolute',
    right: 16,
    bottom: 16,
      color: 'rgba(217, 228, 238, 0.7)'
 },
 headerTitle:{
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'rgb(8, 1, 1)'
 },
memoListItem:{
    backgroundColor: ' #ffffff',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:16,
    paddingHorizontal:19,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:' rgba(0,0,0.15)'

},
memoListItemTitle:{
    fontSize: 22,
    lineHeight: 32
},
memoListItemDate:{
    fontSize: 12,
    lineHeight: 16,
    color:' #848484'
},
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

export default Index

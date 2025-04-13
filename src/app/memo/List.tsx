import { View, StyleSheet ,FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect ,useState} from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'


import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth} from '../../config'
import { type Memo} from '../../../types/memo'

const handlePress = () : void =>{
 router.push('/memo/create')
}

const List = ():JSX.Element => {
   const [memos ,setMemos] = useState<Memo[]>([])
   const navigation = useNavigation()
   useEffect(() => {
      navigation.setOptions({
         headerRight:() => { return <LogOutButton/>}
      })
   },[])
   useEffect(() => {
      if (!auth.currentUser) {
         console.log("ユーザーが認証されていません")
         return }
      const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
      console.log(auth.currentUser.uid)
      const q = query(ref, orderBy('updatedAt', 'desc'))
      console.log("Firestore からデータを取得開始...")
      const unsubscribe = onSnapshot(q, (snapshot) => {
         console.log("Firestore からのスナップショット:", snapshot.empty ? "空" : "データあり")
         if (snapshot.empty) {
            console.log("Firestore にデータが見つかりません。")
            return
         }
         const remoteMemos: Memo[] = []
         snapshot.forEach((doc) => {
            const { bodyText, updatedAt} =doc.data()
            remoteMemos.push({
               id:doc.id,
               bodyText,
               updatedAt
            })
         })
         console.log('取得したメモ:', remoteMemos)
         setMemos(remoteMemos)
      })
      return unsubscribe
   },[])
    return(
      <View style={styles.container}>
         <FlatList
            data = {memos}
            renderItem={({item}) =><MemoListItem memo={item} />}
            />
         <CircleButton onPress={handlePress}>
            <Icon name='plus' size={40} color='rgb(245, 21, 21)'/>
         </CircleButton>
        </View>
    )
 }

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: ' #ffffff'
 }




})

export default List

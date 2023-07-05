import { View, Text } from 'react-native'


export default function PostDetails({ navigation, route }:any ){
    const params = route.params.params
    
    return(
        <View> 
            <Text>{params.name}</Text>
        </View>
    )
}
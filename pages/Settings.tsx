import { View, Text, Button } from 'react-native'
import { useAppDispatch } from '../utils/hooks'
import { themeSlice } from '../theme/theme'

export default function Settings(){ 
    const dispatch = useAppDispatch()

    return( 
        <View> 
            <Text>Settings</Text>
            <Button title = "Toggle Theme" onPress={() => dispatch(themeSlice.actions.toggleTheme())}></Button>
        </View>
    )
}
import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useAppSelector } from "../utils/hooks"

export default function NavTab({ navigation }: any ){ 
    const theme = useAppSelector(state => state.theme)

    const styles = StyleSheet.create({ 
        container: { 
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            minHeight: 90,
            maxHeight: 90,
            height: 90,
            alignItems: 'flex-end',
            flex: 1,
            padding: 20,
            paddingBottom: 35,

        },
        text: { 
            color: theme.colors.text
        }, 
        icon: { 
            fontSize: 35, 
            color: theme.colors.text
        },
        iconContainer: { 
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column",
            justifyContent: 'center'
        }
    })
    return( 
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.iconContainer} onPress={() => navigation.navigate("Home")}>
                <Ionicons  style = {styles.icon} name = "home"></Ionicons>
                <Text style = {styles.text}>Posts </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconContainer} onPress={() => navigation.navigate("Messages")}> 
                <Ionicons style = {styles.icon} name = "mail"></Ionicons>
                <Text style = {styles.text}> Messages </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconContainer} onPress={( ) => navigation.navigate("Search")}> 
                <Ionicons style = {styles.icon} name = "search"></Ionicons>
                <Text style = {styles.text}> Search </Text>
            </TouchableOpacity>
            <TouchableOpacity  style = { styles.iconContainer} onPress={() => navigation.navigate("Profile")}> 
                <Ionicons name = "person" style = {styles.icon}></Ionicons>
            <Text style = {styles.text}> Profile </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconContainer} onPress={() => navigation.navigate("Settings")}> 
                <Ionicons name = "settings" style = {styles.icon}></Ionicons>
                <Text style = {styles.text}> Settings </Text>
            </TouchableOpacity>
        </View>
    )
}
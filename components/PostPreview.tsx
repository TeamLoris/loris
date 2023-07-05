import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { PostType } from '../types/Posts'
import { useAppSelector } from '../utils/hooks'
import { typography } from '../theme/typography'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import * as MediaLibrary from 'expo-media-library';
import { themeSlice } from '../theme/theme'


export default function PostPreview({ name, url, body, nsfw, creator, counts, thumbnail_url, community}: PostType){ 
    const theme = useAppSelector(state => state.theme)
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    const style = StyleSheet.create({ 
        container: { 
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.secondaryText,
            borderBottomWidth: 4,
            paddingBottom:10,

        },
        title: { 
            color: theme.colors.text, 
            fontSize: typography.size.xl, 
        }, 
        iconContainer: { 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'space-around',
            color: theme.colors.text, 
            fontSize: typography.size.l
        }, 
        underText: { 
            fontSize: typography.size.m, 
            color: theme.colors.text
        }, 
        iconAndText: { 
            display:'flex',
            flexDirection: 'row',
            fontSize:typography.size.m
        }, 
        settingsIcon: { 
            paddingLeft: 10, 
            paddingRight: 10,
        }
    })

    function saveImage(tag: string): void{ 
       MediaLibrary.saveToLibraryAsync(tag)
    }


    return(
        <View style = {style.container}> 
            <Text style = {style.title}>{name}</Text>
            {thumbnail_url && <TouchableHighlight onLongPress={() => saveImage('https://reactnative.dev/img/tiny_logo.png')}><Image source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style = {{width: "100%", height: 400}}></Image></TouchableHighlight>}
            {/* @ts-ignore */}
            {/* <Image style = {{width: 50, height: 50}} source={{uri: community.icon}}></Image> */}
            <Text style = { style.underText }>{community.name}</Text>
            <Text style = { style.underText}>{creator.display_name}</Text>

            <View style = {style.iconContainer}>
                <View style = {style.iconAndText}> 
                    <Text style = {style.underText}>{counts.score}</Text>
                    <TouchableOpacity> 
                        <Ionicons size={typography.size.xl} color={theme.colors.secondaryText} name = "arrow-up" />
                    </TouchableOpacity>   
                    <TouchableOpacity> 
                        <Ionicons name = "arrow-down" color = {theme.colors.secondaryText} size={typography.size.xl} />
                        
                    </TouchableOpacity>             
                </View> 
                <View style = {style.iconContainer}>
                    <View style = {style.iconAndText}>
                        <Ionicons name = "chatbubble-ellipses-outline" style = {style.underText} />
                        <Text style = { style.underText}>{counts.comments}</Text>
                    </View> 
                    <View> 
                        <View> 
                            <Ionicons style = {[style.underText, style.settingsIcon]} name = "ellipsis-horizontal-outline" />
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}
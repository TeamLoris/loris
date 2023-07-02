import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { getClient } from '../utils/client'
import mockPosts from "../mock/posts.json"
import {  useAppSelector } from '../utils/hooks'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
export default function Main({ navigation }: any){ 
    const [ posts, setPosts ]: any = useState() 
    const colors = useAppSelector(state => state.theme.colors)



    useEffect(() => { 
        setPosts(mockPosts.posts)
        // getPosts("lemmy.world")
    }, [])

    async function getPosts(url: string){ 
        const posts = await getClient(url).getPosts({ 
          page: 1, 
          limit: 30, 
          sort: "Active"
        })
        setPosts(posts.posts)
    
      }

    const styles = StyleSheet.create({
        container: {
          flex: 5,
          backgroundColor: colors.background,
        },
        body: { 
            flex: 4, 
            backgroundColor: colors.background
        }, 
        text: { 
            color: colors.text
        }
      });


    return( 
        <View style = {styles.container}>
            <ScrollView> 
                {mockPosts.posts.map(post =>  
                    <Text style = {styles.text}>{post.post.name}</Text>
                )}
            </ScrollView>
        </View>
    )
}
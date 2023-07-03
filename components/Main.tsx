import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { getClient } from '../utils/client'
import mockPosts from "../mock/posts.json"
import {  useAppSelector } from '../utils/hooks'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from './Post'



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
                    <Post 
                        id = { post.post.id }   
                        name = { post.post.name }  
                        url = { post.post.url }
                        body={ post.post.body } 
                        creator_id={ post.creator.id }
                        removed = { post.post.removed }
                        locked = { post.post.locked }
                        published= { post.post.published }
                        deleted = { post.post.deleted }
                        nsfw = { post.post.nsfw }
                        thumbnail_url =  { post.post.thumbnail_url }
                        local = { post.post.local }
                        featured_local = { post.post.featured_local }
                        creator={ post.creator }
                        counts = { post.counts }
                        community={post.community}
                        
                        />
    
                )}
            </ScrollView>
        </View>
    )
}
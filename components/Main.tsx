import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import { getClient } from '../utils/client'
import mockPosts from "../mock/posts.json"
import {  useAppSelector } from '../utils/hooks'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostPreview from './PostPreview'



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
                {mockPosts.posts.map(({ post, creator, counts, community }) =>
                <TouchableHighlight onPress={() => navigation.navigate("Post", { 
                    screen: "PostDetails",
                    params: { 
                        id: post.id ,   
                        name:  post.name ,  
                        url: post.url ,
                        body: post.body , 
                        creator_id: creator.id,
                        removed:  post.removed,
                        locked:  post.locked,
                        published:  post.published,
                        deleted:  post.deleted,
                        nsfw:  post.nsfw,
                        thumbnail_url:   post.thumbnail_url,
                        local:  post.local,
                        featured_local:  post.featured_local,
                        creator: creator,
                        counts:  counts,
                        community: community
                    }
                })}> 
                    <PostPreview 
                        id = { post.id }   
                        name = { post.name }  
                        url = { post.url }
                        body={ post.body } 
                        creator_id={ creator.id }
                        removed = { post.removed }
                        locked = { post.locked }
                        published= { post.published }
                        deleted = { post.deleted }
                        nsfw = { post.nsfw }
                        thumbnail_url =  { post.thumbnail_url }
                        local = { post.local }
                        featured_local = { post.featured_local }
                        creator={ creator }
                        counts = { counts }
                        community={ community }
                        
                        />
                </TouchableHighlight>  
    
                )}
            </ScrollView>
        </View>
    )
}
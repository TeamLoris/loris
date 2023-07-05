import React from 'react'
import { Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './Main'
import { useAppSelector } from '../utils/hooks'
import { typography } from '../theme/typography'
import Settings from '../pages/Settings'
import NavTab from './NavTab'
import Messages from '../pages/Messages'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import PostDetails from '../pages/PostDetails'

const Tab = createBottomTabNavigator()


export default function Nav(){ 
    const theme = useAppSelector(state => state.theme)
   

    return( 
        <Tab.Navigator tabBar={(props) => <NavTab {...props} />}> 
            <Tab.Screen 
                name = "Home"
                component={Main}
                options = {( { navigation } ) => ({
                    headerStyle: { 
                        backgroundColor: theme.colors.background
                    }, 
                    headerTitleStyle: { 
                        color: theme.colors.text,
                        fontSize: typography.size.xl,
                    }, 
                    headerTitle: "Main",
                    title: "Main",
                    headerLeft: () => <Button onPress={() => navigation.goBack()} title='Home'></Button>
                })}
         />
          <Tab.Screen 
                name = "Settings"
                component={Settings}
                options = {( { navigation } ) => ({
                    headerStyle: { 
                        backgroundColor: theme.colors.background
                    }, 
                    headerTitleStyle: { 
                        color: theme.colors.text,
                        fontSize: typography.size.xl,
                    }, 
                    headerTitle: "Settings",
                    title: "Settings",
                    headerLeft: () => <Button onPress={() => navigation.goBack()} title='Home'></Button>
                })}
         />
         <Tab.Screen 
                name = "Messages"
                component={Messages}
                options = {( { navigation } ) => ({
                    headerStyle: { 
                        backgroundColor: theme.colors.background
                    }, 
                    headerTitleStyle: { 
                        color: theme.colors.text,
                        fontSize: typography.size.xl,
                    }, 
                    headerTitle: "Messages",
                    title: "Messages",
                    headerLeft: () => <Button onPress={() => navigation.goBack()} title='Home'></Button>
                })}
         />
         <Tab.Screen 
                name = "Profile"
                component={Profile}
                options = {( { navigation } ) => ({
                    headerStyle: { 
                        backgroundColor: theme.colors.background
                    }, 
                    headerTitleStyle: { 
                        color: theme.colors.text,
                        fontSize: typography.size.xl,
                    }, 
                    headerTitle: "Profile",
                    title: "Profile",
                    headerLeft: () => <Button onPress={() => navigation.goBack()} title='Home'></Button>
                })}
         />
          <Tab.Screen 
                name = "Search"
                component={Search}
                options = {( { navigation } ) => ({
                    headerStyle: { 
                        backgroundColor: theme.colors.background
                    }, 
                    headerTitleStyle: { 
                        color: theme.colors.text,
                        fontSize: typography.size.xl,
                    }, 
                    headerTitle: "Search",
                    title: "Search",
                    headerLeft: () => <Button onPress={() => navigation.goBack()} title='Home'></Button>
                })}
         />
         <Tab.Screen name = "Post" component={ PostDetails } />
        </Tab.Navigator>
    )
}
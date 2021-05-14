import react from 'react'
import {CustomSideBarMenu} from '../components/customSideBarMenu'
import {AppTabNavigator} from './tabNavigator'
import {createDrawerNavigator} from 'react-navigation-drawer'

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
})
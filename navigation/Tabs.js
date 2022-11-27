import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard, Place } from "../screens"
import { COLORS, FONTS, icons, images } from "../constants"


const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let imageIcon;

                    if(route.name === "Dashboard"){
                        imageIcon = icons.maps
                    }else if(route.name === "Bookmarks"){
                        imageIcon = icons.bookmark
                    }else if(route.name === "Calender"){
                        imageIcon = icons.calendar
                    }else if(route.name === "Plane"){
                        imageIcon = icons.plane
                    }

                    return (
                        <Image
                            source={imageIcon}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: focused ? COLORS.blue : COLORS.gray }}
                        />
                    );

                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.black,
                    borderTopColor: "transparent",
                    height: 100
                },
                headerShown: false,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Bookmarks" component={Place} />
            <Tab.Screen name="Calender" component={Place} />
            <Tab.Screen name="Plane" component={Place} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.blue,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;
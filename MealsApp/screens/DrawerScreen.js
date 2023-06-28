import {Image, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditProfile from "./EditProfile";
import MyProfileScreen from "./MyProfileScreen";
import ProposalToMeScreen from "./ProposalToMeScreen";
import MyVisitorsScreen from "./MyVisitors";
import PrivacyAndPoliceScreen from "./PrivacyAndPolice";
import SettingsScreen from "./SettingsScreen";
import HelpAndSupportScreen from "./HelpAndSupport";
import SignInScreen from "./SignInScreen";
import React from "react";
import DashboardScreen from "./DashboardScreen";

function DrawerScreen(){

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();


    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerTransparent: true,
                drawerType: 'slide',
                headerLeftContainerStyle: '',
                headerTitle: '',
                headerTintColor: 'white',
                drawerStyle: {backgroundColor: '#FF5485'},
                drawerActiveBackgroundColor: '#FF5485',
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: 'white',
                overlayColor: '#1C3079E1',
            }}>
                <Drawer.Screen name={"Dashboard"} component={DashboardScreen}
                               initialParams={DashboardScreen}
                               options={{
                                   drawerIcon: () => (
                                       <View style={styles.header}>
                                           <View>
                                               <Image style={styles.image} source={require('./DummyProfilePicture.png')}/>
                                           </View>
                                           <View style={styles.headtext}>
                                               <Text style={styles.name}>Martin Russo</Text>
                                               <Text style={styles.mail}>demomail@gmail.com</Text>
                                           </View>
                                       </View>
                                   ),
                                   headerLeftLabelVisible: false,
                               }} />
                <Drawer.Screen name="MyProfile" component={MyProfileScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./Profile.png")} />
                                   )
                               }} />
                <Drawer.Screen name="ProposalToMe" component={ProposalToMeScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./Proposal.png")} />
                                   )
                               }}/>
                <Drawer.Screen name="MyVisitors" component={MyVisitorsScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./MyVisitors.png")} />
                                   )
                               }}/>
                <Drawer.Screen name="PrivacyAndPolicy" component={PrivacyAndPoliceScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./Privacy.png")} />
                                   )
                               }}/>
                <Drawer.Screen name="Settings"
                               component={SettingsScreen}
                               options={{
                                   headerShown: true,
                                   drawerIcon: (size, color) => (
                                       <Image source={require('./Setting.png')} />
                                   )
                               }}/>
                <Drawer.Screen name="HealpAndSupport" component={HelpAndSupportScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./Help.png")} />
                                   )
                               }}/>
                {/*<Drawer.Screen name="ShareApp" />*/}
                <Drawer.Screen name="SignOut" component={SignInScreen}
                               options={{
                                   drawerIcon: ({size, color}) => (
                                       <Image source={require("./signout.png")} />
                                   )
                               }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerScreen;

const styles =StyleSheet.create({
    header:{
        flexDirection:"row",
        height:74,
        width:252,
        //backgroundColor:"#212121",
        // marginLeft:28,
        marginTop:51,
        marginBottom:10,
    },
    image:{
        height:74,
        width:74,
        borderRadius:37,
        borderWidth:8,
        borderColor:"#1C3079"
    },
    headtext:{
        //backgroundColor:"#21ffff",
        marginLeft:11,
    },
    mail:{
        fontSize:14,
        color:"#FFFFFF",
        //backgroundColor:"#FFFFFF",
        marginTop:2,
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        color:"#FFFFFF",
        marginTop:19,
        //backgroundColor:"#FFFFFF"
    },
});

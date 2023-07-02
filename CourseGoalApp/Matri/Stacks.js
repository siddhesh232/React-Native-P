import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerMenu from "../screens/DrawerProfileMenu/DrawerMenu";
import DashboardScreen from "../screens/DashboardScreen";
import PartnerDetailsBeforeAcceptRequest from "../screens/PartnerDetailsBeforeAcceptRequest";
import Header from "./Header";
import NotificationsScreen from "../screens/Notifications/Notifications";
import MyFavoritePartnerScreen from "../screens/MyFavoritePartner/MyFavoritePartner";
import SearchResult from "../screens/SearchResult";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SingUp from "../screens/SingUp";
import React from "react";

function Stack() {

    const Stack = createNativeStackNavigator();

    return (

            <Stack.Navigator>
                {/*<Stack.Screen name='SignIn' component={SignInScreen} options={{*/}
                {/*    header: (props) => <Header title="Sign In Account" arrow={false} />*/}
                {/*}} />*/}
                {/*<Stack.Screen name="Drawer" component={DrawerMenu}/>*/}
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Biodata" component={PartnerDetailsBeforeAcceptRequest} options={{
                    header: (props) => <Header title="Biodata Of Susmita Khan" arrow={true}/>
                }}/>
                <Stack.Screen name="Notification" component={NotificationsScreen} options={{
                    header: (props) => <Header title="Notifiaction" arrow={true}/>
                }}/>
                <Stack.Screen name="Favourite" component={MyFavoritePartnerScreen} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="Search" component={SearchResult} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{
                    header: (props) => <Header title="Forgot Password" arrow={true}/>
                }}/>
                <Stack.Screen name="SignUp" component={SingUp} options={{
                    header: (props) => <Header title="Register Now" arrow={true}/>
                }}/>
            </Stack.Navigator>

    );
}

export default Stack;



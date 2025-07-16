import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from '../components/Footer';

import HomeScreen from '../screens/HomeScreen';
import Starts from '../screens/Starts';
import ViewFlat from '../screens/ViewFlat';
import SocietyFlats from '../screens/SocietyFlats';
import BasicDetails from '../screens/BasicDetails';
import ViewMembers from '../screens/ViewMembers';
import Sttaf from '../screens/Sttaf';
import OTPVerification from '../screens/OTPVerification';
import StaffAdd from '../screens/StaffAdd';
import Visitors from '../screens/Visitors';
import NewVisitor from '../screens/NewVisitor';       


import AddMembers from '../screens/AddMembers';
import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';

// import AnimatedStack from '../screens/AnimatedStack';
import AddHome from '../screens/AddHome';
import ApprovalPending from '../screens/ApprovalPending';
import MyScreen from '../screens/MyScreen';
import NoticeBoard from '../screens/NoticeBoard';
import Vehicles from '../screens/Vehicles';
import Flatbills from '../screens/Flatbills';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="starts">

      <Stack.Screen name="starts" component={Starts} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="createAccount" component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name="footer" component={Footer} options={{ headerShown: false }} />
      <Stack.Screen name="homescreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="viewFlat" component={ViewFlat} options={{ headerShown: false }} />
      <Stack.Screen name="SocietyFlats" component={SocietyFlats} options={{ headerShown: false }} />
      <Stack.Screen name="BasicDetails" component={BasicDetails} options={{ headerShown: false }} />
      <Stack.Screen name="viewmembers" component={ViewMembers} options={{ headerShown: false }} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} />
      <Stack.Screen name="AddMembers" component={AddMembers} options={{ headerShown: false }} />
      <Stack.Screen name="sttaf" component={Sttaf} options={{ headerShown: false }} />
      <Stack.Screen name="staffadd" component={StaffAdd} options={{ headerShown: false }} />
      <Stack.Screen name="visitors" component={Visitors} options={{ headerShown: false }} />
      
      <Stack.Screen name="newvisitor" component={NewVisitor} options={{ headerShown: false }} />
      <Stack.Screen name="addHome" component={AddHome} options={{ headerShown: false }} />
      <Stack.Screen name="approvalPending" component={ApprovalPending} options={{ headerShown: false }} />
      <Stack.Screen name="myScreen" component={MyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="noticeBoard" component={NoticeBoard} options={{ headerShown: false }} />
      <Stack.Screen name="vehicles" component={Vehicles} options={{ headerShown: false }} />
      <Stack.Screen name="flatbills" component={Flatbills} options={{ headerShown: false }} />
      



    </Stack.Navigator>
  );
}
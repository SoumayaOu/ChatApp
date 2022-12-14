import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentification from './Screen/Authentification';
import Accueil from './Screen/Accueil';
import SignUp from './Screen/SignUp';
const Stack = createNativeStackNavigator();
export default function App() {
   
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="auth" component={Authentification}></Stack.Screen>
       <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
       <Stack.Screen name="Accueil" component={Accueil}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  );
}


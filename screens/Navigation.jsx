import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BuildListScreen} from "./BuildListScreen";
import {BuildScreen} from "./BuildScreen";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();


//<Routes> ... </Routes> => stack.nav
export const Navigation = () =>{
    return (

        <NavigationContainer>
            <Stack.Navigator>

                    <Stack.Screen name="BuildListScreen" component={BuildListScreen} options={{title:'Здания'}}/>
                    <Stack.Screen name="BuildScreen" component={BuildScreen} options={{title:'Здание'}}/>


            </Stack.Navigator>
        </NavigationContainer>

        )

}
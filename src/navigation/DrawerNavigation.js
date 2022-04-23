import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import About from "../screens/About";
import News from "../screens/News";
import SingleNews from "../screens/SingleNews";
import BestPlayers from "../screens/BestPlayers";
import BestTeams from "../screens/BestTeams";
import Stats from "../screens/Stats";
import CheckStats from "../components/CheckStats";
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

const screenOptionsStyle = {
    headerStyle: {
        backgroundColor: '#384053',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0
        
    },
    drawerStyle: {
        backgroundColor: 'orange',
        width: 240,

    },
    headerTintColor: "white",
}
const DrawerComp = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={screenOptionsStyle}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="News" component={News} />
                <Drawer.Screen name="Best Players" component={BestPlayers} />
                <Drawer.Screen name="Best Teams" component={BestTeams} />
                <Drawer.Screen name="SingleNews" component={SingleNews} options={{
                    drawerItemStyle: { height: 0 }
                }} />

                <Drawer.Screen name="Stats" component={Stats} options={{
                    drawerItemStyle: { height: 0 }
                }} />

                <Drawer.Screen name="CheckStats" component={CheckStats} options={{
                    drawerItemStyle: { height: 0 }
                }} />
            </Drawer.Navigator>
        </NavigationContainer>


    )
}

export default DrawerComp;
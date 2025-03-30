import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inicio from "./Inicio";
import Personagem from "./Personagem";
import Feiticos from "./Feiticos";
import Livros from "./Livros";
import InfoPersonagem from "./InfoPersonagem";
import InfoFeiticos from "./InfoFeiticos";
import InfoLivros from "./InfoLivros";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: 'white',
        
                    },
                    headerStyle: {
                        backgroundColor: 'black', 
                    },
                    headerTintColor: 'rgb(54, 115, 115)', 
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen 
                    name="Inicio" 
                    component={Inicio} 
                    options={{ headerTitle: "", }} 
                />
                <Drawer.Screen 
                    name="Personagem" 
                    component={Personagem} 
                    options={{ headerTitle: "" }} 
                />
                <Drawer.Screen 
                    name="Feiticos" 
                    component={Feiticos} 
                    options={{ headerTitle: "" }} 
                />
                <Drawer.Screen 
                    name="Livros" 
                    component={Livros} 
                    options={{ headerTitle: "" }} 
                />
                 <Drawer.Screen 
                    name="InfoLivros" 
                    component={InfoLivros} 
                    options={{ headerTitle: "",  drawerItemStyle: { display: 'none' }}} 
                />
                 <Drawer.Screen 
                    name="InfoPersonagem" 
                    component={InfoPersonagem} 
                    options={{ headerTitle: "", drawerItemStyle: { display: 'none' } }} 
                />
                 <Drawer.Screen 
                    name="InfoFeiticos" 
                    component={InfoFeiticos} 
                    options={{ headerTitle: "", drawerItemStyle: { display: 'none' } }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
//
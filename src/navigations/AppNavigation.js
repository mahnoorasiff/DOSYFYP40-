import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';


const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
    initialRouteName={"Categories"}
    screenOptions={({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: { 
        backgroundColor: '#8CBBF1',
        height:70
      },
      headerLeft: () =>
        
          <Ionicons
            name="chevron-back-outline"
            color="white"
            size={32}
            onPress={() => navigation.goBack()}
          />
        
     })
    }
    >
      
            <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
      {/* <Stack.Screen name='BMI' component={bmi_calc}
      options={({ navigation }) => ({
        header:()=>null 
    })
  }  
      />
        <Stack.Screen name='Meal Planner' component={Mealplanner}
        options={({ navigation }) => ({
          headerTitle: "Plan My Meals",      
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#AFDAA3',
            height:80,
          }  
        })
      }
        />
        <Stack.Screen name='MPRecipes' component={MPRecipes}
         options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#AFDAA3',
            height:80
          },
          headerLeft: () =>
          <Ionicons style={{paddingLeft: 10 }}
              name="chevron-back-outline"
              size={32}
              color="white"
              onPress={() => navigation.goBack()}
            />
        })
      }
        />

        <Stack.Screen name='Activity Planner' component={Activityplanner}
         options={({ navigation }) => ({
          headerTitle: "Activity",  
          headerStyle: {
             backgroundColor: '#789FCC',
            //backgroundColor: '#AFCBFF',
            height:80
          },
          headerLeft: () =>
          <Ionicons style={{paddingLeft: 10 }}
              name="chevron-back-outline"
              size={32}
              color="white"
              onPress={() => navigation.goBack()}
            />
        })
      }
        /> */}


    </Stack.Navigator>
  )
} 




export default function AppContainer() {
  return(
    
      <MainNavigator/>
    
  )
} 
 

console.disableYellowBox = true; 
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
  TransitionPresets,
} from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';
import {CreateToDoScreen, TodosListScreen} from '../screens';

type RootTabsParamList = {
  TodosListScreen: undefined;
  CreateToDoScreen: undefined;
};

interface GetBarIconProps {
  routeName: keyof RootTabsParamList;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const defaultOptions: BottomTabNavigationOptions = {
  ...TransitionPresets.ShiftTransition,
  headerShown: false,
  tabBarShowLabel: false,
  tabBarLabelPosition: 'beside-icon',
};

export const RootTabs = () => {
  const getBarIcon = ({routeName, color, size}: GetBarIconProps) => {
    let iconName: 'add' | 'list' = 'list';
    if (routeName === 'CreateToDoScreen') {
      iconName = 'add';
    }
    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="TodosListScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) =>
          getBarIcon({
            routeName: route.name as keyof RootTabsParamList,
            color,
            size,
          }),
      })}>
      <Tab.Screen
        name="TodosListScreen"
        component={TodosListScreen}
        options={{
          ...defaultOptions,
        }}
      />
      <Tab.Screen
        name="CreateToDoScreen"
        component={CreateToDoScreen}
        options={defaultOptions}
      />
    </Tab.Navigator>
  );
};

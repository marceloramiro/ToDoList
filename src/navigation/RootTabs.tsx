import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
  TransitionPresets,
} from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';
import {CreateToDoScreen, TodosListScreen} from '@/screens';
import Theme from '@/theme';

type RootTabsParamList = {
  TodosListScreen: undefined;
  CreateToDoScreen: undefined;
};

export type NavigationProps = BottomTabNavigationProp<RootTabsParamList>;

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
  tabBarStyle: {
    backgroundColor: Theme.colors.tab,
    borderTopWidth: 0,
  },
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
      initialRouteName="CreateToDoScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) =>
          getBarIcon({
            routeName: route.name as keyof RootTabsParamList,
            color,
            size,
          }),
      })}>
      <Tab.Screen
        name="CreateToDoScreen"
        component={CreateToDoScreen}
        options={defaultOptions}
      />
      <Tab.Screen
        name="TodosListScreen"
        component={TodosListScreen}
        options={{
          ...defaultOptions,
        }}
      />
    </Tab.Navigator>
  );
};

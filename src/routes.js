import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
  {
    Main,
    Product,
  },
  {
    navigationOptions: {
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
    headerLayoutPreset: 'center',
  },
);

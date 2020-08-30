import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FrontPage from './src/pages/FrontPage';
import DetailPage from './src/pages/DetailPage';

const navigator = createStackNavigator(
  {
    Front: FrontPage,
    DetailPage: DetailPage,
  },
  {
    initialRouteName: 'Front',
    defaultNavigationOptions: {
      title: 'Movie Search',
    },
  }
);

export default createAppContainer(navigator);

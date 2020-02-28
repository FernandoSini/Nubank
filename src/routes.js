import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Splash from '~/pages/Splash';


//Não esquecer de trocar para o main Depois
const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigator from '@navigation/AuthNavigator';
import MainNavigator from '@navigation/MainNavigator';
import {RootState} from '@store/index';

const AppNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

return (
  <NavigationContainer>
    {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
  </NavigationContainer>
);
};

export default AppNavigator;
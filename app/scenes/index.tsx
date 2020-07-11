import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE_2,
  APP_LAUNCH_SCENE,
  APP_SCENE,
  SIGN_UP_FORM,
} from '../constants/NavigationConstants';

import Touchables from './LaunchScene2';
import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import SignUpForm from './SignupForm/index';

const scenes = [
  <Scene key={SIGN_UP_FORM} component={SignUpForm} />,
  <Scene key={APP_LAUNCH_SCENE_2} component={Touchables} />,
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene initial key={APP_SCENE} component={AppScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};

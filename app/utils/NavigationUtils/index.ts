import {Actions} from 'react-native-router-flux';
import {
  APP_LAUNCH_SCENE,
  APP_LAUNCH_SCENE_2,
  SIGN_UP_FORM,
} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToLaunchScene2() {
  Actions.push(APP_LAUNCH_SCENE_2);
}

export function goToSignUpScene() {
  Actions.push(SIGN_UP_FORM);
}

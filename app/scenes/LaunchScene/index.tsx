import React, {Component, Fragment} from 'react';
import {Image, Text} from 'react-native';

import Images from '../../images';

import {LaunchScreenWrapper} from './styledComponents';
import {goToLaunchScene2} from '../../utils/NavigationUtils';

class LaunchScene extends Component {
  goToLaunchScreen2 = () => {
    goToLaunchScene2();
  };
  render() {
    return (
      <Fragment>
        <LaunchScreenWrapper>
          <Image source={Images.ibHubsLogo} />
          <Text onPress={this.goToLaunchScreen2}>Hello World</Text>
        </LaunchScreenWrapper>
      </Fragment>
    );
  }
}

export default LaunchScene;

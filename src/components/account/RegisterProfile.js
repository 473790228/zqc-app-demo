/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {COLOR, DEFAULT_NAV_BAR_STYLE} from '../../config';
import * as components from '../';

export default class RegisterProfile extends Component {
  static navigatorStyle = DEFAULT_NAV_BAR_STYLE;

  render() {
    let {loading, processing, error, submit, ...otherProps} = this.props;
    return (
      <components.Layout
        loading={loading}
        processing={processing}
        errorFlash={error.flash}
        errorInput={error.input['RegisterProfile']}
      >
        <ScrollView>
          <components.TextNotice>帐号注册成功，请完善资料。</components.TextNotice>
          <components.Profile
            screenName='RegisterProfile'
            {...otherProps}
          />
          <components.ButtonWithBg
            text='完成'
            onPress={() => submit()}
            textStyle={{fontSize: 16}}
          />
        </ScrollView>
      </components.Layout>
    );
  }
}

const styles = StyleSheet.create({});

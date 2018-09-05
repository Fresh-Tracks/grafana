import React from 'react';
import {shallow} from 'enzyme';

import {PasswordStrength} from '../components/PasswordStrength';

describe('PasswordStrength', () => {

  it('should have class bad if length below 8', () => {
    const wrapper = shallow(<PasswordStrength password="asAD12$" />);
    expect(wrapper.find(".password-strength-bad")).toHaveLength(1);
  });

  it('should have class bad if only 2/4 requirements met', () => {
    const wrapper = shallow(<PasswordStrength password="aaaafsdfkls323232" />);
    expect(wrapper.find(".password-strength-bad")).toHaveLength(1);
  });

  it('should have class good if it has 3/4 requirements', () => {
    const wrapper = shallow(<PasswordStrength password="aaaAAA#$" />);
    expect(wrapper.find(".password-strength-good")).toHaveLength(1);
  });

  it('should have class good if it has 4/4 requirements', () => {
    const wrapper = shallow(<PasswordStrength password="aaAA11&*" />);
    expect(wrapper.find(".password-strength-good")).toHaveLength(1);
  });

});


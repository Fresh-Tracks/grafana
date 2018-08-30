import React from 'react';

export interface IProps {
  password: string;
}

export class PasswordStrength extends React.Component<IProps, any> {

  constructor(props) {
    super(props);
  }

  hasLowerCase(pass: string) {
    return /[a-z]/.test(pass);
  }

  hasUpperCase(pass: string) {
    return /[A-Z]/.test(pass);
  }

  hasNumber(pass: string) {
    return /\d/.test(pass);
  }

  hasSpecialCharacter(pass: string) {
    return /[^\w\s]/.test(pass);
  }

  requirementCount(pass) {
    let count = 0;
    [this.hasLowerCase, this.hasUpperCase, this.hasNumber, this.hasSpecialCharacter].forEach(test => {
      if (test(pass)) {
        count++;
      }
    });
    return count;
  }

  render() {
    const { password } = this.props;
    let strengthText = "strength: strong like a bull.";
    let strengthClass = "password-strength-good";

    if (!password) {
      return null;
    }

    const count = this.requirementCount(password);

    if (count < 4) {
      strengthText = "strength: you can do better.";
      strengthClass = "password-strength-ok";
    }

    if (password.length < 8 || count < 3) {
      strengthText = "strength: weak sauce.";
      strengthClass = "password-strength-bad";
    }

    return (
      <div className={`password-strength small ${strengthClass}`}>
        <em>{strengthText}</em>
      </div>
    );
  }
}



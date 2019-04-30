import React from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'
import _ from 'lodash';
import cx from 'classnames';
import './socialButton.scss';

export interface Props {
  type: 'facebook' | 'google' | 'github';
}

const providers = {
  facebook: {
    color: 'facebook',
  },
  google: {
    color: 'google plus',
  },
  github: {
    color: 'black',
  }
};

const SocialButton = ({ type = 'github' }: Props) => {
    const { color } = providers[type];
    return (
      <div>
        <Container className="select-button">
          <Button className={cx('fix-left', color)} fluid>
            <Icon name={type} /> {_.capitalize(type)} 로그인
          </Button>
        </Container>
      </div> 
    );
};

export default SocialButton;

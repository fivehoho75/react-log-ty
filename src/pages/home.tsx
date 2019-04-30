import React, { Component } from 'react'
import './home.scss';
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'
import SocialButton from 'components/SocialButton';
import BaseImage from 'static/images/base3.jpg';

type Props = {
};

export default class Home extends Component<Props> {

  render() {
    return (
      <div>
        <Grid textAlign='center' className='login-form' verticalAlign='middle'>
          <Grid.Column className='size'>
            <Segment raised>
              <Header as='h2' textAlign='center'>
                이야기를 시작하기
              </Header>
                <Segment>
                  <Form.Input type='text' placeholder='이메일을 입력하세요.' action fluid>
                    <input />
                    <Button color='orange'>시작하기</Button>
                  </Form.Input>
                  <Divider horizontal>Or</Divider>
                  <SocialButton type='google' />
                  <SocialButton type='facebook' />
                  <SocialButton type='github' />
                </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
        <div className='bg'>
          <img src={BaseImage} />
        </div>
      </div>
    )
  }
}

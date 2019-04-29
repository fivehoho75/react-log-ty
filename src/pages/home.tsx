import React, { Component } from 'react'
import './home.css';
import { Button, Form, Grid, Header, Segment, Icon, Divider, Container } from 'semantic-ui-react'

type Props = {
};

export default class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' className='login-form' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
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
                  <Container className="select-button">
                    <Button className="fix-left" color='google plus' fluid><Icon name='google' /> Google 로그인</Button>
                  </Container>
                  <Container className="select-button">
                    <Button className="fix-left" color='facebook' fluid><Icon name='facebook' /> Facebook 로그인</Button>
                  </Container>
                  <Container className="select-button">
                    <Button className="fix-left" color='black' fluid><Icon name='github' /> Github 로그인</Button>
                  </Container>
                </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

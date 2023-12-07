import { Row, Col, Button, Typography } from 'antd';
import { auth, provider } from '../../Firebase/config';
import { signInWithPopup } from 'firebase/auth';
const { Title } = Typography;

export default function Login() {

  const handleFBLogin = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center'}} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: '100%', marginBottom: 5 }}>
              Google
          </Button>
          <Button style={{ width: '100%' }} onClick={handleFBLogin}>
              FaceBook
          </Button>
        </Col>
      </Row>
    </div>
  )
}

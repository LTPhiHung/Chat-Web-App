import { Row, Col, Button, Typography } from 'antd';
import { auth, provider } from '../../Firebase/config';
import { fetchSignInMethodsForEmail, signInWithPopup } from 'firebase/auth';
import { addDocument } from '../../Firebase/services';
const { Title } = Typography;


export default function Login() {

  const handleFBLogin = async () => {
    const data = await signInWithPopup(auth, provider);
    const user = data.user;
    fetchSignInMethodsForEmail(auth, user.email)
    .then(async (signInMethods) => {
      if (signInMethods.length > 0) {
        // User with this email already exists
       
      } else {
        console.log(user.providerData.uid)
        // User doesn't exist, proceed with signup
        await addDocument("users", user.uid, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.providerData[0].uid,
          provider: user.providerData[0].providerId
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
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

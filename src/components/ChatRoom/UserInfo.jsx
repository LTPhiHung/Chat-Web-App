import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth, db } from "../../Firebase/config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 6px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;
export default function UserInfo() {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      console.log({data, snapshot, docs: snapshot.docs })
    })
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>Đăng suất</Button>      
    </WrapperStyled>
  )
}

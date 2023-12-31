import { Avatar, Button, Form, Input, Tooltip } from "antd";
import styled from "styled-components"
import { UserAddOutlined } from "@ant-design/icons/lib/icons";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(230, 230, 230);
  
  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &_description {
      font-size: 12px;
    }
  }
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-item: center;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const MessageListStyled = styled.div`
  max-height: 100%
  overflow-y: auto;
`;

const FormStyle = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span  className="header__description">Day la room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined/>} type="text">Mời</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message text="text" photoURL={null} displayName="Tung" createAt={12121212} />
          <Message text="text 1" photoURL={null} displayName="Tung 1" createAt={12121212} />
          <Message text="text " photoURL={null} displayName="Tung 2" createAt={12121212} />
          <Message text="text 3" photoURL={null} displayName="Tung 3" createAt={12121212} />
        </MessageListStyled>
        <FormStyle>
          <Form.Item>
            <Input placeholder="Nhập tin nhắn..." bordered={false} autoComplete="off" />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyle>
      </ContentStyled>
    </WrapperStyled>
  )

}
 
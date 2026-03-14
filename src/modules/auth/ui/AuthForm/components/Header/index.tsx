import { Typography, Flex } from 'antd';
import { Logo } from '../Logo';

const { Text } = Typography;

export const Header = () => {
  return (
    <>
      <Logo
        style={{
          margin: '0 auto',
        }}
      />
      <Flex vertical style={{ margin: '0 20px', textAlign: 'center' }}>
        <Typography.Title style={{ marginBottom: 10 }} level={2}>
          Добро пожаловать!
        </Typography.Title>
        <Text style={{ color: '#b4b4b4' }}>Пожалуйста, авторизуйтесь</Text>
      </Flex>
    </>
  );
};

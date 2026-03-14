import { Flex } from 'antd';
import { Form, Header, NoAccount } from './components';

export const AuthForm = () => {
  return (
    <Flex
      vertical
      style={{
        maxWidth: 400,
        border: '4px solid #fff',
        background: '#f8f8f8',
        padding: '40px 20px',
        borderRadius: 30,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      }}
    >
      <Flex vertical style={{ maxWidth: 360, margin: '0 auto' }}>
        <Header />
        <Form />
        <NoAccount />
      </Flex>
    </Flex>
  );
};

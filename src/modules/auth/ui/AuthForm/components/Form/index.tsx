import { Input, Typography, Checkbox, Button, Form, Flex } from 'antd';
import { MailOutlined, LockOutlined, CloseOutlined } from '@ant-design/icons';
import type { CheckboxProps } from 'antd';

const { Text } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

export const AuthForm = () => {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = () => {
    console.log('Finish');
  };

  const onFinishFailed = () => {
    console.log('onFinishFailed');
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ margin: '0 20px' }}
    >
      <Text>Почта</Text>
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: 'Введите ваш email' }]}
        style={{ marginBottom: 15, width: '100%' }}
      >
        <Input
          placeholder="hello@world.com"
          prefix={<MailOutlined style={{ color: '#d9d9d9' }} />}
          allowClear={{ clearIcon: <CloseOutlined /> }}
        />
      </Form.Item>
      <Text>Пароль</Text>
      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Введите ваш пароль' }]}
        style={{ marginBottom: 5 }}
      >
        <Input.Password
          placeholder="Введите пароль"
          prefix={<LockOutlined style={{ color: '#d9d9d9' }} />}
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        style={{ margin: '10px 0', width: '100%' }}
      >
        <Checkbox onChange={onChange} style={{ color: '#b4b4b4' }}>
          Запомнить данные
        </Checkbox>
      </Form.Item>
      <Flex>
        <Button
          block
          type="primary"
          style={{ background: '#313ade', padding: 20 }}
          htmlType="submit"
        >
          Войти
        </Button>
      </Flex>
    </Form>
  );
};

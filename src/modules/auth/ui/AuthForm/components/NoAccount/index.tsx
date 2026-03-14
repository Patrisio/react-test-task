import { Divider, Flex, Typography } from 'antd';

const { Text, Link } = Typography;

export const NoAccount = () => {
  return (
    <>
      <Flex style={{ margin: '0 20px' }}>
        <Divider style={{ width: '100px' }}>
          <Text style={{ color: '#d9d9d9' }}>или</Text>
        </Divider>
      </Flex>
      <Flex style={{ margin: '0 auto' }}>
        <Text style={{ color: '#919191', marginRight: 5 }}>Нет аккаунта?</Text>{' '}
        <Link
          style={{
            fontWeight: 600,
            textDecoration: 'underline',
            color: '#242fdb',
          }}
        >
          Создать
        </Link>
      </Flex>
    </>
  );
};

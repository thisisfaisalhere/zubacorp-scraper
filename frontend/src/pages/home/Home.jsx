import { Button, Input, List, message, Row, Space } from 'antd';
import { CloudServerOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import axios from '../../api/axios';

const { Search } = Input;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [throttledSearchQuery, setThrottledSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useDebounce(() => setThrottledSearchQuery(searchQuery), 300, [searchQuery]);

  const searchCompanies = useCallback(() => {
    if (throttledSearchQuery) {
      axios.post('/search', { search: throttledSearchQuery }).then(({ data }) => {
        setSearchResult(data.result);
      });
    }
  }, [throttledSearchQuery]);

  useEffect(() => {
    searchCompanies();
  }, [searchCompanies]);

  const saveRecord = (id) => {
    axios.post('/save', { search: id }).then(({ data }) => {
      message.success(`${data.result.companyName} record saved`);
    });
  };

  return (
    <Row gutter={[24]}>
      <Search
        width="100%"
        placeholder="Search Companies"
        enterButton="Search"
        size="large"
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={() => searchCompanies()}
      />
      <List
        size="large"
        header={null}
        footer={null}
        style={{ width: '100%' }}
        bordered
        dataSource={searchResult}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              <Space>
                <Button
                  onClick={() => {
                    saveRecord(item.id);
                  }}
                  icon={<CloudServerOutlined />}
                >
                  Save
                </Button>
              </Space>
            }
          >
            {item.name}
          </List.Item>
        )}
      />
    </Row>
  );
};

export default Home;

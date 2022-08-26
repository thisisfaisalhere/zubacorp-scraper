import { Row, Table, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import axios from '../../api/axios';

const Companies = () => {
  const [tableData, setTableData] = useState([]);

  const fetchData = useCallback(() => {
    axios.get('/companies').then(({ data }) => setTableData(data.result));
  }, []);

  useEffect(() => {
    fetchData();
    return () => {
      setTableData([]);
    };
  }, [fetchData]);

  return (
    <>
      <Row gutter={[8]} justify="center">
        <Typography.Title level={2}>Company List</Typography.Title>
      </Row>
      <Row gutter={[8]} justify="center">
        <Table
          dataSource={tableData}
          columns={[
            {
              title: 'ID',
              dataIndex: 'id',
              fixed: true,
            },
            { title: 'Company Name', dataIndex: 'companyName' },
            { title: 'CIN', dataIndex: 'cin' },
            { title: 'Created at', dataIndex: 'createdAt' },
            { title: 'Updated at', dataIndex: 'updatedAt' },
          ]}
        />
      </Row>
    </>
  );
};

export default Companies;

import React from 'react';
import styles from './index.css';

import ProTable from '@ant-design/pro-table';
import { getChannelData } from './service.js';
// 第六次作业，暗号： 双十一打骨折
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '住址',
        dataIndex: 'city',
        key: 'city'
    }
]
export default () => {
    return (
        <div>
            <h1 className={styles.title}>Page more/ index</h1>

            <ProTable 
            pagination={{current:1, pageSize: 10}}
            rowKey="id" columns={columns} request={(params) => { return getChannelData(params) }}></ProTable>
        </div>
    )
}
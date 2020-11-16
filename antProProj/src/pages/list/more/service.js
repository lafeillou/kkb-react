// import request from '@/utils/request';
import request from 'umi-request';

export async function getChannelData(params) {
    return request('/api/getChanelData', {
        data: params,
        method: 'post',
    });
}

// export async function queryRule(param) {
//     return request('/api/rule', {
//         params,
//     });
// }
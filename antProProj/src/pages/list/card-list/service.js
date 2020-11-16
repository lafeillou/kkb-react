
// 第六次作业key02，暗号： 双十一打骨折
import request from 'umi-request';
export async function queryFakeList(params) {
  return request('/api/fake_list', {
    params,
  });
}

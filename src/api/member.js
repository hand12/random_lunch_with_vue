import axios from 'axios';
import Host from './host';

export default {
  postMember: param => {
    const params = new URLSearchParams();
    params.append('member[name]', param.memberName)
    params.append('member[group_id]', param.groupId);
    return axios.post(`${Host}members`, params).then(res => res.data);
  },
  deleteMember: memberId => {
    return axios.delete(`${Host}members/${memberId}`);
  },
};

import axios from 'axios';
import Host from './host';

export default {
  getGroup: groupId => (
    axios.get(`${Host}groups/${groupId}`).then(res => res.data.group)
  ),
  getGroups: () => (
    axios.get(`${Host}groups`).then(res => res.data)
  ),
  postGroup: groupName => {
    const params = new URLSearchParams();
    params.append('group[name]', groupName);
    return axios.post(`${Host}groups`, params).then(res => res.data);
  },
  getGrouping: param => {
    return axios.get(`${Host}groups/${param.groupId}/result?members_num_per_group=${param.perNum}`).then(res => res.data);
  }
};

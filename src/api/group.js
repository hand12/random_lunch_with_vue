import axios from 'axios';
import Host from './host';

export default {
  getGroup: (groupId) => (
    axios.get(`${Host}groups/${groupId}`).then(res => res.data.group)
  ),
  getGroups: () => (
    axios.get(`${Host}groups`).then(res => res.data)
  ),
  postGroup: (groupName) => {
    const params = new URLSearchParams();
    params.append('group[name]', groupName);
    return axios.post(`${Host}groups`, params);
  },
};

import axios from 'axios';

const Host = 'https://damp-crag-50946.herokuapp.com/';

export default {
  getGroups: () => (
    axios.get(`${Host}groups`).then(res => res.data)
  ),
  postGroup: (groupName) => {
    let params = new URLSearchParams();
    params.append(`group[name]`, groupName);
    return axios.post(`${Host}groups`, params);
  },
};

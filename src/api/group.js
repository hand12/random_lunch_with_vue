import axios from 'axios';

const Host = 'https://damp-crag-50946.herokuapp.com/';

export default {
  getGroups: () => (
    axios.get(`${Host}groups`).then(res => res.data)
  ),
};

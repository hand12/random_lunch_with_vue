import axios from 'axios';
import Host from './host';

export default {
  postShop: (param) => {
    const params = new URLSearchParams();
    params.append('restaurant[name]', param.shopName)
    params.append('restaurant[group_id]', param.groupId);
    return axios.post(`${Host}restaurants`, params);
  },
  deleteShop: (shopId) => {
    return axios.delete(`${Host}restaurants/${shopId}`);
  },
};

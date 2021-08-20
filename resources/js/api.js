import axios from 'axios';

export default {
  methods:{
    async $callAPI(url, method, data){
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}
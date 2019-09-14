import axios from 'axios';

// GET All Inhabitants
export const getAllInhabitants = async () => {
    try {
      // const API_URL_FIXED =  await fixEnvApiUrl();
      const API_URL_FIXED =  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
      const response =  await axios.get(`${API_URL_FIXED}`);
      const members = response.data;
      return members;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
  };
import axios from 'axios';

// GET All Inhabitants
export const getAllInhabitants = async () => {
    try {
      const response =  await axios.get(`${process.env.VUE_APP_API}`);
      const members = response.data;
      return members;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
  };
import Vue from 'vue'
import Vuex from 'vuex'
import { getAllInhabitants } from '../../api/inhabitants';
import {FETCH_INHABITANTS} from '../types/actions'
import {FETCH_INHABITANTS_END} from '../types/mutations'

Vue.use(Vuex)

export default({
  namespaced: true,
  state: {
      inhabitantsList: [],
      inhabitantsRaw: []
  },
  mutations: {
      [FETCH_INHABITANTS_END] (state, {inhabitants}){
        state.inhabitantsList = inhabitants.Brastlewark;
        state.inhabitantsRaw = inhabitants.Brastlewark;
        console.log('Lo que viene: ',inhabitants.Brastlewark);
      }
  },
  actions: {
    [FETCH_INHABITANTS] ({ commit }){
        return getAllInhabitants()
        .then(inhabitantsResult => {
            commit (FETCH_INHABITANTS_END, {
                inhabitants: inhabitantsResult,
            })
        })
        .catch(error => {
            throw new Error(error);
          });
    },
  },
})

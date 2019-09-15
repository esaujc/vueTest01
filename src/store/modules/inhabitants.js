import Vue from 'vue'
import Vuex from 'vuex'
import { getAllInhabitants } from '../../api/inhabitants';
import {FETCH_INHABITANTS, FILTER_INHABITANTS} from '../types/actions'
import {FETCH_INHABITANTS_END, UPDATE_INHABITANTS, RESET_FILTER} from '../types/mutations'

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
    // console.log('Lo que viene: ',inhabitants.Brastlewark);
    },
    [RESET_FILTER](state) {
        state.inhabitantsList = state.inhabitantsRaw;
    },
    [UPDATE_INHABITANTS](state, selectedFilters) {
        let gender = parseInt(selectedFilters.genderSelected);
            if (gender != -1) {
            state.inhabitantsList = state.inhabitantsList.filter(inhabitant => {
                if (inhabitant.age % 2 == gender){
                    return inhabitant;
                }
            }
            );
        } else {
            state.inhabitantsList = state.inhabitantsRaw;
        }

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
    [FILTER_INHABITANTS]({ commit }, selectedFilters) {
        commit(RESET_FILTER);
        commit(UPDATE_INHABITANTS, selectedFilters);
      }
  },
})

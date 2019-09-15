<template>
    <div>
        <form class="filter" @submit.prevent="applyInhabitantsFilters" @reset.prevent="resetFilters">   
        <!-- <form class="filter" v-on:submit="applyInhabitantsFilters" @submit.prevent="applyInhabitantsFilters">    -->
        <p>
            <label for="gender">Gender:</label>
            <select id="gender" v-model="selectedFilters.genderSelected">
            <option selected value="-1">All</option>    
            <option value="0">Male</option>
            <option value="1">Female</option>
            </select>
        
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">  
        </p>    
        
        </form>
    </div>   
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: 'FilterForm',
  data: () =>  ({
      selectedFilters: {
          genderSelected: "-1", // -1 ALL, Odd age = Male, Couple age = Female
      },
  }),
  methods: {
      applyInhabitantsFilters() {
      this.$store.dispatch("inhabitants/applyInhabitantFilters", this.selectedFilters);
    },
    resetFilters() {
      this.$store.commit("inhabitants/resetFilters");
    },   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

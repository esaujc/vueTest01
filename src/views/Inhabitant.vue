<template>
  <div>
    {{inhabitantData.age}}
    {{inhabitantData.name}}
    {{inhabitantData.friends}}
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    inhabitantData: {
      id: "",
      name: "",
      thumbnail:"",
      age: "",
      weight:"",
      height: "",
      hair_color:"",
      professions: [],
      friends: []
    },
  }),
 created (){
    this.inhabitantData.id = this.$route.params.id;
    this.inhabitantData.age = this.$route.params.age;
    this.inhabitantData.name = this.$route.params.name;
    this.inhabitantData.friends = this.$route.params.friends;

    
        // console.log(this.$route.params)
  }
  // computed: {
  //   ...mapState ('inhabitants',{
  //     inhabitantsList: 'inhabitantsList'
  //   }),
  // },
  // methods: {
  //   fetchInhabitants() {
  //     this.$store.dispatch('inhabitants/getAllInhabitants');
  //   },
  //   gotToInhabitantsDetail(item){
  //     this.$router.push({
  //       name: 'Inhabitant',
  //       params: {age: item.age, name: item.name}
  //     })
  //   }
  // }

}
</script>

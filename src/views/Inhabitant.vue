<template>
  <div>
     <article class="container">
       <div class="item">
        <img :src=inhabitantData.thumbnail>
        <div class="item">
          <div class="">
          <h3>{{inhabitantData.name}}</h3>
          <span>Age:</span><span> {{inhabitantData.age}}</span><br/>
          <span>Weight: </span><span>{{inhabitantData.weight}}</span><br/>
          <span>Height: </span><span>{{inhabitantData.height}}</span><br/>
          <span>Hair Color:</span><span> {{inhabitantData.hair_color}}</span><br/>
          <span>Professions: </span><span>{{inhabitantData.professions}}</span><br/>
          <span>Friends: </span><span>{{inhabitantData.friends}}</span><br/>

          <p><button>Back</button></p>
          </div>
        </div>
      </div>
    </article>
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
    this.inhabitantData.name = this.$route.params.name;
    this.inhabitantData.thumbnail = this.$route.params.thumbnail;
    this.inhabitantData.age = this.$route.params.age;
    this.inhabitantData.weight = this.$route.params.weight;
    this.inhabitantData.height = this.$route.params.height;
    this.inhabitantData.hair_color = this.$route.params.hair_color;
    this.inhabitantData.professions = this.$route.params.professions;
    this.inhabitantData.friends = this.$route.params.friends;

  }

}
</script>

<style scoped>
 .container {
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    /* align-items: stretch; */
  }
 .item {
   /* background: orangered; */
   display: flex;
   flex-direction: row;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    text-align:left;
  } 
  .item img {
    max-width: 100%;
  }
  .item {
    padding: 0 20px 20px;
  }
  .item > button {
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
    }
  </style>
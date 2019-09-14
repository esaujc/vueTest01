<template>
  <div>
   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Inhabitant from '@/components/Inhabitant.vue'
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({

  }),
  async created() {
    console.log('Entra en created')
    await this.fetchInhabitants();
  },
  computed: {

  },
  methods: {
    fetchInhabitants() {
      this.$store.dispatch('inhabitants/getAllInhabitants');
    }
  }

}
</script>

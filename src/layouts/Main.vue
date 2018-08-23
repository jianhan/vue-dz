<template>
  <v-app id="main-layout">
    <!-- toolbar -->
    <MainHeaderToolbar />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="right" right temporary fixed></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import MainHeaderToolbar from './MainHeaderToolbar.vue';

@Component({
  components: { MainHeaderToolbar }
  })
export default class Main extends Vue {
  right: boolean = false
  left: boolean = false
}
</script>

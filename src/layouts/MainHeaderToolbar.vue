<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" fixed right clipped app>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :color="color" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="left" temporary fixed></v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

@Component
export default class MainHeaderToolbar extends Vue {
  // color prop
  @Prop({
    default: 'purple darken-3',
  })
    color!: string
    // title prop
  @Prop({
    default: 'Toolbar',
  })
    title!: string

  drawer: boolean = false
  drawerRight: boolean = false
  right: boolean = false
  left: boolean = false
}
</script>

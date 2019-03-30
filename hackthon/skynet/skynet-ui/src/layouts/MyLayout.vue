<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="flex items-center">
          <img
            style="width: 130px;"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NTMuMSA4My44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTMuMSA4My44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNSwxNS4xQzgsMjIuMiwzLjIsMzIuNywzLjIsNDMuOGMwLDEwLjIsNC4yLDIwLjgsMTEuOCwyOC40YzYuNCw2LjMsMTYuNiwxMS43LDMwLjEsMTEuNwoJYzUsMCw5LjUtMC45LDE3LjUtMy45VjU2Yy03LjEsNy44LTE0LjYsOC4yLTE3LjYsOC4yYy01LjcsMC0xMS4xLTIuMi0xNC41LTUuNGMtNC4xLTMuOS02LjMtOS44LTYuMy0xNS4yYzAtNS41LDItMTEuNiw2LjgtMTYKCWMzLjctMy40LDguMi01LjEsMTQtNS4xYzMuNCwwLDExLjEsMC41LDE3LjYsOC41VjYuOWMtOC40LTMuNC0xNC41LTQtMTguMi00QzMyLjMsMi45LDIxLjksOC4xLDE1LDE1LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDUuNiwxNGMtNy45LTcuNi0xOS4xLTExLjYtMzAuNy0xMS42Yy0xMS42LDAtMjIuOCw0LTMwLjcsMTEuNkM3NiwyMS44LDcyLDMyLjgsNzIsNDMuMgoJYzAsMTAuMyw0LDIxLjEsMTIuMywyOS4xYzcuOSw3LjYsMTkuMSwxMS42LDMwLjcsMTEuNmMxMS42LDAsMjIuOC00LDMwLjctMTEuNmM4LjMtNy45LDEyLjMtMTguOCwxMi4zLTI5LjEKCUMxNTcuOSwzMi44LDE1My45LDIxLjgsMTQ1LjYsMTR6IE0xMzAuNiw1OC4xYy0zLjYsMy42LTguOCw2LjEtMTUuNiw2LjFjLTYuOCwwLTEyLTIuNi0xNS44LTYuMmMtMi45LTIuOC02LjItNy42LTYuMi0xNC41CgljMC01LjUsMi0xMS4yLDYuMi0xNS4zYzQuMi00LjIsMTAuMi02LjIsMTUuOC02LjJjNS40LDAsMTEuMywyLjEsMTUuNiw2LjJjMy42LDMuNSw2LjMsOC45LDYuMywxNC45CglDMTM2LjksNDkuMiwxMzQuMiw1NC41LDEzMC42LDU4LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMjEuNyw0NC44YzMuOS0zLjcsNi4yLTkuNiw2LjItMTYuMmMwLTYuMi0yLjItMTMtNi43LTE3LjVjLTUuNy02LTEzLjItNi45LTE5LTYuOWgtMzEuNXY3Ny44aDIwLjJWNTIuMgoJbDE5LjQsMjkuOWgyNS4xTDIxMSw1MC4yQzIxNC42LDQ5LjUsMjE4LjcsNDcuOCwyMjEuNyw0NC44eiBNMjA0LjYsMzZjLTIuNSwyLjMtNi44LDMuMi05LjgsMy4yaC0zLjlWMTkuOWgzLjljNC40LDAsNy44LDEuMiw5LjcsMwoJYzEuOCwxLjYsMi43LDQuMiwyLjcsNi41QzIwNy4xLDMxLjksMjA2LjEsMzQuNSwyMDQuNiwzNnoiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMzMuNiwyMS40IDI1MC4yLDIxLjQgMjUwLjIsODIuMSAyNzAuNCw4Mi4xIDI3MC40LDIxLjQgMjg3LDIxLjQgMjg3LDQuMiAyMzMuNiw0LjIgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjk1LjksODIuMSAzNDAuMiw4Mi4xIDM0MC4yLDY0LjkgMzE2LjEsNjQuOSAzMTYuMSw1MS41IDMzOC45LDUxLjUgMzM4LjksMzQuMyAzMTYuMSwzNC4zIDMxNi4xLDIxLjQgCgkzNDAuMiwyMS40IDM0MC4yLDQuMiAyOTUuOSw0LjIgIi8+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI0NDkuNiw0LjIgNDI0LjgsNC4yIDQxNC45LDE4LjcgNDI3LjMsMzUuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjQyNy4xLDQ1LjQgNDE0LjMsNjIuMyA0MjguNiw4Mi4xIDQ1My4xLDgyLjEgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzOTguOSw0LjEgMzg5LjksNC4xIDQxNS41LDQwLjQgMzg0LjUsODEuOSAzOTMuNSw4MS45IDQyNC41LDQwLjQgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzODcuOSw0LjEgMzc4LjksNC4xIDQwNC41LDQwLjQgMzczLjUsODEuOSAzODIuNSw4MS45IDQxMy41LDQwLjQgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzNzYuOSw0LjIgMzczLjYsNC4yIDM2NC42LDQuMiAzNTUuNiw0LjIgMzgwLjYsNDAuNSAzNTAuMSw4Mi4xIDM1OS4xLDgyLjEgMzY4LjEsODIuMSAzNzEuNSw4Mi4xIAoJCTQwMi41LDQwLjUgCSIvPgo8L2c+Cjwvc3ZnPgo="
          >
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      :width="200"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item
          :exact="true"
          to="/"
        >
          <q-item-side icon="apps" />
          <q-item-main label="Dashboard" />
        </q-item>
        <q-item
          :exact="true"
          to="/generation"
        >
          <q-item-side icon="build" />
          <q-item-main label="Monthly Data" />
        </q-item>
        <q-item
          :exact="true"
          to="/report"
        >
          <q-item-side icon="assessment" />
          <q-item-main label="Report" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-modal
      v-model="opened"
      no-esc-dismiss
      no-backdrop-dismiss
    >
      <q-carousel
        class="text-white"
        style="width: 400px;height: 430px;"
        quick-nav
      >
        <q-carousel-slide>
          <img class="img" src="~/assets/1.png">
          <div class="title text-black text-center">Comparision</div>
        </q-carousel-slide>
        <q-carousel-slide>
          <img class="img" src="~/assets/3.jpg">
          <div class="title text-black text-center">Report</div>
        </q-carousel-slide>
        <q-carousel-slide>
          <img class="img" src="~/assets/2.png">
          <div class="title text-black text-center">Prediction</div>
        </q-carousel-slide>
      </q-carousel>
      <div class="flex flex-center q-py-lg">
        <q-btn
          color="primary"
          @click="closeModal"
          no-caps
          label="Start"
        />
      </div>
    </q-modal>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      opened: false,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  created () {
    this.opened = JSON.parse(localStorage.getItem('opened')) === false ? false : true
  },
  methods: {
    closeModal () {
      this.opened = false
      localStorage.setItem('opened', false)
    }
  }
}
</script>

<style scoped lang="stylus">
.img
  width 100%
  height 320px
.title
  font-size 26px
  font-weight 700
  margin-top 10px
</style>

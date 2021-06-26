<template>
  <div>
    <v-menu v-model="menu" offset-y :close-on-content-click="false">
      <template #activator="{ on }">
        <v-btn icon color="primary" dark elevation="0" v-on="on">
          <v-icon>mdi-calendar</v-icon>
        </v-btn>
      </template>
      <v-date-picker
        v-model="picker"
        active-picker="YEAR"
        dark
        @click="menu = false"
      />
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    valuedate: {
      type: String,
      default: new Date().toISOString().substr(0, 10),
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    picker: {
      get() {
        return this.deadline
      },
      set(val) {
        this.menu = false
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style scoped>
.picker {
  position: absolute;
  left: 20px;
}
</style>

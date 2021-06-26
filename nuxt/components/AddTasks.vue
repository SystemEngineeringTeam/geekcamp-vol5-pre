<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400px">
      <template #activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          class="vbtton"
          v-on="on"
        >
          タスクを追加する
        </v-btn>
      </template>
      <v-card height="350px" style="position: relative">
        <v-card-title class="text-h5 grey lighten-2 primary--text">
        </v-card-title>
        <v-row>
          <v-card-text style="relative">
            <v-form>
              <v-col cols="8">
                タスク名{{ detail }}
                <v-text-field
                  v-model="detail"
                  solo
                  label="タスクを入力"
                ></v-text-field>
              </v-col>
              <v-col cols="9" class="justify-center">
                締め切り{{ deadline }}
                <v-text-field v-model="deadline" single-line>
                  <template #append-outer>
                    <Date v-model="deadline"></Date>
                  </template>
                </v-text-field>
              </v-col>
            </v-form>
          </v-card-text>
        </v-row>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            class="add"
            @click="
              dialog = false
              registerTask()
            "
          >
            追加する
            <!-- {{ picker }}
            {{ time }} -->
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      detail: '',
      deadline: '',
      dialog: false,
    }
  },
  methods: {
    registerTask() {
      this.$store.dispatch('postTask', {
        detail: this.detail,
        deadline: this.deadline,
      })
    },
    hello() {
      console.log('Hello')
    },
  },
}
</script>

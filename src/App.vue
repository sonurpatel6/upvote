<template>
  <div class="vote-container" v-for="(item, index) in $store.state.votes" :key="index">
    <div class="votes-list">
      <Upvote
        v-for="vote in item"
        v-bind:voted="vote.voted"
        v-bind:index="index"
        @upVoted="upVoted"
      />
    </div>
    <div class="add-new">
      <span @click="$store.dispatch('addToVotes',index)" class="btn">+</span>
    </div>
  </div>
</template>

<script>
import Upvote from "./components/Upvote.vue";
import store from './store';
export default {
  name: "App",
  components: {
    Upvote,
  },
  data() {
    return {}
  },
  components: {
    Upvote,
  },
  methods: {
    newUpVote: function (index) {
      $store.dispatch('addToVotes',index)
    },
    upVoted: function (value) {
      store.dispatch('updateStateToVotes',value)
    },
  },
};
</script>

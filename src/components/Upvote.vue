<template>
  <span class="vote" @click="upVoted" :class="{ voted: voted, notvoted: !voted }" > &#8593;</span>
</template>

<script>
export default {
  name: 'Upvote',
  props: {
    voted: Boolean,
    index: Number
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
     upVoted () {
         this.$emit('upVoted', {voted: !this.voted, index: this.index})
     }
   }
}
</script>
<style>
button {
  background-color: red;
}
.vote{
  padding:10px 20px;
  display: inline-block;
  border-radius:10px;
  font-size: 30px;
  font-weight: bold;
  margin:5px;
  cursor:pointer;
}
.voted{
  background-color:skyblue;
  color:blue;
}
.notvoted{
  background-color:grey;
  color:black;
}
</style>
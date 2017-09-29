<template>
<div>
  <h1> {{ msg }} </h1>
  <mu-raised-button @click="test" label="点我" class="demo-raised-button" primary/>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    test: function () {
      console.log('hello from Vue!');
      axios.get('/api/test').then(function (response) {
        console.log(response.data);
      });
    }
  }
}
</script>

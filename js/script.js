const {createApp} = Vue;

createApp({

  data(){
    return{
      saluto: "Hello Vue!",
      img: "https://placekitten.com/200/300"
    }
  }

}).mount("#app")
// Self-contained child component that can be used within other components.
// https://vuejs.org/v2/guide/components.html
// https://vuejs.org/v2/guide/components-registration.html
Vue.component('media-post',{
  
  // Props come in from the parent component.
  // https://vuejs.org/v2/guide/components-props.html
  props: ['image', 'title', 'user'],
  
  // Template string
  // https://vuejs.org/v2/api/#template
  template: `
<figure class="media-post">
  <img :src="image" :alt="title" width="400" height="400" />
  <figcaption>
    <h2 v-if="title">{{title}}</h2>
    <em v-if="user">By {{user}}</em>
  </figcaption>
</figure>
`
});

new Vue({

  // Mount Vue instance to DOM with `el`
  // https://vuejs.org/v2/api/#el
  el: '#app',
  
  // Template string
  // https://vuejs.org/v2/api/#template
  template: `
<div class="media-gallery">
  <media-post 
    v-for="post in posts" 
    :image="post.image" 
    :title="post.title" 
    :user="post.user" />
</div>
`,

  // State with data
  // http://vuejs.org/v2/guide/instance.html#Data-and-Methods
  data() {
    return {
      posts: [
        {
          image: 'https://source.unsplash.com/collection/190727/400x400?1',
          title: "Delicious",
          user: "Fadwa"
        },
        {
          image: 'https://source.unsplash.com/collection/190727/400x400?2',
          title: "Tasty",
          user: "Grant"
        },
        {
          image: 'https://source.unsplash.com/collection/190727/400x400?3',
          title: "Scrumptious",
          user: "Cameron"
        },
        {
          image: 'https://source.unsplash.com/collection/190727/400x400?4',
          title: "Delectible",
          user: "Jenny"
        }
      ]
    }
  },
  

});

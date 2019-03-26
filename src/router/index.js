import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TreadShow from '@/components/ThreadShow'

Vue.use(Router)

// mode history takes about the # in the URL
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/thread/:id',
      name: 'showRoot',
      component: TreadShow,
      // By setting props to true the params are passed to the component as properties.
      props: true
    }
  ],
  mode: 'history'
}
)

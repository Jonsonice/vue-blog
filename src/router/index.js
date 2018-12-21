import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from '@/components/ShowBlogs'
import AddBlog from '@/components/AddBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
		{
			path: '/',
			name: 'AddBlog',
			component: AddBlog
		}
  ]
})

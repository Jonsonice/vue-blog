<template>
  <div id="app">
		<!-- <add-blog></add-blog> -->
		<!-- <ShowBlogs></ShowBlogs> -->
		<blog-header></blog-header>
		<router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import EditBlog from './components/EditBlog'

export default {
  name: 'app',
	components:{
		AddBlog,ShowBlogs,BlogHeader,EditBlog
	}
}
</script>

<style>

</style>

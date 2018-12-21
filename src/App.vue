<template>
  <div id="app">
		<!-- <add-blog></add-blog> -->
		<ShowBlogs></ShowBlogs>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'

export default {
  name: 'app',
	components:{
		AddBlog,ShowBlogs
	}
}
</script>

<style>

</style>

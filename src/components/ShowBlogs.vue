<template>
  <div id="show-blogs" v-theme:column="'wide'">
	  <!-- v-theme="'wide'" 传入的值要加''  或者 [ ] -->
	<h1>文章总览</h1>
	<div v-for="blog in blogs" class="single-blog" :key="blog.id">
		<h2 v-rainbow>{{blog.title}}</h2>
		<article>
			{{blog.body}}
		</article>
	</div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
	  return{
		  blogs:[]
	  }
  },
  created(){
	  // this.$http.get('http://jsonplaceholder.typicode.com/posts')
	  // 请求本地文件,在static文件夹内
	  this.$http.get('./../static/posts.json')
	  .then(function(data){
		  // console.log(data);
		  this.blogs = data.body.slice(0,10);
		  // console.log(this.blogs);
	  })
  }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>

<template>
  <div id="show-blogs" v-theme:column="'wide'">
	  <!-- v-theme="'wide'" 传入的值要加''  或者 [ ] -->
	<h1>文章总览</h1>
	<input type="text" v-model="search" placeholder="搜索" />
	<div v-for="blog in filtereBlogs" class="single-blog" :key="blog.id">
		<h2 v-rainbow>{{blog.id}} . {{blog.title | to-uppercase}}</h2>
		<!-- 添加过滤器  {{blog.title | to-uppercase}}-->
		<article>
			{{blog.body | snippet}}
		</article>
	</div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
	  return{
		  blogs:[],
		  search:""
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
  },
  computed:{
	  filtereBlogs:function(){
		  return this.blogs.filter((blog)=>{
			  return blog.title.match(this.search);
		  })
	  }
  },
  // 全局组件变局部组件

  filters:{
// 	  "to-uppercase":function(value){
// 		  return value.toUpperCase();
// 	  },
	  toUppercase(value){
	  	return value.toUpperCase();
	  },
// 	  "snippet":function(value){
// 	  	return value.slice(0,100) + "...";
// 	  },
	  snippet(value){
	  return value.slice(0,100) + "...";
	  }
// 全局组件变局部组件
  },
// 全局指令变局部指令
  directives:{
	  'rainbow':{
		  bind(el,binding,vnode){
			  el.style.color = "#" + Math.random().toString(16).slice(2,8);
		  }
	  }
  }
//全局指令变局部指令

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

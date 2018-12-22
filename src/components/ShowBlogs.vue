<template>
  <div id="show-blogs" v-theme:column="'wide'">
	  <!-- v-theme="'wide'" 传入的值要加''  或者 [ ] -->
	<h1>文章总览</h1>
	<input type="text" v-model="search" placeholder="搜索" />
	<div v-for="blog in filtereBlogs" class="single-blog" :key="blog.id">
		<router-link v-bind:to="'/blog/'+ blog.id">
			<!-- 绑定拼接的链接 -->
			<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
		</router-link>
		<!-- 添加过滤器  {{blog.title | to-uppercase}}-->
		<article>
			{{blog.content | snippet}}
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
	  this.$http.get('https://my-blog-demo-4d172.firebaseio.com/posts.json')
	  .then(function(data){
		  // console.log(data.json());
		  return data.json();
		  // this.blogs = data.body.slice(0,10);
		  // console.log(this.blogs);
	  })
	  .then(function(data){
		  var blogsArray = [];
		  for (let key in data){
			  // console.log(key);
			  // console.log(data[key]);
			  data[key].id = key;
			  blogsArray.push(data[key]);
		  }
		  // console.log(blogsArray);
		  this.blogs = blogsArray;
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
	border: 1px dotted #42B983;
}
#show-blogs a{
	color: #444444;
	text-decoration: none;
}
input[type="text"]{
	padding: 8px;
	width: 100%;
	box-sizing: border-box;
}
</style>

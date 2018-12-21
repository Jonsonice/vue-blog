<template>
  <div class="add-blog">
	<h2>添加博客</h2>
	<form v-if="!submited">
		<label>标题</label>
		<input type="text" v-model="blog.title" required />
		
		<label>内容</label>
		<textarea v-model="blog.content"></textarea>
		
		<div id="checkbox">
			<label>工作</label>
			<input type="checkbox" value="工作" v-model="blog.categories"/>
			<label>生活</label>
			<input type="checkbox" value="生活" v-model="blog.categories"/>
			<label>娱乐</label>
			<input type="checkbox" value="娱乐" v-model="blog.categories"/>
			<label>重要事宜</label>
			<input type="checkbox" value="重要事宜" v-model="blog.categories"/>
		</div>
		<label>作者</label>
		<select v-model="blog.author">
			<option v-for="author in authors">{{author}}</option>
		</select>
		<button v-on:click.prevent="post">添加博客</button>
	</form>
	<div v-if="submited">
		<h3>您的博客发布成功！</h3>
	</div>
	<div id="preview">
		<h3>文章总览</h3>
		<p>标题：{{blog.title}}</p>
		<p>内容：</p>
		<p>{{blog.content}}</p>
		<p>分类：</p>
		<ul>
			<li v-for="category in blog.categories">{{category}}</li>
		</ul>
		<p>作者：{{blog.author}}</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
		blog: {
			title:"",
			content:"",
			categories:[],
			author:""
		},
		authors:["Dee","Jon","Hao"],
		submited:false
		
	}
  },
  methods:{
	  post:function(){
		  this.$http.post("http://jsonplaceholder.typicode.com/posts",{
			  title:this.blog.title,
			  body:this.blog.content,
			  userId:1
		  })
		  .then(function(data){
			  console.log(data);
			  this.submited = true;
		  });
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

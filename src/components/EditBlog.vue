<template>
  <div id="edit-blog">
	<h2>编辑文章</h2>
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
			<option v-for="author in authors" :key="author.id">{{author}}</option>
		</select>
		<button v-on:click.prevent="post">发布文章</button>
	</form>
	<div v-if="submited">
		<h3>您的文章发布成功！</h3>
	</div>
	<div id="preview">
		<h3>文章总览</h3>
		<p>标题：</p>
		<p class="tshow">{{blog.title}}</p>
		<p>内容：</p>
		<p class="tshow">{{blog.content}}</p>
		<p>分类：</p>
			<ul>
				<li v-for="category in blog.categories" :key="category.id">{{category}}</li>
			</ul>
		<p>作者：</p>
		<p class="tshow">{{blog.author}}</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'edit-blog',
  data () {
    return {
		id: this.$route.params.id,
			blog: {},
			authors:["Dee","Jon","Hao"],
			submited:false
		}
  },
  methods:{
	  fetchData(){
		  // console.log(this.id);
		  this.$http.get('https://my-blog-demo-4d172.firebaseio.com/posts/' + this.id +".json")
		  .then(response=>{
			  // console.log(response.body);
			  this.blog = response.body;
		  })
	  },
	  post:function(){
		  this.$http.put('https://my-blog-demo-4d172.firebaseio.com/posts/' + this.id +".json",this.blog)
		  .then(function(data){
			  // console.log(data);
			  this.submited = true;
		  });
	  }
  },
  created(){
	  this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#edit-blog *{
		box-sizing: border-box;
	}
	#edit-blog{
		margin: 20px auto;
		max-width: 600px;
		padding: 20px;
	}
	label{
		display: block;
		margin: 20px 0 10px;
	}
	input[type="text"],textarea{
		display: block;
		width: 100%;
		padding: 8px;
		border: 1px solid #42B983;
	}
	select{
		width: 20%;
		border: 1px solid #42B983;
	}
	textarea{
		height: 200px;
	}
	#checkbox label{
		display: inline-block;
		margin-top: 5px;
	}
	#checkbox input{
		display: inline-block;
		margin-right: 10px;
	}
	button{
		display: block;
		margin: 20px 0;
		background: #42B983;
		color: #fff;
		border: 0;
		border-radius: 10px;
		padding: 14px;
		font-size: 18px;
		cursor: pointer;
	}
	#preview{
		padding: 10px 20px;
		border: 1px dotted #42B983;
		margin: 30px 0;
	}
	#preview .tshow{
		font-size: 30px;
	}
	h3{
		margin-top: 10px;
	}
</style>
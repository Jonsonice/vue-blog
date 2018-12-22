<template>
	<div id="single-blog">
		<h1 v-rainbow>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类：</p>
		<ul>
			<li v-for="category in blog.categories" :key="category">
				{{category}}
			</li>
		</ul>
		<button @click="deleteSingleBlog()">删除</button>
		<router-link :to="/edit/ + id">编辑</router-link>
	</div>
</template>

<script>
	export default {
		name: "single-blog",
		data() {
			return {
				id: this.$route.params.id,
				blog: {}
			};
		},
		created() {
			this.$http.get('https://my-blog-demo-4d172.firebaseio.com/posts/' + this.id +".json")
				.then(function(data) {
					// console.log(data);
					return data.json();
					// this.blog = data.body;
				})
				.then(function(data){
					this.blog = data;
				})
		},
		methods:{
			deleteSingleBlog(){
				this.$http.delete('https://my-blog-demo-4d172.firebaseio.com/posts/' + this.id +".json")
				.then(response=>{
					this.$router.push({path:'/'})
				})
			}
		},
		directives: {
			'rainbow': {
				bind(el, binding, vnode) {
					el.style.color = "#" + Math.random().toString(16).slice(2, 8);
				}
			}
		}
	}
</script>

<style scoped> 
	#single-blog {
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #EEEEEE;
		border: 1px dotted #aaa;
	}
	button{
		background: #42B983;
		color: #EEEEEE;
		font-size: 18px;
		cursor: pointer;
	}
	a{
		text-decoration: none;
		background: #42B983;
		color: #EEEEEE;
		font-size: 18px;
		padding: 2px 8px;
	}
</style>

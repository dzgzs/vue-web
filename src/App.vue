<!-- 1.0 组件的模板，需要注意有一个根元素 -->
<template>
    <div class="tmpl">
        <mt-header fixed title="固定在顶部"></mt-header>
         <!-- 路由的占位 -->

         <router-view></router-view>


         <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item mui-active"> 
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
            </router-link>
			<router-link to="/message" class="mui-tab-item" >
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
        
    </div>
</template>

<!-- 2.0 定义组件中的相关对象(data,methods) -->
<script>
    // new Vue({})
    export default{
        data(){
            return {
               
            } 
        },
        methods:{
            
        }
    }
</script>

<!-- 3.0  -->
<style>
  .tmpl{
        margin-top:36px;
        margin-bottom: 50px;
    }
</style>
<template>
	<view class="container">
		<view class="intro" @click="setData()">{{token}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:10000
			}
		},
		computed: {
			token() {
				return this.$store.state.token
			},
			userinfo() {
				return this.$store.state.userinfo
			}
		},
		onShow(options) {
			this.setToken()
		},
		methods: {
			setData(){
				console.log(this.data)
				this.data = this.data+1;
				this.setToken()
			},
			setToken(){
				this.$store.commit('setToken', this.data)
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

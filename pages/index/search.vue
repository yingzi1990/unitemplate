<template>
	<view>
		<view class="top-box"></view>
		<view class="search-box">
			<image src="/static/tabbar/left.png" mode="" @click="pageTo('/pages/index/index',3)"></image>
			<view class="input-box">
				<input type="text" v-model="search_text" placeholder="搜索" placeholder-class="placeholder">
				<!-- <image src="/static/tabbar/scan.png" mode=""></image> -->
			</view>
			<!-- #ifndef MP-WEIXIN  -->
			<text @click="search()">搜索</text>
			<!-- #endif -->
		</view>
		<view class="content" v-if = "historyList.length>0">
			<view class="title">
				<text>历史搜索</text>
				<view class="clear-box" @click="clearsearch()">
					<image src="/static/tabbar/del.png" mode=""></image>
					<text>清空</text>
				</view>
			</view>
			<view class="child">
				<view class="item" v-for="(item, index) in historyList" :key="index" @click="search(item)">
					<text>{{item}}</text>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="title">
				<text>热门搜索</text>
			</view>
			<view class="child">
				<view class="item" :class="item.type == 2 ? 'item-a' :''" v-for="(item, index) in hotList" :key="index" @click="search(item.name)">
					<image v-if="item.img" :src="item.img" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="title">
				<text>MOGU 热搜</text>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in list" :key="index" @click="search(item.name)">
					<view class="cover-box">
						<view class="label" :class="'label-'+ index">
							<text>{{index}}</text>
						</view>
						<image :src="item.img" mode=""></image>
					</view>
					<view class="item-info-box">
						<text>{{item.name}}</text>
						<view>
							<image :src="index > 2 ?'/static/tabbar/huo_.png':'/static/tabbar/huo.png'" mode=""></image>
							<text :style="index > 2 ? 'color:#B1B1B1':''">{{item.number}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_text:'',
				historyList: [],
				hotList: [{
					name: '卫衣',
					type: 1
				}, {
					name: '外套',
					type: 1
				}, {
					name: '毛衣',
					type: 1
				}, {
					name: '马甲',
					type: 1
				}, {
					name: '牛仔裤',
					type: 1
				}, {
					name: '套装',
					type: 1
				}, {
					name: '连衣裙',
					type: 1
				}, {
					name: '萌萌君~',
					img: '/static/logo.png',
					type: 2
				}, {
					name: '橙子西西98',
					img: '/static/logo.png',
					type: 2
				}, {
					name: '嘎肥猫儿',
					img: '/static/logo.png',
					type: 2
				}],
				list: [{
					name: '只有衣服知道你的秘密',
					img: '/static/logo.png',
					number: 1202
				}, {
					name: '寇牌时尚，“衣”见钟情',
					img: '/static/logo.png',
					number: 2001
				}, {
					name: '今日穿过的衣服，某一时化为过往',
					img: '/static/logo.png',
					number: 2332
				}, {
					name: '有漂亮衣服才会有故事，别舍不得穿',
					img: '/static/logo.png',
					number: 4412
				}],
			}
		},
		onLoad() {
			uni.getStorage({
				key:'historysearch',
				success: (e) => {
					this.historyList = e.data
				}
			})
		},
		methods: {
			search(name){
				if(name){
					this.search_text = name
				}
				this.search_text = this.search_text.trim()
				if(!this.search_text){
					uni.showToast({title:"搜索词不能为空",icon:'none'});
					return
				}
				if(!this.historyList.includes(this.search_text)){
					this.historyList.push(this.search_text)
				}
				if(this.historyList.length>10){
					this.historyList.shift();
				}
				uni.setStorage({
					key:'historysearch',
					data:this.historyList,
				});
				uni.showToast({title:this.search_text,icon:'none'});
			},
			clearsearch(){
				let that = this
				uni.removeStorage({
					key:'historysearch',
					success() {
						that.historyList = [];
						that.search_text = '';
						uni.showToast({title:"清空历史搜索",icon:'none'});
					}
				});
				console.log(this.historyList)
			},
			pageTo(url,type,data){
				this.$pageTo(url,type,data)
			}
		}
	}
</script>

<style>
	page {
		background: #F6F6F6;
	}

	.top-box {
		height: 44px;
	}

	.search-box {
		display: flex;
		/*  #ifndef MP-WEIXIN  */
		justify-content: space-between;
		/* #endif */
		align-items: center;
		margin: 0 24rpx;
		height: 44px;
	}

	.search-box image {
		width: 50rpx;
		height: 50rpx;
		flex-shrink: 0;
	}


	.search-box>text {
		flex-shrink: 0;
		color: #999;
	}

	.input-box {
		display: flex;
		align-items: center;
		background: #fff;
		height: 72rpx;
		border-radius: 72rpx;
		padding: 0 30rpx;
		/*  #ifndef MP-WEIXIN  */
		width: 100%;
		/* #endif */
		margin: 0 24rpx;
	}

	.input-box input {
		font-size: 30rpx;
		width: 100%;
	}

	.input-box .placeholder {
		color: #c6c6c6;
	}


	.input-box image {
		width: 48rpx;
		height: 48rpx;
	}

	.content {
		margin: 24rpx;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 24rpx 0;
	}

	.title>text {
		font-size: 30rpx;
		font-weight: bold;
	}

	.clear-box {
		color: #868686;
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}

	.clear-box image {
		width: 32rpx;
		height: 32rpx;
		margin-right: 2rpx;
	}

	.child {
		display: flex;
		flex-wrap: wrap;
	}

	.child .item {
		background: #fff;
		font-size: 28rpx;
		height: 62rpx;
		border-radius: 54rpx;
		padding: 0 28rpx;
		color: #525252;
		margin: 0 24rpx 20rpx 0;
		display: flex;
		align-items: center;
	}

	.child .item-a {
		padding: 0 28rpx 0 14rpx;
	}

	.child .item image {
		width: 40rpx;
		height: 40rpx;
		border-radius: 40rpx;
		margin-right: 10rpx;
	}

	.list {
		background: #fff;
		border-radius: 24rpx;
		padding: 15rpx 30rpx;
	}

	.list .item {
		display: flex;
		padding: 15rpx 0;
	}

	.item-info-box {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		color: #333333;

	}

	.item-info-box>text {
		-webkit-text-stroke-width: 0.1px;
		font-size: 30rpx;
	}

	.item-info-box>view {
		color: #FF4466;
		-webkit-text-stroke-width: 0.3px;
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}

	.item-info-box>view image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
	}

	.cover-box {
		position: relative;
	}

	.cover-box .label {
		position: absolute;
		top: 0;
		left: 0;
		width: 44rpx;
		height: 44rpx;
		z-index: 1;
		border-top-left-radius: 14rpx;
		border-bottom-right-radius: 14rpx;
		text-align: center;
		line-height: 44rpx;
		color: #fff;
		font-size: 28rpx;
		-webkit-text-stroke-width: 0.1px;
	}

	.label-0 {
		background: #E05345;
	}

	.label-1 {
		background: #EB9941;
	}

	.label-2 {
		background: #EDC744;
	}

	.label-3 {
		background: #696765;
	}

	.cover-box image {
		width: 120rpx;
		height: 120rpx;
		flex-shrink: 0;
		border-radius: 14rpx;
		margin-right: 30rpx;
	}
</style>
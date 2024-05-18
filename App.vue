<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/iconfont/font.scss';
	/* #ifndef APP-NVUE */
	@import '@/iconfont/customicons.css';
	/* #endif */
	// 设置整个项目的背景色
	page {
		margin-top: var(--status-bar-height);
		background-color: #fff;
	}
	.status {
		width: 100%;
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);
		/*  #endif  */
		background-color: #fff;
		position: fixed;
		top: 0;
		z-index: 999;
	}
</style>

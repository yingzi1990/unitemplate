<template>
    <view>
        <view class="banner">
            <image class="banner-img" :src="banner.cover"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="article-meta">
            <text class="article-author">{{banner.author_name}}</text>
            <text class="article-text">发表于</text>
            <text class="article-time">{{banner.published_at}}</text>
        </view>
        <view class="article-content">
            <rich-text :nodes="htmlString"></rich-text>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <ad v-if="htmlString" unit-id=""></ad>
        <!-- #endif -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'list-triplex-row',
                banner: {
					"id": 121370,
					"post_id": "5310850",
					"title": "\u300c\u730e\u6740\u300d\u745e\u5e78\uff1a\u505a\u7a7a\u8005\u72c2\u8d5a150\u500d",
					"author_name": "Tech\u661f\u7403",
					"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_9504af093fb043078090d544d0f2fbef_img_png",
					"published_at": "2020-04-11 14:39:00"
				},
                htmlString: ""
            }
        },
        onShareAppMessage() {
            return {
                title: this.banner.title,
                path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
            }
        },
        onLoad(event) {
            this.getDetail();
            uni.setNavigationBarTitle({
                title: this.banner.title
            });
        },
        methods: {
            getDetail() {
				uni.request({
				    url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
				    success: (data) => {
				        if (data.statusCode == 200) {
				            this.htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g,
				                "<img style=\"display:none;\"");
				        }
				    },
				    fail: () => {
				        console.log('fail');
				    }
				})
			}
        }
    }
</script>

<style>
    view {
        font-size: 28upx;
        line-height: 1.8;
    }

    .banner {
        height: 360upx;
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    }

    .banner-img {
        width: 100%;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        position: absolute;
        left: 30upx;
        bottom: 30upx;
        width: 90%;
        font-size: 32upx;
        font-weight: 400;
        line-height: 42upx;
        color: white;
        z-index: 11;
    }

    .article-meta {
        padding: 20upx 40upx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: gray;
    }

    .article-text {
        font-size: 26upx;
        line-height: 50upx;
        margin: 0 20upx;
    }

    .article-author,
    .article-time {
        font-size: 30upx;
    }

    .article-content {
        padding: 0 30upx;
        overflow: hidden;
        font-size: 30upx;
        margin-bottom: 30upx;
    }
</style>

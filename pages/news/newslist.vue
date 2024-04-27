<template>
    <view>
        <view class="banner" @click="pageTo('/pages/news/detail')">
            <image class="banner-img" :src="banner.cover"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="uni-list">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
                @click="pageTo('/pages/news/detail')">
                <view class="uni-media-list">
                    <image class="uni-media-list-logo" :src="value.cover"></image>
                    <view class="uni-media-list-body">
                        <view class="uni-media-list-text-top">{{value.title}}</view>
                        <view class="uni-media-list-text-bottom">
                            <text>{{value.author_name}}</text>
                            <text>{{value.published_at}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	import {
		pageTo
	} from "@/utils/page"
    export default {
        data() {
            return {
                banner: {
					"id": 121370,
					"post_id": "5310850",
					"title": "\u300c\u730e\u6740\u300d\u745e\u5e78\uff1a\u505a\u7a7a\u8005\u72c2\u8d5a150\u500d",
					"author_name": "Tech\u661f\u7403",
					"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_9504af093fb043078090d544d0f2fbef_img_png",
					"published_at": "2020-04-11 14:39:00"
				},
                listData: [
							{
								"id": 121375,
								"post_id": "5310910",
								"title": "\u4e3a\u4ec0\u4e48\u81ea\u52a8\u9a7e\u9a76\u8bc9\u8bbc\u4e0d\u65ad\uff1f",
								"author_name": "\u672a\u6765\u6c7d\u8f66\u65e5\u62a5",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_9c3331af67e64994aa97a27fffb1a380_img_png?x-oss-process=image\/resize,m_mfit,w_520,h_300\/crop,w_520,h_300,g_center",
								"published_at": "2020-04-11 17:07:48",
								"content": ""
							},
							{
								"id": 121374,
								"post_id": "5310906",
								"title": "2020\u6570\u5b57\u4e2d\u56fd\u521b\u65b0\u5927\u8d5b-\u6570\u5b57\u653f\u5e9c\u8d5b\u905321\u5f3a\u51fa\u7089\uff0c\u56db\u5927\u8d5b\u9898\u7d27\u8d34\u653f\u5e9c\u6570\u5b57\u5316\u53d1\u5c55\u9700\u6c42",
								"author_name": "36\u6c2a\u6df1\u5ea6\u670d\u52a1",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_16417a06088947debe0450950f8fc813_img_png",
								"published_at": "2020-04-11 16:59:15",
								"content": ""
							},
							{
								"id": 121373,
								"post_id": "5310903",
								"title": "\u5730\u65b9\u653f\u5e9c\u6551\u5e02\u54ea\u5bb6\u5f3a\uff1f\u5e7f\u5dde\u8865\u8d34\u4e0a\u4e07\u5143\uff0c\u5e7f\u6df1\u676d\u65b0\u589e\u6307\u6807\u8d855\u4e07",
								"author_name": "\u672a\u6765\u6c7d\u8f66\u65e5\u62a5",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_6905947498bc4ec0af228afed409f771_img_png?x-oss-process=image\/resize,m_mfit,w_520,h_300\/crop,w_520,h_300,g_center",
								"published_at": "2020-04-11 16:09:09",
								"content": ""
							},
							{
								"id": 121372,
								"post_id": "5310813",
								"title": "\u6551\u547d\u547c\u5438\u673a\u7f3a\u53e3\u96be\u8865\uff01\u4e00\u6587\u6252\u5f00\u4f9b\u5e94\u94fe\u771f\u76f8",
								"author_name": "\u667a\u4e1c\u897f",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_86bbf8245f754be79f3386a82b385093_img_000",
								"published_at": "2020-04-11 15:40:02",
								"content": ""
							},
							{
								"id": 121371,
								"post_id": "5309573",
								"title": "\u6bcf\u6708\u8282\u770132%\u7684\u5f00\u652f\uff0c\u6211\u662f\u600e\u4e48\u505a\u5230\u7684\uff1f",
								"author_name": "\u795e\u8bd1\u5c40",
								"cover": "https:\/\/img.36krcdn.com\/20200408\/v2_c67c3edfe4b5446992b32fad93a44a75_img_png",
								"published_at": "2020-04-11 14:48:02",
								"content": ""
							},
							{
								"id": 121369,
								"post_id": "5310859",
								"title": "\u74dc\u5b50\u575a\u679c\u53cc\u589e\u957f\uff0c\u4f46\u6d3d\u6d3d\u5e76\u4e0d\u80fd\u9ad8\u6795\u65e0\u5fe7",
								"author_name": "\u8d44\u672c\u4fa6\u63a2",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_2204c6132432403184e43df22485545e_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
								"published_at": "2020-04-11 14:23:00",
								"content": ""
							},
							{
								"id": 121367,
								"post_id": "5309137",
								"title": "\u514b\u670d\u5371\u673a\u548c\u538b\u529b\uff0c\u7cbe\u795e\u529b\u91cf\u5f3a\u5927\u7684\u4eba\u90fd\u6709\u8fd95\u4e2a\u4e60\u60ef",
								"author_name": "\u795e\u8bd1\u5c40",
								"cover": "https:\/\/img.36krcdn.com\/20200406\/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png",
								"published_at": "2020-04-11 13:47:01",
								"content": ""
							},
							{
								"id": 121365,
								"post_id": "5310864",
								"title": "\u795e\u5dde\u79df\u8f66\u627e\u7239\u8bb0",
								"author_name": "PingWest\u54c1\u73a9",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_f497b1c414d5489791569b3ea99df33d_img_000",
								"published_at": "2020-04-11 13:39:00",
								"content": ""
							},
							{
								"id": 121366,
								"post_id": "5310884",
								"title": "\u200b\u6296\u97f3\u5feb\u624b\u660e\u661f\u56fe\u9274\uff1a\u54ea\u4e2a\u5e73\u53f0\u66f4\u9002\u5408\u660e\u661f\u201c\u518d\u5c31\u4e1a\u201d\uff1f",
								"author_name": "\u660e\u661f\u516b\u722a\u5a31",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_da4c26244cbc494c8e0e5918518e866c_img_png",
								"published_at": "2020-04-11 13:38:00",
								"content": ""
							},
							{
								"id": 121364,
								"post_id": "5309105",
								"title": "\u52a8\u8361\u7684\u5e02\u573a\u4e2d\uff0c\u4f60\u9700\u8981\u7262\u8bb0\u5df4\u83f2\u7279\u7684\u8fd93\u4e2a\u539f\u5219",
								"author_name": "\u795e\u8bd1\u5c40",
								"cover": "https:\/\/img.36krcdn.com\/20200406\/v2_232e9248d5c74ff989db57a0b6713abe_img_png",
								"published_at": "2020-04-11 12:45:02",
								"content": ""
							},
							{
								"id": 121362,
								"post_id": "5310858",
								"title": "\u8fde\u4e8f\u516d\u5e74\u3001\u80a1\u4ef7\u8dcc\u78341\u7f8e\u5143\uff0c\u66fe\u7ecf\u7684\u660e\u661f\u516c\u53f8\u9014\u725b\u600e\u4e48\u4e86\uff1f",
								"author_name": "\u8d44\u672c\u4fa6\u63a2",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_61c1766736df49a0b2d0213624c0ebd2_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
								"published_at": "2020-04-11 12:37:11",
								"content": ""
							},
							{
								"id": 121363,
								"post_id": "5310857",
								"title": "\u72ec\u5bb6 | \u5feb\u624b\u7248\u300c\u591a\u95ea\u300d\u4e0a\u7ebf:\u300c\u4e00\u751c\u9762\u804a\u300d\u5e03\u5c40\u89c6\u9891\u793e\u4ea4",
								"author_name": "Tech\u661f\u7403",
								"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_b92317dfc59948cea0f3c69a0357e519_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
								"published_at": "2020-04-11 12:36:58",
								"content": ""
							},
							{
								"id": 121361,
								"post_id": "5308879",
								"title": "2020\u5e74\u5df2\u7ecf\u8fc7\u53bb\u4e86\u56db\u5206\u4e4b\u4e00\uff0c\u4f46\u6539\u53d8\u81ea\u5df1\u4e3a\u65f6\u4e0d\u665a",
								"author_name": "\u795e\u8bd1\u5c40",
								"cover": "https:\/\/img.36krcdn.com\/20200404\/v2_d6613223fb15414897a0ba3449d00afd_img_png",
								"published_at": "2020-04-11 11:44:00",
								"content": ""
							},
							{
								"id": 121360,
								"post_id": "5310797",
								"title": "2020\uff0c\u5e02\u573a\u90e8\u6c42\u751f\u6307\u5357",
								"author_name": "\u6c88\u5e05\u6ce2",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_c5997a3640f54c2c880cff0906f6896c_img_000",
								"published_at": "2020-04-11 11:31:00",
								"content": ""
							},
							{
								"id": 121359,
								"post_id": "5308279",
								"title": "\u5b9a\u4f4d\u65b0\u5a92\u4f53\u6574\u5408\u8425\u9500\u670d\u52a1\u5546\uff0c\u300c\u901a\u660e\u4f20\u5a92\u300d\u7528\u201c\u5c0fV\u77e9\u9635\u201d\u6253\u51fa\u5dee\u5f02\u5316",
								"author_name": "\u9648\u6dd1\u96c5",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_224a699a06504292804e4bdf70ca87bb_img_png",
								"published_at": "2020-04-11 11:09:58",
								"content": ""
							},
							{
								"id": 121358,
								"post_id": "5310804",
								"title": "BAT\u7684\u76f4\u64ad\u7535\u5546\u65b0\u6218\u4e8b",
								"author_name": "\u6765\u5496\u667a\u5e93",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_747fc8a18fde4da4b1ba1080d8e6aa04_img_000",
								"published_at": "2020-04-11 11:06:00",
								"content": ""
							},
							{
								"id": 121357,
								"post_id": "5310786",
								"title": "\u4f30\u503c50\u4ebf\u7f8e\u5143\uff0c\u201c\u79cd\u8349\u201d\u793e\u533a\u5934\u724c\uff0c\u5c0f\u7ea2\u4e66\u5982\u4f55\u8d70\u51fa\u5546\u4e1a\u5316\u8ff7\u9014\uff1f",
								"author_name": "\u521b\u4e1a\u6700\u524d\u7ebf",
								"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_18c3a78cf8be42ccb45e4daba0c87c13_img_png",
								"published_at": "2020-04-11 10:41:00",
								"content": ""
							},
						],
            }
        },
        onLoad() {
            
        },
        methods: {
            getList(){},
			pageTo(url){
				pageTo(url)
			}
        },
    }
</script>

<style>
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

    .uni-list {
        background-color: #FFFFFF;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .uni-list:after {
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list::before {
        position: absolute;
        z-index: 10;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list-cell {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .uni-list-cell-hover {
        background-color: #eee;
    }

    .uni-list-cell::after {
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 0;
        left: 30upx;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list .uni-list-cell:last-child::after {
        height: 0upx;
    }

    /* 图文列表 */
    .uni-media-list {
        padding: 22upx 30upx;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        flex-direction: row;
    }

    .uni-navigate-right.uni-media-list {
        padding-right: 74upx;
    }

    .uni-pull-right {
        flex-direction: row-reverse;
    }

    .uni-pull-right>.uni-media-list-logo {
        margin-right: 0upx;
        margin-left: 20upx;
    }

    .uni-media-list-logo image {
        height: 100%;
        width: 100%;
    }


    .uni-media-list-text-bottom {
        width: 100%;
        line-height: 30upx;
        font-size: 26upx;
        color: #8f8f94;
    }

    .uni-media-list-logo {
        width: 180upx;
        height: 140upx;
        margin-right: 20upx;
    }

    .uni-media-list-body {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        overflow: hidden;
        height: auto;
    }

    .uni-media-list-text-top {
        width: 100%;
        line-height: 36upx;
        font-size: 30upx;
        height: 74upx;
        font-size: 28upx;
        overflow: hidden;
    }

    .uni-media-list-text-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>

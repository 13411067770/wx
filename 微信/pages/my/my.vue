<template>
	<view style="background-color: #f3f3f3;">
		<!-- <div class="item" v-for="(item, index) in list" @click="goto(item.url)">
			<div style="display: flex;width: 100%;text-align: center;">
			<image style="width: 100rpx;height: 100rpx;;" :src="item.img"></image>
			<span style="padding: 15rpx;">{{item.name}}</span>	
				</div>
			<span style="width: 40rpx;">></span>  
		</div> -->
		<div class="ren">
			<image src="../../static/image/logo4.jpg" class="icon"></image>
			<div class="zi">
				lizj
				<p style="color: #808080;font-size: 12px">微信号:lizj01231</p>
			</div>
		</div>
		<div class="zh01">
			<uni-list-item  :to="item.url" v-for="(item, index) in chi" :title="item.name" showArrow :thumb="item.img"/>
		</div>
			<uni-list-item  :to="item.url" v-for="(item, index) in list" :title="item.name" showArrow :thumb="item.img"/>
		<div class="zh02">
			<uni-list-item  :to="item.url" v-for="(item, index) in shi" :title="item.name" showArrow :thumb="item.img"/>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chi:[{
					id: "1", name: '支付',
								img: "/static/image/zhifu.png",
								url: ""
				}],
				shi:[{
							id: "6", name: '添加好友',
							img: "/static/image/添加好友.png",
							url: "/pages/address/add"
				},{
							id: "7", name: '建议反馈',
							img: "/static/image/意见反馈.png",
							url: "/pages/retroaction/retroaction"
				},{
							id: "8", name: '帮助中心',
							img: "/static/image/帮助中心.png",
							url: ""
				},{
							id: "9", name: '设置',
							img: "/static/image/设置.png",
							url: ""
				}],
				list: [{
							id: "2", name: '收藏',
							img: "/static/image/shoucan.png",
							url: ""
						},
						{
							id: "3", name: '相册',
							img: "/static/image/相册.png",
							url: ""
						},
						{
							id: "4", name: '卡包',
							img: "/static/image/卡包.png",
							url: ""
						},
						 {
						 	id: "5", name: '表情',
						 	img: "/static/image/表情.png",
						 	url: ""
						 }]
			}
		},
		methods: {
			goto(url) {
				console.log(url)
					uni.navigateTo({
						url:url
					})
            }
        }
	}
</script>

<style>
/* .item{
	display: flex;
	justify-content: space-between;
	width: auto;
	text-align: center;
	line-height: 40px;
	background-color: #ffffff;
	padding: 20rpx;
	margin: 5rpx 0;
} */
.ren{
	display: flex;
}
.zi{
	font-size: 20px;
	padding-top: 35upx;
}
.icon {
		padding: 18px;
		margin-bottom: 10upx;
		margin-top: 10rpx;
		width: 100upx;
		height: 100upx;
		border-radius: 12%;
		display: flex;
	}
.zh01{
	margin-bottom: 12rpx;
}
.zh02{
	margin-top: 12rpx;
}
</style>

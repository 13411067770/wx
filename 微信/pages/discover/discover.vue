<template>
	<view style="background-color: #f3f3f3;">
		<div class="zh01">
			<uni-list-item  :to="item.url" v-for="(item, index) in list1" :title="item.name" showArrow :thumb="item.img"/>
		</div>
		<div class="zh02">
			<uni-list-item  :to="item.url" v-for="(item, index) in list2" :title="item.name" showArrow :thumb="item.img"/>
		</div>
		<div class="zh03">
			<uni-list-item  :to="item.url" v-for="(item, index) in list3" :title="item.name" showArrow :thumb="item.img"/>
		</div>
		<div class="zh04">
			<uni-list-item  :to="item.url" v-for="(item, index) in list4" :title="item.name" showArrow :thumb="item.img"/>
		</div>
		<div class="zh05">
			<uni-list-item  :to="item.url" v-for="(item, index) in list5" :title="item.name" showArrow :thumb="item.img"/>
		</div>
			<uni-list-item  :to="item.url" v-for="(item, index) in list" :title="item.name" showArrow :thumb="item.img"/>
		<div class="zh06">
			<uni-list-item  :to="item.url" v-for="(item, index) in list6" :title="item.name" showArrow :thumb="item.img"/>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1:[{
					id: "1", name: '朋友圈',
								img: "/static/image/pengyouquan.png",
								url: "/pages/share/share"
				}],
				list2:[{
							id: "2", name: '视频号',
							img: "/static/image/视频号.png",
							url: ""
						}],
				list3:[{
							id: "3", name: '扫一扫',
							img: "/static/image/扫一扫.png",
							url: ""
						},
						{
							id: "4", name: '摇一摇',
							img: "/static/image/摇一摇.png",
							url: ""
						}],
				list4:[{
						 	id: "5", name: '看一看',
						 	img: "/static/image/看一看.png",
						 	url: ""
						},
						{
							id: "6", name: '搜一搜',
							img: "/static/image/搜一搜.png",
							url: ""
						}],
				list5:[{
							id: "6", name: '附近的人',
							img: "/static/image/附近的人.png",
							url: ""
						}],
				list: [
						{
							id: "6", name: '购物',
							img: "/static/image/购物.png",
							url: ""
						},
						{
							id: "6", name: '游戏',
							img: "/static/image/游戏.png",
							url: ""
						}],
				list6:[{
							id: "6", name: '小程序',
							img: "/static/image/小程序.png",
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
.zh01{
	margin-bottom: 15rpx;
}
.zh02{
	margin-bottom: 15rpx;
}
.zh03{
	margin-bottom: 15rpx;
}
.zh04{
	margin-bottom: 15rpx;
}
.zh05{
	margin-bottom: 15rpx;
}
.zh06{
	margin-top: 15rpx;
	margin-bottom: 15rpx;
}
</style>

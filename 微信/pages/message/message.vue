<template>
	<view>
		<msg @click="goto(item.url)" @ev="evFunc" :datas="datas" :index="true" name="employeeName"></msg>
		<!-- <uni-list>
			<uni-list-chat title="文件传输助手" :avatar-list="avatarList" note="[图片]" time="2020-02-02 20:30" badge-positon="left" badge-text="dot">
			    <view class="chat-custom-right">
			        <text class="chat-custom-text">刚刚</text>

			        <uni-icons type="star-filled" color="#999" size="18"></uni-icons>
					
			    </view>
			</uni-list-chat> -->
		<uni-list-chat :to="item.url" v-for="(item, index) in chi" title="lizj" avatar="/static/image/logo4.jpg"
			note="666" time="凌晨0:05" badge-text=""></uni-list-chat>
		<uni-list-chat title="王冰冰" avatar="/static/image/bing.jpg" note="晚安[爱心]" time="凌晨0:02" badge-text="2">
		</uni-list-chat>
		<uni-list-chat title="热巴" avatar="/static/image/reba.jpg" note="晚安[爱心]" time="凌晨0:02" badge-text="2">
		</uni-list-chat>
		<uni-list-chat title="后宫" :avatar-list="avatarList" note="晚安" time="凌晨0:05" badge-text=""></uni-list-chat>
		<uni-list-chat title="彭于晏" avatar="/static/image/彭于晏.jpeg" note="好" time="晚上10:00" badge-text="1">
		</uni-list-chat>
		<uni-list-chat title="C罗" avatar="/static/image/C罗.jpeg" note="明天出来踢球 叫上彭于晏 梅西也在" time="晚上10:00" badge-text="2">
		</uni-list-chat>
		</uni-list>
		</uni-list>
	</view>
</template>

<script>
	import msg from '@/components/yt-txl/index.vue';
	export default {
		components: {
			msg
		},
		data() {
			let datas = []
			return {
				datas: [],
				chi: [{
					url: "/pages/liao/liao"
				}],
				avatarList: [{
						url: '/static/image/logo4.jpg'
					},
					{
						url: '/static/image/bing.jpg'
					},
					{
						url: '/static/image/reba.jpg'
					}
				]
			}
		},
		methods: {
			evFunc(data) {
				console.log(data)
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style>
	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}

	.tou {
		width: 100upx;
		height: 100upx;
		border-radius: 12%;
		margin-right: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		color: #fff;
	}
</style>

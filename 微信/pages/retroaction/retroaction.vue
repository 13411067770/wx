<template>
	<view>
		<form>
			<view class="top-input">
				<textarea cols="70" type="text" v-model="text.advice" placeholder="请输入你的建议,我们将及时采纳并处理"/>
			</view>
			<view class="header-input">
				<textarea type="text" v-model="text.contact"  placeholder='[选填]联系方式(QQ/微信/手机号)'/>
			</view>
			<button class="footer-button" form-type='reset' @click="submite">提交反馈</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:{
					advice:'',
					contact:''
				}
			}
		},
		methods: {
			
			submite(){
				uni.request({
					url:'/api/retroaction',
					method:'POST',
					data:this.text,
					success:(res) => {
						uni.showToast({
							title:'提交成功',
							duration:2000
						});
						this.text = res.data
					}
				});
			}
		}
	}
</script>

<style>
	body{
		background-color: #FFFFFF;
	}
	.top-input{
		color: #9eadb9;
		border: 1rpx solid #4b66f5;
		border-radius: 12rpx;
		height: 400rpx;
		background-color: #f9f9f9;
		margin: 35rpx;
		padding: 42rpx;
	}
	.header-input{
		margin: 0 35rpx 50rpx;
		border: 1rpx solid #e8e8e8;
		text-align: center;
		height: 70rpx;
		background-color: #f9f9f9;
		border-radius: 12rpx;
		padding-top: 35rpx;
	}
	.footer-button{
		background-color: #4e68fe;
		height: 95rpx;
		color: #FFFFFF;
		font-size: 36rpx;
		margin: 35rpx;
		border: none;
	}
</style>

<template>
	<view>
		<input class="uni-input" v-model="form.name" focus placeholder="姓名" />
		<input class="uni-input" v-model="form.companyName" focus placeholder="公司名" />
		<image v-if="form.img" :src="form.img" mode=""></image>
		<button type="default" @click="upload">上传图片</button>
		<button type="default" @click="submite">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					name:'',
					companyName:'',
					img: ''
				}
			}
		},
		methods: {
			submite(){
				console.log(this.form)
				uni.request({
				    url: '/api/login',
				    method:'post',
					data:this.form,
				    success: (res) => {
						uni.switchTab({
						    url: '/pages/address/address',
						});
						// this.datas = res.data
				    }
				});
			},
			upload() {
				uni.chooseImage({
						success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths;
							const uploadTask = uni.uploadFile({
								url: '/api/uploadfile', 
								filePath: tempFilePaths[0],
								name: 'file',
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									console.log(uploadFileRes.data);
									this.form.img = uploadFileRes.data
								}
							});
						}
					})
				}
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<txl @ev="evFunc" :datas="datas"></txl>
	</view>
</template>

<script>
	import txl from '@/components/yt-txl/index.vue'; 
	export default {
		components:{txl},
		data() {
			let datas = []
			return {
				datas:datas
			}
		},
		methods: {
			evFunc(data){
				console.log(data)
			}
		},
		mounted() {
			
		},
		onShow(){
			uni.request({
			    url: '/api/holle', 
			    method:'get',
			    success: (res) => {
					this.datas = res.data
			    }
			});
		}
	}
</script>

<style>

</style>

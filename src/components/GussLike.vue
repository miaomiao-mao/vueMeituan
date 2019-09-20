<template>
	<div class="guess-like">
		<dl class="list">
			<dd>
				<dl class="list">
					<dt>猜你喜欢</dt>
					<dd v-for="(item,index) in arrs">
						<a href="##" class="react ">
							<div class="dealcard">
								<div class="dealcard-img imgbox">
									<img :src="'static/img/' + item.src" />
								</div>
								<div class="dealcard-block-right">
									<div class="dealcard-brand single-line">{{item.title}}</div>
									<div class="title text-block">
										{{item.add}}
									</div>
									<div class="price">
										<span class="strong">{{item.new}}</span>
                    <span class="strong-color"></span> <del>{{item.old}}元</del>
										<span class="line-right"> {{item.sale}} </span>
									</div>
								</div>
							</div>
						</a>
					</dd>
				</dl>
			</dd>
		</dl>
		<div class="db">
			<a class="react" href="##">
				<div class="more">
					查看全部团购<i
						class="fa fa-angle-double-right fa-2x"></i>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
  export default{
    data(){
      return {
        "arrs" : []
      }
    },
    mounted(){  // 自动调用
      let _this = this;
      this.$http.get("../../static/data/gusslike.json").then(function (response) {
        // console.log(response);
        _this.arrs = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style scoped="">
	@import url("../assets/css/merge.css");
	.guess-like{
		background-color: #fff;
	}
</style>

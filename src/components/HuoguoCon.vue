<template>
  <div class="box">
    <mt-header title="商家行情">
      <router-link to="" tag="a" slot="left">
        <mt-button icon="back" @click="goback">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">导航</mt-button>
    </mt-header>
    <Guang></Guang>
    <div class="banner">
      <h2>这是第{{parseInt(this.$route.params.id)+1}}个图片</h2>
      <img :src="picImg" alt="" />
      <div class="poi-album-tip">
        <a href="/i/poi/album/182029596" class="react">
          <i class="fa fa-picture-o fa-2x"></i>
        </a>
      </div>
    </div>
    <div class="poiinfo-wrap">
      <div class="name">
        <p class="poi-brand">{{title}}</p>
        <div class="poi-score">
          <span class="stars">
            <i class="icon-star-orange-lg"></i>
            <i class="icon-star-orange-lg"></i>
            <i class="icon-star-orange-lg"></i>
            <i class="icon-star-orange-lg"></i>
            <i class="icon-star-orange-lg"></i>
            <em class="star-text">4.9</em>
          </span>
          <span class="avg-price">人均：¥ {{price}}</span>
        </div>
      </div>
      <div class="addr">
        <a href="" class="react">
          <i class="icon-sp icon-location"></i>
          <div class="poi-address">
            未央区阿房二路正义厨具市场西口（润家购物广场二楼）
          </div>
        </a>
        <p class="phone">
          <a href="javascript:;" class="poi-phone"><i class="icon-tel"></i></a>
        </p>
      </div>
    </div>
    <div class="block">
      <p class="block-title">推荐菜</p>
      <div class="recommond-wrapper">
        <span class="recommond-item">纸包鱼</span>
        <span class="recommond-item">鸳鸯锅底</span>
        <span class="recommond-item">精品千层肚</span>
        <span class="recommond-item">草原肥羊卷</span>
        <span class="recommond-item">麻辣进口牛肉</span>
        <span class="recommond-item">精品五花肉</span>
        <span class="recommond-item">烤鸡翅</span>
        <span class="recommond-item">油麦菜</span>
        <span class="recommond-item">竹笋</span>
        <span class="recommond-item">土豆片</span>
        <span class="recommond-item">藕片</span>
        <span class="recommond-item">草鱼</span>
        <span class="recommond-item">料碗</span>
        <span class="recommond-item">金针菇</span>
        <span class="recommond-item">红油锅</span>
        <span class="recommond-item">冬瓜</span>
        <span class="recommond-item">蟹肉棒</span>
      </div>
    </div>
    <div class="all-comment">
      <a href="" class="block-title">
        <span class="stars" data-reactid="85">
          <i class="icon icon-star-orange-lg"></i>
          <i class="icon icon-star-orange-lg"></i>
          <i class="icon icon-star-orange-lg"></i>
          <i class="icon icon-star-orange-lg"></i>
          <i class="icon icon-star-orange-lg"></i>
          <em class="star-text">4.9</em>
        </span>
        <span class="right" style="font-size: .9rem;">32条评价</span>
      </a>
      <div class="cloud-tag">
        <a href="" class="tag-hot">
          <span class="tag-title">
            味道赞
            <span class="tag-num">14</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            服务热情
            <span class="tag-num">11</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            回头客
            <span class="tag-num">10</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            性价比高
            <span class="tag-num">10</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            环境优雅
            <span class="tag-num">10</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            上菜快
            <span class="tag-num">7</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            价格实惠
            <span class="tag-num">6</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            菜品健康
            <span class="tag-num">5</span>
          </span>
        </a>
        <a href="" class="tag-hot">
          <span class="tag-title">
            干净卫生
            <span class="tag-num">5</span>
          </span>
        </a>
      </div>
      <!-- 用户反馈 -->
      <div class="feedback-card">
        <div class="user-wrapper">
          <div class="user-pic">
            <div class="imgbox"><img src="../../static/img/tou.jpg" /></div>
          </div>
          <div class="user-info-text">
            <div class="user-info"><span class="user-name">南方以南找不到北</span></div>
            <div class="score">
              <span class="stars">
                <i class="icon icon-star-orange-lg"></i>
                <i class="icon icon-star-orange-lg"></i>
                <i class="icon icon-star-orange-lg" style="width: 0.28rem; height: 0.28rem;"></i>
                <i class="icon icon-star-orange-lg"></i>
                <i class="icon icon-star-orange-lg"></i>
              </span>
              <span class="time">2019-02-29</span>
            </div>
          </div>
          <div class="serious-evaluation">
            <img src="../../static/img/pingjia.png" alt="认真评价" />
          </div>
        </div>
        <div class="comment">
          <div class="toggle-content">
            <a href="javascript:;" class="comment-container">
              家附近终于开了一家装修不错的火锅店拉,第一次去吃的火锅,味道不错
              然后发现还有烤鱼第二次就来吃烤鱼了,蒜香味味道杠杠的团购很优惠
              两人餐两个人只把鱼吃
              <i class="text-icon icon-ell"></i>
              <span class="feedback-more">
                完了 才几乎没吃 量很多 服务还可以 目前一切满意 还会去光顾的
                #精品五花肉# #麻辣进口牛肉# #红油锅# #草鱼# #料碗# #竹笋#
              </span>
              <i class="text-icon icon-toggle-arrow"></i>
            </a>
          </div>
        </div>
        <div class="pics">
          <span>
            <div class="imgbox"><img src="../../static/img/feedback01.jpg" /></div>
          </span>
          <span>
            <div class="imgbox"><img src="../../static/img/feedback02.jpg" /></div>
          </span>
          <span>
            <div class="imgbox"><img src="../../static/img/feedback03.jpg" /></div>
          </span>
          <div class="img-preview"></div>
          <div class="block-reply">
            <div class="block-reply-head">商家回复：<weak class="reply-time"></weak>
            </div>
            <div class="reply-container">感谢您的光临及对我们工作的肯定，我们同时也会在今后的工作中更加努力，争取做的更好令每位就餐客人高兴而来，满意而归！天气变化无常，出去做好防晒措施，期待您的再次审阅，祝您工作顺利，生活愉快！</div>
          </div>
        </div>
      </div>
      <div class="feedback-card">
        <div class="user-wrapper">
          <div class="user-pic">
            <div class="imgbox" style="height: 0.74rem; width: 0.74rem;"><img src="https://img.meituan.net/avatar/20b7cb480998c14f23f135cfc18fc1a7163018.jpg@74w_74h_1e_1c"
                alt=""></div>
          </div>
          <div class="user-info-text">
            <div class="user-info"><span class="user-name">梦梦睡了</span></div>
            <div class="score"><span class="stars"><i class="icon icon-star-orange-lg" style="width: 0.28rem; height: 0.28rem;"></i><i
                  class="icon icon-star-orange-lg"></i><i class="icon icon-star-orange-lg"
                  style="width: 0.28rem; height: 0.28rem;"></i>
                <i class="icon icon-star-grey-lg"></i><i class="icon icon-star-grey-lg"
                  style="width: 0.28rem; height: 0.28rem;"></i>
                </span> <span class="time">2019-06-15
              </span></div>
          </div>
          <div class="serious-evaluation"><img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/serious-evaluation.png@e654d77"
              alt="认真评价"></div>
        </div>
        <div class="comment">
          <div class="toggle-content"><a href="javascript:;" class="comment-container">
              带孩子在附近上课 饿了 搜了一下 价位低 又近 到店后发现人很多 我们吃完还在不断的来人 烧烤和火锅 冰激凌 吃的喝的种类很多 总体来说可以了 女儿喜欢吃冰激凌
              <i class="text-icon icon-ell"></i><span class="feedback-more"> 老公喝的啤酒 有热饮和果汁 冷菜 热菜肉实现切 刚巧 我的朋友在明光路店吃😄 还会再来吃的 毕竟离家近又便宜 #烤鱼# #羊肉卷# #口水鸡# #啤酒# #韩式烤肉# #小黄鱼# #水果丰富#</span><i class="text-icon icon-toggle-arrow"></i></a></div>
        </div>
        <div class="pics"><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/0c21f9a6e70177c8e896dca8d15e0bd1188207.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/534254ce3090a184080c0e0358d32799234708.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/9df0c259f1caed4b89f2faca5a3d00ce71657.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/404e63fdbf3949fde61f0c6336bf5bbb204600.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/bd69ee547ebf5e695fb49488f59c24f4172913.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span><span>
            <div class="imgbox"><img src="//p0.meituan.net/shaitu/0469d34ec07dfc1357f0e34a12d6551d191000.jpg@110w_110h_1e_1c"
                alt=""></div>
          </span>
          <div class="img-preview"></div>
        </div>
        <div class="poi-name"><a href="/i/poi/4148062" class="">红透天自助涮烤（互助路店）</a></div>
        <div class="block-reply">
          <div class="block-reply-head">
            商家回复：
            <weak class="reply-time"></weak>
          </div>
          <div class="reply-container">感谢亲的光临与长期的支持，我们会继续努力，争取做的更好，近期天气干燥，气候变化无常，多喝开水，祝您身体健康，生活愉快，期待您的再次光临！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Guang from './Guang.vue';
  export default {
    data() {
      return {
        picImg: "",
        title: "",
        price: ""
      }
    },
    components: {
      Guang: Guang
    },
    // 从上个页面跳转过来的，请求数据
    mounted() {
      let id = parseInt(this.$route.params.id);
      this.$http.get("/static/data/con" + id + ".json").then((res) => {
        this.picImg = res.data.src;
        this.title = res.data.title;
        this.price = res.data.price;
      })
    },
    methods: {
      goback: function() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style scoped="">
  @import url('../assets/css/huoguoCon.css');
</style>

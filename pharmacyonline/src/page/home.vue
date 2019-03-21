<template>
  <div>
    <!-- //搜索框 -->
    <van-search placeholder="请输入搜索关键词"  />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#ff7500" class="banner" >
       <van-swipe-item class="banner" v-for="goods in goodslist" :key="goods.id"> <img :src="goods.image_url" alt=""> </van-swipe-item>
      
    </van-swipe>
    <!-- 导航栏 -->
    <div class="navs">
      <ul class="new-list clear">
        <li>
          <a href="">
            <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/yinyang.png" alt="">
          </a>
          <a href="">营养保健</a>
        </li>
        <li>
           <a href="">
            <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/yinyang.png" alt="">
          </a>
          <a href="">营养保健</a>
        </li>
        <li>
           <a href="">
            <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/yinyang.png" alt="">
          </a>
          <a href="">营养保健</a>
        </li>
        <li>
           <a href="">
            <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/yinyang.png" alt="">
          </a>
          <a href="">营养保健</a>
        </li>
        <li> <a href="">
            <img src="https://po-assets.azoyacdn.com/media/wysiwyg//mb_index_category_img_new/yinyang.png" alt="">
          </a>
          <a href="">营养保健</a></li>
      </ul>
       <ul class="new-list clear">
        <li>
          <a href="">
            <img src="" alt="">
          </a>
          <a href=""></a>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- 每周特惠 -->
    <div class="discount-container">
       <div class="discount">
         <span class="hengxian">一 </span>尖货必入
         <span class="hengxian"> 一</span>
       </div>
       <van-swipe   indicator-color="#ff7500">
          <van-swipe-item>
             <div class="discount-item ajax-product-item left" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 奶蓟草本精华护肝片 120片" title="Swisse 奶蓟草本精华护肝片 120片">
                    <div class="base-font">
                        Swisse 奶蓟草本精华护肝片 120片                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU$24.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$39.99</span>
                    </div>
                </a>
              </div>
              <div class="discount-item ajax-product-item right" data-product-symbol="AU$" data-product-id="112266" data-product-ajax-item="112266">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">8%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1112266.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/0/901096/bioisland-milk-calcium-cap-x-90.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/9/0/901096/bioisland-milk-calcium-cap-x-90.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bio Island 生物岛 液体乳钙软胶囊 90粒" title="Bio Island 生物岛 液体乳钙软胶囊 90粒">
                    <div class="base-font">
                        Bio Island 生物岛 液体乳钙软胶囊 90粒                </div>
                    <div class="base-color">
                        <span class="price-now" data-ajax-item="final_price">AU$23.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$25.95</span>
                    </div>
                  </a>
              </div>  
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
    <div class="special">
      <span class="hengxian">一 </span>主题活动推荐
      <span class="hengxian"> 一</span>
    </div>
    <a class="new-banner" href="http://cn.pharmacyonline.com.au/top100.html?is_in_stock=1">
        <img src="https://po-assets.azoyacdn.com/media/wysiwyg/PCbanner/20190124-750-350.jpg" alt="">
    </a>
    <div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode">
       <div class="clear choosen-container swiper-wrapper">
          <div class="swiper-slide special-list ajax-product-item swiper-slide-active hei" data-product-symbol="AU$" data-product-id="65902" data-product-ajax-item="65902" >
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售  罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065902.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/o/1/O1CN011t8YDqgfGqlNDpH__2353295857.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/o/1/O1CN011t8YDqgfGqlNDpH__2353295857.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Unichi 深海四十寻 海藻精华修护颈霜 60ml" title="Unichi 深海四十寻 海藻精华修护颈霜 60ml">
                <div class="base-font">
                    Unichi 深海四十寻 海藻精华修护颈...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$36.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$45.95</span>
                </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item swiper-slide-next hei" data-product-symbol="AU$" data-product-id="102476" data-product-ajax-item="102476" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">9%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102476.html">
              <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/6/7/677477/metamucil-smooth-texture-orange-flavour-425g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/6/7/677477/metamucil-smooth-texture-orange-flavour-425g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Metamucil 美达施 天然橙味膳食纤维粉 425g（通便降胆固醇）" title="Metamucil 美达施 天然橙味膳食纤维粉 425g（通便降胆固醇）">
              <div class="base-font">
                      Metamucil 美达施 天然橙味膳食...                </div>
              <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$19.95</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$22.00</span>
              </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="115890" data-product-ajax-item="115890" >
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115890.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/7/771002/weet-bix-wild-berry-bites-500g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/7/771002/weet-bix-wild-berry-bites-500g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Weet-Bix 营养谷物冲饮燕麦片 野莓味 500g" title="Weet-Bix 营养谷物冲饮燕麦片 野莓味 500g">
                <div class="base-font">
                    Weet-Bix 营养谷物冲饮燕麦片 野...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$6.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$6.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="115359" data-product-ajax-item="115359" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">9%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115359.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/4/142973/mavala-double-lash-nutritive-treatment-10ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/4/142973/mavala-double-lash-nutritive-treatment-10ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Mavala 睫毛增长液 10ml （使睫毛浓密纤长）" title="Mavala 睫毛增长液 10ml （使睫毛浓密纤长）">
                <div class="base-font">
                    Mavala 睫毛增长液 10ml （使...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$24.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$26.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="64683" data-product-ajax-item="64683" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">23%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064683.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pearldropsintensivewhite80g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pearldropsintensivewhite80g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Pearl Drops 4D多倍功效美白去渍 80g" title="Pearl Drops 4D多倍功效美白去渍 80g">
                <div class="base-font">
                    Pearl Drops 4D多倍功效美白...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$6.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$8.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="112152" data-product-ajax-item="112152" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">51%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1112152.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/8/9/893765/swisse-ultiboost-grape-seed-tab-x-180.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/8/9/893765/swisse-ultiboost-grape-seed-tab-x-180.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 澳洲葡萄籽精华 180粒（天然抗氧化）" title="Swisse 澳洲葡萄籽精华 180粒（天然抗氧化）">
                <div class="base-font">
                    Swisse 澳洲葡萄籽精华 180粒（...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$21.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$44.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="113566" data-product-ajax-item="113566" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">28%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113566.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/7/777011/royal-nectar-original-face-mask-50ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/7/777011/royal-nectar-original-face-mask-50ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Royal Nectar 皇家蜂毒面膜 50ml（抗皱紧肤/美白保湿)" title="Royal Nectar 皇家蜂毒面膜 50ml（抗皱紧肤/美白保湿)">
                <div class="base-font">
                    Royal Nectar 皇家蜂毒面膜 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$46.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$64.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="113026" data-product-ajax-item="113026" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">41%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113026.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/5/951579/951579.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/9/5/951579/951579.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Femfresh 女性私处洗护液 日用型 250ml (温和清新/去除异味/孕妇适用）" title="Femfresh 女性私处洗护液 日用型 250ml (温和清新/去除异味/孕妇适用）">
                <div class="base-font">
                    Femfresh 女性私处洗护液 日用型...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.25</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$8.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="117685" data-product-ajax-item="117685" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117685.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片" title="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片">
                <div class="base-font">
                    Ostelin 小恐龙 儿童维生素D+钙...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$15.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$21.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item hei" data-product-symbol="AU$" data-product-id="65273" data-product-ajax-item="65273" >
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">12%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1065273.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/10001918_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/10001918_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Unichi Forty Fathoms 深海巨藻四十寻 修护精华乳液 50g" title="Unichi Forty Fathoms 深海巨藻四十寻 修护精华乳液 50g">
                <div class="base-font">
                    Unichi Forty Fathoms...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$52.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$59.95</span>
                </div>
            </a>
          </div>
          <div class="special-list swiper-slide more" style="width: 256px;">
            <a href="https://cn.pharmacyonline.com.au/active/starrecommendation.html">
                <i class="iconfont icon-arrawright"></i>
                <p>更多商品</p>
            </a>
          </div>
       </div>
    </div>
    <a class="new-banner" href="https://cn.pharmacyonline.com.au/newproduct.html">
        <img src="https://po-assets.azoyacdn.com/media/wysiwyg/PCbanner/0531xinpin644x322.jpg" alt="">
    </a>
    <div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode">
       <div class="clear choosen-container swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="66442" data-product-ajax-item="66442" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">18%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1066442.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/v/g/vg210_-_beauty_powder_-_beauty_sleep.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/v/g/vg210_-_beauty_powder_-_beauty_sleep.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Vida Glow 天然植物助眠营养精粹粉 210g 香草味" title="Vida Glow 天然植物助眠营养精粹粉 210g 香草味">
                <div class="base-font">
                    Vida Glow 天然植物助眠营养精粹...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$48.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$59.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="65752" data-product-ajax-item="65752" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                  <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065752.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/n/u/nu-lax_fruit-fibre-prebiotic.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/n/u/nu-lax_fruit-fibre-prebiotic.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Nu-Lax 乐康膏 铂金版每日益生菌水果纤维粉（扛饿粉） 5.5gX15袋" title="Nu-Lax 乐康膏 铂金版每日益生菌水果纤维粉（扛饿粉） 5.5gX15袋">
                  <div class="base-font">
                      Nu-Lax 乐康膏 铂金版每日益生菌水...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$13.95</span>
                      <span class="price-was" data-ajax-item="price" style="display:none;">AU$13.95</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="66408" data-product-ajax-item="66408" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">33%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1066408.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/0/00832_forty_fathoms_sr_eye_cream_pack__edited.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/0/00832_forty_fathoms_sr_eye_cream_pack__edited.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Unichi Forty Fathoms 深海四十寻 海藻精华修护眼霜 15ml" title="Unichi Forty Fathoms 深海四十寻 海藻精华修护眼霜 15ml">
                  <div class="base-font">
                      Unichi Forty Fathoms...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$26.95</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$39.95</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65753" data-product-ajax-item="65753" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065753.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/l/i/lifespace-shape.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/l/i/lifespace-shape.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 塑身B420益生菌胶囊 60粒" title="Life Space 塑身B420益生菌胶囊 60粒">
                  <div class="base-font">
                      Life Space 塑身B420益生菌...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$30.95</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65895" data-product-ajax-item="65895" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065895.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/s/w/swisse_un_dha_epa_liquid_for_baby_60_caps.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/s/w/swisse_un_dha_epa_liquid_for_baby_60_caps.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse Ultinatal 婴幼儿DHA+EPA鱼油软胶囊 60粒（保护大脑及眼睛）" title="Swisse Ultinatal 婴幼儿DHA+EPA鱼油软胶囊 60粒（保护大脑及眼睛）">
                  <div class="base-font">
                      Swisse Ultinatal 婴幼儿...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$18.50</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$24.99</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65900" data-product-ajax-item="65900" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065900.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_mens_daily_essentials_gift_pack_2018.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_mens_daily_essentials_gift_pack_2018.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sukin 苏芊 男士日常护肤套装（保湿乳霜+磨砂膏+洁面乳）" title="Sukin 苏芊 男士日常护肤套装（保湿乳霜+磨砂膏+洁面乳）">
                  <div class="base-font">
                      Sukin 苏芊 男士日常护肤套装（保湿...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$23.50</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$29.95</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65902" data-product-ajax-item="65902" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065902.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/o/1/O1CN011t8YDqgfGqlNDpH__2353295857.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/o/1/O1CN011t8YDqgfGqlNDpH__2353295857.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Unichi 深海四十寻 海藻精华修护颈霜 60ml" title="Unichi 深海四十寻 海藻精华修护颈霜 60ml">
                  <div class="base-font">
                      Unichi 深海四十寻 海藻精华修护颈...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$36.95</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$45.95</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="66327" data-product-ajax-item="66327" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">21%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1066327.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baking_soda_cleansing_micellar_water_75ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baking_soda_cleansing_micellar_water_75ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Biore 碧柔 小苏打清洁卸妆液 75ml" title="Biore 碧柔 小苏打清洁卸妆液 75ml">
                  <div class="base-font">
                      Biore 碧柔 小苏打清洁卸妆液 75...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$3.95</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$4.99</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="66032" data-product-ajax-item="66032" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style=""> 
                  <div class="off"><p data-ajax-item="sales">21%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1066032.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_rosehip_large_gift_pack.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_rosehip_large_gift_pack.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sukin 玫瑰果系列套装（洁面乳 125ml+保湿日霜 120ml+玫瑰果油 25ml）" title="Sukin 玫瑰果系列套装（洁面乳 125ml+保湿日霜 120ml+玫瑰果油 25ml）">
                  <div class="base-font">
                      Sukin 玫瑰果系列套装（洁面乳 12...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$27.50</span>
                      <span class="price-was" data-ajax-item="price" style="">AU$34.95</span>
                  </div>
              </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65600" data-product-ajax-item="65600" style="width: 120px;">
              <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                  <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
              </div> 
              <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
              <a href="https://cn.pharmacyonline.com.au/product/1065600.html">
                  <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pediasure_choc850g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pediasure_choc850g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="【新口味】PediaSure 雅培 小安素儿童营养奶粉 850g (巧克力味/助1-10岁孩子长高）" title="【新口味】PediaSure 雅培 小安素儿童营养奶粉 850g (巧克力味/助1-10岁孩子长高）">
                  <div class="base-font">
                      【新口味】PediaSure 雅培 小安...                </div>
                  <div class="base-color">
                      <span class="price-now" data-ajax-item="final_price">AU$49.95</span>
                      <span class="price-was" data-ajax-item="price" style="display:none;">AU$49.95</span>
                  </div>
              </a>
          </div>
          <div class="special-list swiper-slide more" style="width: 120px;">
          <a href="https://cn.pharmacyonline.com.au/newproduct.html">
              <i class="iconfont icon-arrawright"></i>
              <p>更多商品</p>
          </a>
          </div>
       </div>
    </div>
    <a class="new-banner" href="http://cn.pharmacyonline.com.au/top100.html?is_in_stock=1">
       <img src="https://po-assets.azoyacdn.com/media/wysiwyg/slides/PCbanner/topic-Top100-po_mb.jpg" alt="">
    </a>
    <div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
       <div class="clear choosen-container swiper-wrapper">
          <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="109483" data-product-ajax-item="109483" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">44%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1109483.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/4/346314/ostelin-vitamin-d-liquid-kids-20ml-x-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/4/346314/ostelin-vitamin-d-liquid-kids-20ml-x-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 婴幼儿/儿童液体维生素D滴剂(200IU) 补钙 草莓味 20ml" title="Ostelin 婴幼儿/儿童液体维生素D滴剂(200IU) 补钙 草莓味 20ml">
                <div class="base-font">
                    Ostelin 婴幼儿/儿童液体维生素D...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$15.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="108275" data-product-ajax-item="108275" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">38%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1108275.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354392/swisse-ultiboost-liver-detox-tab-x-120_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 奶蓟草本精华护肝片 120片" title="Swisse 奶蓟草本精华护肝片 120片">
                <div class="base-font">
                    Swisse 奶蓟草本精华护肝片 120...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$24.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$39.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="65600" data-product-ajax-item="65600" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1065600.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pediasure_choc850g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/p/e/pediasure_choc850g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="【新口味】PediaSure 雅培 小安素儿童营养奶粉 850g (巧克力味/助1-10岁孩子长高）" title="【新口味】PediaSure 雅培 小安素儿童营养奶粉 850g (巧克力味/助1-10岁孩子长高）">
                <div class="base-font">
                    【新口味】PediaSure 雅培 小安...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$49.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$49.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102651" data-product-ajax-item="102651" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">40%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102651.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/0/306842/306842.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/0/306842/306842.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Blackmores 澳佳宝 维生素E面霜 冰冰霜 50g" title="Blackmores 澳佳宝 维生素E面霜 冰冰霜 50g">
                <div class="base-font">
                    Blackmores 澳佳宝 维生素E面...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$14.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="117982" data-product-ajax-item="117982" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117982.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1001298/s-l1600.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1001298/s-l1600.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Contigo 康迪克 儿童吸管杯 防漏 414mlX3 (女孩)" title="Contigo 康迪克 儿童吸管杯 防漏 414mlX3 (女孩)">
                <div class="base-font">
                    Contigo 康迪克 儿童吸管杯 防漏...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$29.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$29.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="116567" data-product-ajax-item="116567" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">16%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1116567.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1000627/product-image-bottle-2_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1000627/product-image-bottle-2_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Unichi Forty Fathoms 深海巨藻四十寻 神奇修护精华面霜 50ml （平价La Mer）" title="Unichi Forty Fathoms 深海巨藻四十寻 神奇修护精华面霜 50ml （平价La Mer）">
                <div class="base-font">
                    Unichi Forty Fathoms...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$52.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$62.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="104906" data-product-ajax-item="104906" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1104906.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/_/-/_-1_2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/_/-/_-1_2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="S-26 Gold 澳洲惠氏金装3段奶粉 900克（1岁以上的婴儿）" title="S-26 Gold 澳洲惠氏金装3段奶粉 900克（1岁以上的婴儿）">
                <div class="base-font">
                    S-26 Gold 澳洲惠氏金装3段奶粉...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$19.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$19.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="103688" data-product-ajax-item="103688" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">25%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1103688.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/3/235202/du-it-tough-hands-150g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/3/235202/du-it-tough-hands-150g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Du’It 急救手膜手霜 150g" title="Du’It 急救手膜手霜 150g">
                <div class="base-font">
                    Du’It 急救手膜手霜 150g                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$11.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="113288" data-product-ajax-item="113288" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">6%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113288.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/2/328979/elevit100new_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/2/328979/elevit100new_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Elevit 爱乐维 备孕/孕妇孕期复合维生素叶酸片 100片" title="Elevit 爱乐维 备孕/孕妇孕期复合维生素叶酸片 100片">
                <div class="base-font">
                    Elevit 爱乐维 备孕/孕妇孕期复合...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$62.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$66.99</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="114684" data-product-ajax-item="114684" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">4%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1114684.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/8/184502/munchkin-grass-fed-toddler-drink-730g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/8/184502/munchkin-grass-fed-toddler-drink-730g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Munchkin 麦肯齐 草饲牧牛婴儿配方奶粉 3段 12-36个月 730g" title="Munchkin 麦肯齐 草饲牧牛婴儿配方奶粉 3段 12-36个月 730g">
                <div class="base-font">
                    Munchkin 麦肯齐 草饲牧牛婴儿配...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$24.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$26.00</span>
                </div>
            </a>
         </div>
         <div class="special-list swiper-slide more" style="width: 120px;">
          <a href="https://cn.pharmacyonline.com.au/hot.html">
              <i class="iconfont icon-arrawright"></i>
              <p>更多商品</p>
          </a>
         </div>
      </div>
    </div>  
    <a class="new-banner" href="https://cn.pharmacyonline.com.au/gift.html">
       <img src="https://po-assets.azoyacdn.com/media/wysiwyg/mb_slider/20170705cztcthdc640x320.jpg">
    </a>
    <div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
       <div class="clear choosen-container swiper-wrapper">
          <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="110952" data-product-ajax-item="110952" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1110952.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/1/711070/babybjornplatespoon.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/1/711070/babybjornplatespoon.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="BabyBjorn 宝宝餐盘和汤匙套装防滑不含BPA-紫色和粉色" title="BabyBjorn 宝宝餐盘和汤匙套装防滑不含BPA-紫色和粉色">
                <div class="base-font">
                    BabyBjorn 宝宝餐盘和汤匙套装防...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$32.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$38.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="66035" data-product-ajax-item="66035" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1066035.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_signature_3_step_cosmetic_bag_pack_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_signature_3_step_cosmetic_bag_pack_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sukin 面部护肤三部曲套装" title="Sukin 面部护肤三部曲套装">
                <div class="base-font">
                    Sukin 面部护肤三部曲套装                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$23.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$29.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="66033" data-product-ajax-item="66033" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1066033.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_multi_masque_small_gift_pack.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/2018_gp_images_multi_masque_small_gift_pack.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sukin 面膜三件套礼盒装" title="Sukin 面膜三件套礼盒装">
                <div class="base-font">
                    Sukin 面膜三件套礼盒装                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$23.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$29.95</span>
                </div>
            </a>
         </div>
         <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="111588" data-product-ajax-item="111588" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">32%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1111588.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/8/2/829897/neatfeatbb2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/8/2/829897/neatfeatbb2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Neat Feat 卸妆脱毛器套装 （顺滑剃须剃毛）" title="Neat Feat 卸妆脱毛器套装 （顺滑剃须剃毛）">
                <div class="base-font">
                    Neat Feat 卸妆脱毛器套装 （顺...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$32.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$48.50</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="106595" data-product-ajax-item="106595" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1106595.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/8/788742/freestyle_key_cmyk.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/8/788742/freestyle_key_cmyk.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Medela freestyle 美德乐飞韵双侧双韵律双边电动吸乳器套装" title="Medela freestyle 美德乐飞韵双侧双韵律双边电动吸乳器套装">
                <div class="base-font">
                    Medela freestyle 美德乐...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$429.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$549.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="64458" data-product-ajax-item="64458" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064458.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/2/12-days-of-crabtree-evelyn-advent-calendar-2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/2/12-days-of-crabtree-evelyn-advent-calendar-2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Crabtree &amp; Evelyn 瑰珀翠 圣诞护手霜礼盒套装 12支" title="Crabtree &amp; Evelyn 瑰珀翠 圣诞护手霜礼盒套装 12支">
                <div class="base-font">
                    Crabtree &amp; Evely...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$85.00</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$99.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="103180" data-product-ajax-item="103180" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">18%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1103180.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/8/1/816590/816590_2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/8/1/816590/816590_2.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Avent 新安怡 新生奶瓶套装 1套" title="Avent 新安怡 新生奶瓶套装 1套">
                <div class="base-font">
                    Avent 新安怡 新生奶瓶套装 1套                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$44.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$54.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="115495" data-product-ajax-item="115495" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">16%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115495.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/204529/nude-by-nature-essential-collection-brush-set.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/204529/nude-by-nature-essential-collection-brush-set.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Nude By Nature 精美化妆刷套装 7支装" title="Nude By Nature 精美化妆刷套装 7支装">
                <div class="base-font">
                    Nude By Nature 精美化妆刷...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$33.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$39.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="116093" data-product-ajax-item="116093" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1116093.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/g/a/gaia-natural-baby-mini-traveller.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/g/a/gaia-natural-baby-mini-traveller.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Gaia 盖亚 宝宝天然护理旅行套装" title="Gaia 盖亚 宝宝天然护理旅行套装">
                <div class="base-font">
                    Gaia 盖亚 宝宝天然护理旅行套装                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$12.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$12.95</span>
                </div>
            </a>
          </div>
          <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="114732" data-product-ajax-item="114732" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1114732.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933462/chantelle-gift-pack-x-4.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933462/chantelle-gift-pack-x-4.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Chantelle Gift Pack (4 Pieces)" title="Chantelle Gift Pack (4 Pieces)">
                <div class="base-font">
                    Chantelle Gift Pack ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$57.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$57.95</span>
                </div>
            </a>
          </div>
          <div class="special-list swiper-slide more" style="width: 120px;">
            <a href="https://cn.pharmacyonline.com.au/gift.html">
                <i class="iconfont icon-arrawright"></i>
                <p>更多商品</p>
            </a>
          </div>

        </div>
    </div>
    <a class="new-banner" href="https://cn.pharmacyonline.com.au/big-sale/1598/immunity.html">
      <img src="https://po-assets.azoyacdn.com/media/wysiwyg/PCbanner/20181029-640-360.jpg" alt="">
    </a>
    <div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
    <div class="clear choosen-container swiper-wrapper">
                             <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="117844" data-product-ajax-item="117844" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">45%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117844.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1001177/5222_probiotica_for_kids_60t.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/1001177/5222_probiotica_for_kids_60t.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Nutralife 纽乐 儿童益生菌咀嚼片 60片" title="Nutralife 纽乐 儿童益生菌咀嚼片 60片">
                <div class="base-font">
                    Nutralife 纽乐 儿童益生菌咀嚼...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$24.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$44.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="116062" data-product-ajax-item="116062" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1116062.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/4/14783/heinz-apple-peach-mango-pouch-120g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/4/14783/heinz-apple-peach-mango-pouch-120g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Heinz 亨氏 苹果桃子芒果混合果泥 辅食 4个月以上 120g" title="Heinz 亨氏 苹果桃子芒果混合果泥 辅食 4个月以上 120g">
                <div class="base-font">
                    Heinz 亨氏 苹果桃子芒果混合果泥 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$2.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$2.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="113881" data-product-ajax-item="113881" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113881.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933819/3001031-bubs-pouch-fop-render-strawberry-pear-quinoa-lr.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933819/3001031-bubs-pouch-fop-render-strawberry-pear-quinoa-lr.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bubs 贝儿 有机婴儿辅食 草莓+梨+藜麦水果泥 6个月+ 120g" title="Bubs 贝儿 有机婴儿辅食 草莓+梨+藜麦水果泥 6个月+ 120g">
                <div class="base-font">
                    Bubs 贝儿 有机婴儿辅食 草莓+梨+...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$2.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$3.49</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="115902" data-product-ajax-item="115902" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115902.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/1/212457/bellamysmilkruskstoothiepegs.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/1/212457/bellamysmilkruskstoothiepegs.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bellamy's 贝拉米 婴幼儿有机无糖磨牙饼干 100g （6个月以上）" title="Bellamy's 贝拉米 婴幼儿有机无糖磨牙饼干 100g （6个月以上）">
                <div class="base-font">
                    Bellamy's 贝拉米 婴幼儿有机无...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$5.50</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="117976" data-product-ajax-item="117976" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117976.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/4/24282/jar_infant60g_front_hr_v1_05-04-17.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/4/24282/jar_infant60g_front_hr_v1_05-04-17.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）" title="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）">
                <div class="base-font">
                    Life Space 婴儿益生菌粉 60...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$32.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="105565" data-product-ajax-item="105565" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1105565.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/5/0/501808/karicare-plus-goat-milk-stage-1-infant-formula-900g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/5/0/501808/karicare-plus-goat-milk-stage-1-infant-formula-900g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Karicare 可瑞康 婴幼儿配方羊奶粉1段 0-6个月 900g" title="Karicare 可瑞康 婴幼儿配方羊奶粉1段 0-6个月 900g">
                <div class="base-font">
                    Karicare 可瑞康 婴幼儿配方羊奶...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$44.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$44.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="106542" data-product-ajax-item="106542" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">4%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1106542.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/1/314641/nestle-cerelac-infant-cereal-rice-200g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/1/314641/nestle-cerelac-infant-cereal-rice-200g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Nestle 雀巢 婴幼儿配方米粉米糊 （4个月以上）200g" title="Nestle 雀巢 婴幼儿配方米粉米糊 （4个月以上）200g">
                <div class="base-font">
                    Nestle 雀巢 婴幼儿配方米粉米糊 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$4.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$4.69</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="64354" data-product-ajax-item="64354" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064354.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/b/e/bellamy_s_organic_apple_fig_oatmeal_90g-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/b/e/bellamy_s_organic_apple_fig_oatmeal_90g-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bellamy's 贝拉米 婴幼儿辅食有机苹果无花果燕麦果泥 90g（4个月以上）" title="Bellamy's 贝拉米 婴幼儿辅食有机苹果无花果燕麦果泥 90g（4个月以上）">
                <div class="base-font">
                    Bellamy's 贝拉米 婴幼儿辅食有...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$2.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$2.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="64442" data-product-ajax-item="64442" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064442.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baby_apple_porridge_-_front.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baby_apple_porridge_-_front.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bubs 贝儿 有机婴儿辅食 有机燕麦+苹果粥（6个月+）125g" title="Bubs 贝儿 有机婴儿辅食 有机燕麦+苹果粥（6个月+）125g">
                <div class="base-font">
                    Bubs 贝儿 有机婴儿辅食 有机燕麦+...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$4.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$4.50</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="64443" data-product-ajax-item="64443" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064443.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baby_rice_cereal_-_front.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/b/a/baby_rice_cereal_-_front.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bubs 贝儿 有机婴儿辅食 有机大米米糊（4个月+）125g" title="Bubs 贝儿 有机婴儿辅食 有机大米米糊（4个月+）125g">
                <div class="base-font">
                    Bubs 贝儿 有机婴儿辅食 有机大米米...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$4.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$4.95</span>
                </div>
            </a>
        </div>
        <div class="special-list swiper-slide more" style="width: 120px;">
        <a href="https://cn.pharmacyonline.com.au/active/7063.html">
            <i class="iconfont icon-arrawright"></i>
            <p>更多商品</p>
        </a>
    </div>

    </div>
</div>
<a class="new-banner" href="http://cn.pharmacyonline.com.au/aeaesc/mobile/babyhealth.html?is_in_stock=1">
    <img src="https://po-assets.azoyacdn.com/media/wysiwyg/slides/PCbanner/1012-PO-_640-320_-po_mb.jpg" alt="">
</a>
<div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
    <div class="clear choosen-container swiper-wrapper">
                             <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="113217" data-product-ajax-item="113217" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113217.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/100503/bellamysbrownricepastastars.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/100503/bellamysbrownricepastastars.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bellamy's 贝拉米 婴幼儿辅食有机糙米星星意面 7个月以上 200g" title="Bellamy's 贝拉米 婴幼儿辅食有机糙米星星意面 7个月以上 200g">
                <div class="base-font">
                    Bellamy's 贝拉米 婴幼儿辅食有...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$5.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="117685" data-product-ajax-item="117685" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117685.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片" title="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片">
                <div class="base-font">
                    Ostelin 小恐龙 儿童维生素D+钙...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$15.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$21.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="103212" data-product-ajax-item="103212" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">19%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1103212.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/3/339822/centrum-kids-incremin-iron-mixture-200ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/3/339822/centrum-kids-incremin-iron-mixture-200ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL" title="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL">
                <div class="base-font">
                    Centrum 善存 澳洲儿童补铁口服液...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$16.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$20.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="113206" data-product-ajax-item="113206" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113206.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/4/4/447587/jar_baby_front_hr_v6.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/4/4/447587/jar_baby_front_hr_v6.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 婴儿益生菌粉 60g（6月-3岁） (调节肠胃/增强免疫力)" title="Life Space 婴儿益生菌粉 60g（6月-3岁） (调节肠胃/增强免疫力)">
                <div class="base-font">
                    Life Space 婴儿益生菌粉 60...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$30.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="113615" data-product-ajax-item="113615" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">25%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113615.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/9/391514/faulding-probiotics-4-kids-powder-50g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/9/391514/faulding-probiotics-4-kids-powder-50g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Faulding Probiotics 4 Kids Powder 50g" title="Faulding Probiotics 4 Kids Powder 50g">
                <div class="base-font">
                    Faulding Probiotics ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$14.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$19.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="113866" data-product-ajax-item="113866" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1113866.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933813/3001031-bubs-pouch-fop-render-blueberry-banana-quinoa-lr.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/9/3/933813/3001031-bubs-pouch-fop-render-blueberry-banana-quinoa-lr.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Bubs 贝儿 有机婴儿辅食 蓝莓+香蕉+藜麦水果泥 6个月+ 120g" title="Bubs 贝儿 有机婴儿辅食 蓝莓+香蕉+藜麦水果泥 6个月+ 120g">
                <div class="base-font">
                    Bubs 贝儿 有机婴儿辅食 蓝莓+香蕉...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$2.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$3.49</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="114548" data-product-ajax-item="114548" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">33%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1114548.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/6/6/669938/ostelin-vitamin-d-calcium-for-kids-50-tablets.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/6/6/669938/ostelin-vitamin-d-calcium-for-kids-50-tablets.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 小恐龙 儿童维生素D+钙咀嚼片 50片" title="Ostelin 小恐龙 儿童维生素D+钙咀嚼片 50片">
                <div class="base-font">
                    Ostelin 小恐龙 儿童维生素D+钙...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$9.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$14.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="115369" data-product-ajax-item="115369" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">40%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115369.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/3/13792/swisse-kids-fish-oil-cap-x-50.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/3/13792/swisse-kids-fish-oil-cap-x-50.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 儿童鱼油胶囊 50粒 （含DHA、EPA 无腥味）" title="Swisse 儿童鱼油胶囊 50粒 （含DHA、EPA 无腥味）">
                <div class="base-font">
                    Swisse 儿童鱼油胶囊 50粒 （含...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$14.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$24.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="115370" data-product-ajax-item="115370" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">40%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115370.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/3/13794/swisse-kids-probiotic-tab-x-40.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/3/13794/swisse-kids-probiotic-tab-x-40.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 儿童益生菌咀嚼片  40片  （支持肠道健康  浆果味）" title="Swisse 儿童益生菌咀嚼片  40片  （支持肠道健康  浆果味）">
                <div class="base-font">
                    Swisse 儿童益生菌咀嚼片  40片...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$14.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$24.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="115660" data-product-ajax-item="115660" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">9%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1115660.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/8/7/870/27114-hivita-liquivita-for-kids-200ml-3d_update-205x500.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/8/7/870/27114-hivita-liquivita-for-kids-200ml-3d_update-205x500.png?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Hivita Liquivita For Kids 200ml" title="Hivita Liquivita For Kids 200ml">
                <div class="base-font">
                    Hivita Liquivita For...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$19.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$21.99</span>
                </div>
            </a>
        </div>
        <div class="special-list swiper-slide more" style="width: 120px;">
        <a href="https://cn.pharmacyonline.com.au/mobile/babyhealth.html">
            <i class="iconfont icon-arrawright"></i>
            <p>更多商品</p>
        </a>
    </div>

    </div>
</div>
<a class="new-banner" href="http://cn.pharmacyonline.com.au/aeaesc/mobile/haircare.html?is_in_stock=1">
    <img src="https://po-assets.azoyacdn.com/1012-PO-秀发护养小心机(640-320).jpg">
</a>
<div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
    <div class="clear choosen-container swiper-wrapper">
                             <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="102281" data-product-ajax-item="102281" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">8%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102281.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/0/700045/700045_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/0/700045/700045_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Restoria 丽丝雅 黑发还原乳（非染发） 250ml" title="Restoria 丽丝雅 黑发还原乳（非染发） 250ml">
                <div class="base-font">
                    Restoria 丽丝雅 黑发还原乳（非...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$18.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$20.69</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="104288" data-product-ajax-item="104288" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1104288.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/7/272396/272396_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/7/272396/272396_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="TRESemme 炫诗 亮泽锁色护发素 900ml" title="TRESemme 炫诗 亮泽锁色护发素 900ml">
                <div class="base-font">
                    TRESemme 炫诗 亮泽锁色护发素 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$8.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="105090" data-product-ajax-item="105090" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1105090.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/4/244236/rthr5her.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/4/244236/rthr5her.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Pantene 潘婷 纤细受损头发修护润发精华素 350ml" title="Pantene 潘婷 纤细受损头发修护润发精华素 350ml">
                <div class="base-font">
                    Pantene 潘婷 纤细受损头发修护润...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$6.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$6.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="105093" data-product-ajax-item="105093" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1105093.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/4/243477/243477_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/4/243477/243477_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Pantene 潘婷 每日水分补充护发精华素 350ml" title="Pantene 潘婷 每日水分补充护发精华素 350ml">
                <div class="base-font">
                    Pantene 潘婷 每日水分补充护发精...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$6.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="111487" data-product-ajax-item="111487" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">14%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1111487.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/3/336205/336205.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/3/336205/336205.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Hair Restore 高级焕采活肤洗发水 450ml" title="Hair Restore 高级焕采活肤洗发水 450ml">
                <div class="base-font">
                    Hair Restore 高级焕采活肤洗...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$24.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$28.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="106179" data-product-ajax-item="106179" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1106179.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/6/264853/arcon-tisane-banner.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/6/264853/arcon-tisane-banner.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Arcon 草本养发护发胶囊 30粒（生发护发养发）" title="Arcon 草本养发护发胶囊 30粒（生发护发养发）">
                <div class="base-font">
                    Arcon 草本养发护发胶囊 30粒（生...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$39.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$39.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102202" data-product-ajax-item="102202" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102202.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/5/9/595691/595691.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/5/9/595691/595691.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Vaseline 凡士林 护发素 100ml" title="Vaseline 凡士林 护发素 100ml">
                <div class="base-font">
                    Vaseline 凡士林 护发素 100...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$5.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102204" data-product-ajax-item="102204" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102204.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/5/6/567736/brylcreamreg150.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/5/6/567736/brylcreamreg150.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Brylcreem 时尚美发霜 125ml" title="Brylcreem 时尚美发霜 125ml">
                <div class="base-font">
                    Brylcreem 时尚美发霜 125m...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$7.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$7.50</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102205" data-product-ajax-item="102205" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102205.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/5/5/556246/brylcreamdand150.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/5/5/556246/brylcreamdand150.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Brylcreem 抗头皮屑发乳 150ml" title="Brylcreem 抗头皮屑发乳 150ml">
                <div class="base-font">
                    Brylcreem 抗头皮屑发乳 150...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$7.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$7.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102269" data-product-ajax-item="102269" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102269.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/0/701734/701734_xlarge_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/0/701734/701734_xlarge_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Schwarzkopf 施华蔻 Live Colour系列 染发剂 银色 1盒" title="Schwarzkopf 施华蔻 Live Colour系列 染发剂 银色 1盒">
                <div class="base-font">
                    Schwarzkopf 施华蔻 Live...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$4.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$4.50</span>
                </div>
            </a>
        </div>
        <div class="special-list swiper-slide more" style="width: 120px;">
        <a href="https://cn.pharmacyonline.com.au/mobile/haircare.html">
            <i class="iconfont icon-arrawright"></i>
            <p>更多商品</p>
        </a>
    </div>

    </div>
</div>
<a class="new-banner" href="http://cn.pharmacyonline.com.au/aeaesc/mobile/oralcares.html?is_in_stock=1">
    <img src="https://po-assets.azoyacdn.com/1012-PO-口腔护理(640-320).jpg">
</a>
<div class="special-box myswiper-container ajax-products swiper-container-horizontal swiper-container-free-mode swiper-container-android">
    <div class="clear choosen-container swiper-wrapper">
                             <div class="swiper-slide special-list ajax-product-item swiper-slide-active" data-product-symbol="AU$" data-product-id="103095" data-product-ajax-item="103095" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1103095.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/3/737348/macleans-toothpaste-milk-teeth-63g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/3/737348/macleans-toothpaste-milk-teeth-63g.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Macleans 低氟婴幼儿乳牙牙膏 儿童牙膏 可吞咽 0-3岁 63g" title="Macleans 低氟婴幼儿乳牙牙膏 儿童牙膏 可吞咽 0-3岁 63g">
                <div class="base-font">
                    Macleans 低氟婴幼儿乳牙牙膏 儿...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$2.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$2.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item swiper-slide-next" data-product-symbol="AU$" data-product-id="106053" data-product-ajax-item="106053" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1106053.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/2/120970.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/2/120970.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Curasept 口腔漱液 200ml" title="Curasept 口腔漱液 200ml">
                <div class="base-font">
                    Curasept 口腔漱液 200ml                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$12.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$12.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="107705" data-product-ajax-item="107705" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">10%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1107705.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/3/334758/oralbpc500.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/3/334758/oralbpc500.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Oral-B Professional Care 500 Electric Toothbrush" title="Oral-B Professional Care 500 Electric Toothbrush">
                <div class="base-font">
                    Oral-B Professional ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$89.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$99.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="117993" data-product-ajax-item="117993" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">15%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1117993.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/0/20571/colgate_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/0/20571/colgate_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Colgate Plax (Peppermint) 1L" title="Colgate Plax (Peppermint) 1L">
                <div class="base-font">
                    Colgate Plax (Pepper...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$9.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="64788" data-product-ajax-item="64788" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1064788.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/0/10001902.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/0/10001902.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="My Magic Mud 天然美白牙膏 113g（绿薄荷）" title="My Magic Mud 天然美白牙膏 113g（绿薄荷）">
                <div class="base-font">
                    My Magic Mud 天然美白牙膏 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$15.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$19.95</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102130" data-product-ajax-item="102130" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">17%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102130.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/8/6/869880/869880.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/8/6/869880/869880.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Oral-B 欧乐-B 超级牙线 50条" title="Oral-B 欧乐-B 超级牙线 50条">
                <div class="base-font">
                    Oral-B 欧乐-B 超级牙线 50条...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$4.95</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$5.99</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102133" data-product-ajax-item="102133" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102133.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/4/1/419494/419494_1_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/4/1/419494/419494_1_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Oral-B Interdental Refills Cylindrical X 6 (2.7mm Fine)" title="Oral-B Interdental Refills Cylindrical X 6 (2.7mm Fine)">
                <div class="base-font">
                    Oral-B Interdental R...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$8.50</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102134" data-product-ajax-item="102134" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102134.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/6/2/628239/628239_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/6/2/628239/628239_1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Oral-B Interdental Brush Kit Plus 2 Refills" title="Oral-B Interdental Brush Kit Plus 2 Refills">
                <div class="base-font">
                    Oral-B Interdental B...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$6.50</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$6.50</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102140" data-product-ajax-item="102140" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style=""> 
                <div class="off"><p data-ajax-item="sales">14%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102140.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/6/762261/denturepaste.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/6/762261/denturepaste.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Steradent 齿得丽 假牙清洁膏 100g" title="Steradent 齿得丽 假牙清洁膏 100g">
                <div class="base-font">
                    Steradent 齿得丽 假牙清洁膏 ...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$5.50</span>
                    <span class="price-was" data-ajax-item="price" style="">AU$6.39</span>
                </div>
            </a>
        </div>
                    <div class="swiper-slide special-list ajax-product-item" data-product-symbol="AU$" data-product-id="102142" data-product-ajax-item="102142" style="width: 120px;">
            <div class="discount-icon" data-ajax-item="discount" style="display:none;"> 
                <div class="off"><p data-ajax-item="sales">0%</p>OFF</div>
            </div> 
            <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
            <a href="https://cn.pharmacyonline.com.au/product/1102142.html">
                <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/7/8/788147/gsk-9310042561300-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/7/8/788147/gsk-9310042561300-1.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sensodyne 舒适达 清凉薄荷牙膏 110g" title="Sensodyne 舒适达 清凉薄荷牙膏 110g">
                <div class="base-font">
                    Sensodyne 舒适达 清凉薄荷牙膏...                </div>
                <div class="base-color">
                    <span class="price-now" data-ajax-item="final_price">AU$8.95</span>
                    <span class="price-was" data-ajax-item="price" style="display:none;">AU$8.95</span>
                </div>
            </a>
        </div>
        <div class="special-list swiper-slide more" style="width: 120px;">
        <a href="https://cn.pharmacyonline.com.au/mobile/oralcares.html">
            <i class="iconfont icon-arrawright"></i>
            <p>更多商品</p>
        </a>
    </div>

    </div>
</div>

    <!-- 畅销推荐 -->
   <div class="special">
        <span class="hengxian">一 </span>畅销推荐
        <span class="hengxian"> 一</span>
 </div>
      <van-tabs type="card" class="allContern" color="#3333" title-active-color="#ffff">
        <van-tab title="宝宝成长营养">
                   <ul class="hot-list clear ajax-products">
           <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="113206" data-product-ajax-item="113206">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">26%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1113206.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/4/4/447587/jar_baby_front_hr_v6.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/4/4/447587/jar_baby_front_hr_v6.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 婴儿益生菌粉 60g（6月-3岁） (调节肠胃/增强免疫力)" title="Life Space 婴儿益生菌粉 60g（6月-3岁） (调节肠胃/增强免疫力)">
                    <div class="base-font">
                        Life Space 婴儿益生菌粉 60g（6月-3岁） (...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$30.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="108266" data-product-ajax-item="108266">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108266.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354414/swisse-ultivite-children-s-tab-x-120.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/5/354414/swisse-ultivite-children-s-tab-x-120.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Swisse 儿童专用复合维生素咀嚼片  120片" title="Swisse 儿童专用复合维生素咀嚼片  120片">
                    <div class="base-font">
                        Swisse 儿童专用复合维生素咀嚼片  120片                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$15.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$19.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="103212" data-product-ajax-item="103212">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">19%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1103212.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/3/339822/centrum-kids-incremin-iron-mixture-200ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/3/339822/centrum-kids-incremin-iron-mixture-200ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL" title="Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL">
                    <div class="base-font">
                        Centrum 善存 澳洲儿童补铁口服液 改善厌食200mL...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$16.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$20.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="108038" data-product-ajax-item="108038">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1108038.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/4/348023/348023.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/4/348023/348023.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸收" title="Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸收">
                    <div class="base-font">
                        Ostevit-D 婴幼儿维生素VD滴剂 15ml 促进钙吸...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$7.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$10.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="113162" data-product-ajax-item="113162">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">5%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1113162.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/3/9/392391/392391.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/3/9/392391/392391.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Sustagen 雀巢 儿童营养奶粉 (1-10岁)   800g" title="Sustagen 雀巢 儿童营养奶粉 (1-10岁)   800g">
                    <div class="base-font">
                        Sustagen 雀巢 儿童营养奶粉 (1-10岁)   8...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$29.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$31.50</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="117976" data-product-ajax-item="117976">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">22%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1117976.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/2/4/24282/jar_infant60g_front_hr_v1_05-04-17.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/2/4/24282/jar_infant60g_front_hr_v1_05-04-17.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）" title="Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫力）">
                    <div class="base-font">
                        Life Space 婴儿益生菌粉 60g（调节肠胃增强免疫...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$32.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$41.99</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="111006" data-product-ajax-item="111006">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">20%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1111006.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/5/2/521426/flordis-prospan-chesty-cough-relief-for-kids-100ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/5/2/521426/flordis-prospan-chesty-cough-relief-for-kids-100ml.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Flordis Prospan 常春藤糖浆 100ml （儿童适用）" title="Flordis Prospan 常春藤糖浆 100ml （儿童适用）">
                    <div class="base-font">
                        Flordis Prospan 常春藤糖浆 100ml （儿...                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$11.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$14.95</span>
                    </div>
                </a>
            </li>
            <li class="ajax-product-item" data-product-symbol="AU$" data-product-id="117685" data-product-ajax-item="117685">
                <div class="discount-icon" data-ajax-item="discount" style=""> 
                    <div class="off"><p data-ajax-item="sales">27%</p>OFF</div>
                </div> 
                <p class="product-outstock" data-ajax-item="out-stock" style="display:none;">已售罄</p>
                <a href="https://cn.pharmacyonline.com.au/product/1117685.html">
                    <img onerror="this.src='https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/placeholder.jpg'" data-original="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" src="https://po-assets.azoyacdn.com/media/catalog/product/1/7/17266/f2d_800_10_3.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=" alt="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片" title="Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片">
                    <div class="base-font">
                        Ostelin 小恐龙 儿童维生素D+钙咀嚼片  90片                    </div>
                    <div class="base-color">
                        <span class="price-now only-price" data-ajax-item="final_price">AU$15.95</span>
                        <span class="price-was" data-ajax-item="price" style="">AU$21.99</span>
                    </div>
                </a>
            </li>
        </ul>
        </van-tab>
        <van-tab title="熬夜族养生">内容 2</van-tab>
        <van-tab title="护肤界黑科技">内容 3</van-tab>
        <van-tab title="摆脱中年危机">内容 3</van-tab>
        <van-tab title="孕妈专区">内容 3</van-tab>
        <van-tab title="家用常备">内容 3</van-tab>
        <van-tab title="凑单好物">内容 3</van-tab>
        <van-tab title="礼盒套装">内容 3</van-tab>

      </van-tabs>
    <!-- 关于我们 -->

    <van-collapse v-model="activeNames" accordion>
       <van-collapse-item title="有赞微商城" name="1">
        <p>商户介绍</p>
        <p>商品承诺</p>
        <p>联系我们</p>
      </van-collapse-item>
      <van-collapse-item title="物流配送" name="2">
        <p>配送方式</p>
        <p>配送标准</p>
        <p>物流跟踪</p>
      </van-collapse-item>
      <van-collapse-item title="售后政策" name="3">
        <p>退货退款政策</p>
        <p>退货退款流程</p>
        <p>联系客服</p>
      </van-collapse-item>
      <van-collapse-item title="网站政策" name="4">
        <p>服务条款</p>
        <p>隐私权保护政策</p>
        <p>消费者告知书</p>
      </van-collapse-item>
      <van-collapse-item title="消费者指南" name="5">
        <p>购物流程</p>
        <p>常见问题</p>
        <p>关税发票</p>
      </van-collapse-item>
    </van-collapse>
    <!-- 底部友情链接 -->
    <div class="footer-bottom">
        <div class="about-us">
          <span>关注我们</span>
          <a href="" class="message weibo-footer"> <img src="https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/weixin-foot.png" alt=""> </a>
          <a href="" class="message weibo-footer"> <img src="https://po-assets.azoyacdn.com/skin/frontend/PlumTree/po_mb_v2/images/weibo-foot.png" alt=""> </a>
        </div>
        <div class="server-email">
		    	<span>客服邮箱</span>
	        
	        <span class="email-content">china@pharmacyonline.com.au</span>
		    </div>
        <div class="pay-way">
		    	<span>支付方式</span>
	        <div class="card pay-wx"></div>
	        <div class="card pay-ali"></div>
	        <div class="card pay-union"></div>
	    	</div>
        <div class="foot-detial">
		     	2016 EDC -Internet
		    </div>
    </div>
    <vanfooder></vanfooder>
  </div>
</template>
<script>
import vanfooder from "../components/vanfooter";
export default {
  data() {
    return {
      activeNames: ["1"],
      goodslist:[]
    };
  },
  components:{
      vanfooder
  },
  created(){
      this.$axios.get('/apis/cmsapi/home/banners?website_id=2&client=1',{
        
      }).then(res=>{
        //   console.log(res);
          let data = res.data;
        //   console.log(data);
        this.goodslist= data.data;
        //  console.log(data.data);

      })
  },
    // getData () { 
    //     this.$axios.get('/apis/cmsapi/home/banners',data).then(res=>{ 
    //     console.log(res) 
    //     console.log(21212);
    //     });
    // }
    //  this.$axios.post('/apis/cmsapi/home/banners',data).then(res=>{ 
    //      console.log(res) 
    //      console.log(21212);
    //      });
}    
</script>

<style>
.banner img {
  height: 12.72667rem;
  width: 100%;
}
/* 导航 */
.navs {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  background: #fff;
  text-align: center;
}
.new-list li img {
  display: block;
  height: 1.8rem;
  margin: 0.13333rem 0.5rem;
  margin-top: 0.4rem;
}

.new-list {
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  /* padding: 0 1rem; */
}
.new-list li {
  width: 3rem;
  height: 3rem;
  text-align: center;
}
.new-list li a {
  font-size: 0.26667rem;
  display: block;
  color: #666;
  overflow: hidden;
}
/* //特惠 */
.discount-container {
  margin-top: 0.86667rem;
}
.right {
  float: right;
}
.left {
  float: left;
}
.discount {
  width: 100%;
  height: 3.07333rem;
  line-height: 3.07333rem;
  background: #ffead2;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
  margin: 0 auto;
}
.hengxian {
  display: inline-block;
  width: 0.8rem;
  text-align: center;
  font-size: 0.29333rem;
  font-family: "微软雅黑";
}
.discount-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.26667rem;
  width: 50%;
  text-align: center;
  position: relative;
  height: 12rem;
}
.off {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.13333rem;
  position: absolute;
  left: 0.53333rem;
  top: 0.13333rem;
  width: 1.8rem;
  height: 2.94667rem;
  /* line-height: 2.94667rem; */
  background: url(./img/off.png) no-repeat;
  background-size: 100% 100%;
  font-size: 0.26667rem;
  color: #fff;
  z-index: 1;
}
.discount-item img {
  width: 7.2rem;
  height: 7.2rem;
}
.base-font {
  color: #666;
  font-size: 0.32rem;
  line-height: 0.82667rem;
  /* height: 0.85333rem; */
  display: block;
  margin: 0.06667rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
}
.product-outstock {
  position: absolute;
  width: 1.73333rem;
  height: 1.73333rem;
  line-height: 1.73333rem;
  border-radius: 100%;
  top: 1.13333rem;
  left: 50%;
  margin-left: -0.86667rem;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 0.32rem;
  z-index: 22;
}
.base-color {
  position: relative;
  width: 100%;
  height: 1.2rem;
  overflow: hidden;
  padding-top: 0.13333rem;
}
.base-color span {
  color: #ff7500;
  font-size: 0.32rem;
  display: inline-block;
}
.base-color .price-was {
  font-size: 0.26667rem;
  text-decoration: line-through;
  color: #c6c6c6;
  margin-left: 0.06667rem;
}
/* 主题活动推荐 */
.special {
  width: 100%;
  height: 2.17333rem;
  margin: 0 auto;
  line-height: 2.17333rem;
  text-align: center;
  color: #333;
  font-size: 0.9rem;
  background: #fff;
  margin-top: 0.2rem;
  border-top: 0.2rem solid #e8e4e4;
}
.cms-index-index .hengxian {
  display: inline-block;
  width: 0.8rem;
  text-align: center;
  font-size: 0.29333rem;
  font-family: "微软雅黑";
}
.special-box {
  background: #fff;
  overflow: hidden;
  font-size: 0;
  height: 10rem;
}
.new-banner img {
  width: 100%;
  height: 10rem;
  vertical-align: top;
}
.special-box .swiper-wrapper {
  padding-left: 0.4rem;
  width: 72rem;
  height: 10rem;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.special-list {
  display: inline-block;
  text-align: center;
  margin-top: 1.4rem;
  margin-bottom: 0.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.33333rem;
}
.special-list img {
  max-width: 4.53333rem;
  max-height: 5.53333rem;
  margin: 0.13333rem;
}
.hei {
  width: 10%;
}
/* 畅销推荐 */
.allContern {
  padding: 2rem 1rem 0.4rem 1rem;
  overflow: hidden;
}
.hot-list li {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.26667rem;
  float: left;
  width: 50%;
  height: 10.2rem;
  text-align: center;
  position: relative;
}
.hot-list li a {
  display: block;
  position: relative;
  line-height: 0.4rem;
}
.hot-list li img {
  width: 7.2rem;
  height: 7.2rem;
}

/* //底部样式 */
.footer-bottom {
  position: relative;
  background-color: #0a81d9;
  height: 12.233rem;
  font-size: 0.6rem;
  font-family: SourceHanSansCN-Normal;
  padding-left: 0.9rem;
}
.about-us {
  padding-top: 1.66667rem;
}
.footer-bottom .about-us span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 1.85333rem;
  display: inline-block;
  vertical-align: middle;
}
.footer-bottom .about-us .message {
  margin-right: 1.4rem;
  display: inline-block;
  width: 2.290667rem;
  height: 1.82667rem;
  vertical-align: middle;
}

.footer-bottom .about-us .message img {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
}
.footer-bottom .server-email {
  margin-top: 0.53333rem;
}
.footer-bottom .server-email span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 1.85333rem;
}
.footer-bottom .pay-way {
  margin-top: 0.53333rem;
}
.footer-bottom .pay-way span {
  color: #ffffff;
  opacity: 0.8;
  margin-right: 1.85333rem;
}
.footer-bottom .pay-way .pay-wx {
  background: url(img/wxpay_bottom.png) no-repeat center;
  background-size: cover;
  height: 0.4rem;
  width: 1.65333rem;
  margin-right: 1.29333rem;
}
.footer-bottom .pay-way .pay-ali {
  background: url(img/alipay_bottom.png) no-repeat center;
  background-size: cover;
  height: 0.4rem;
  width: 1.13333rem;
  margin-right: 1.29333rem;
}
.footer-bottom .pay-way .pay-union {
  background: url(img/unionpay_bottom.png) no-repeat center;
  background-size: cover;
  height: 0.4rem;
  width: 1.54667rem;
}
.footer-bottom .pay-way .card {
  display: inline-block;
  width: 2.41333rem;
  height: 0.7rem;
  vertical-align: bottom;
}
.footer-bottom .foot-detial {
  margin-top: 0.53333rem;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 1.86667rem;
};
</style>

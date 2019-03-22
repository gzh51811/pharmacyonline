<template>
  <div>
    <!-- //搜索框 -->
    <van-search placeholder="请输入搜索关键词"  />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#ff7500" class="banner" >
       <van-swipe-item class="banner" v-for="goods in goodslist" :key="goods.id"> <img :src="goods.goods_image" alt=""> </van-swipe-item>
      
    </van-swipe>
    <!-- 导航栏 -->
    <mynav> </mynav>
   
    <!-- 每周特惠 -->
    <mustbuy></mustbuy>
   
    <div class="special">
      <span class="hengxian">一 </span>主题活动推荐
      <span class="hengxian"> 一</span>
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
import mynav from "../components/nav";
import mustbuy from "../components/mustbuy";
export default {
  data() {
    return {
      activeNames: ["1"],
      goodslist: []
    };
  },
  components: {
    vanfooder,
    mynav,
    mustbuy
  },
  created() {
    this.$tunhuoji.get("/goodslist/a", {}).then(res => {
      //   console.log(res);
      let data = res.data;
      console.log(data);
      this.goodslist = data.goods_info.slice(1, 6);
      console.log(this.goodslist);
    });
    // this.$axios
    //   .get("/apis/cmsapi/home/banners?website_id=2&client=1", {})
    //   .then(res => {
    //     console.log(res);
    //     let data = res.data;
    //     // //   console.log(data);
    //     this.goodslist = data.data;
    //     // //  console.log(data.data);
    //   });
  }
};
</script>

<style>
.banner img {
  height: 12.72667rem;
  width: 100%;
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
}
</style>

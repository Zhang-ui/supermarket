<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <!--轮播图-->
    <home-swiper :banner="banner"></home-swiper>
    <!--推荐-->
    <home-recommend :recommends="recommends"></home-recommend>
    <!--推荐页面-->
    <home-tab-recommend></home-tab-recommend>
  </div>
</template>

<script>
import HomeNavBar from "@/views/home/childComponents/HomeNavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommend from "@/views/home/childComponents/HomeRecommend";
import HomeTabRecommend from "@/views/home/childComponents/HomeTabRecommend";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeTabRecommend
  },
  data(){
    return {
      banner:[
          {
        href:'/profile',
        img:'https://img12.360buyimg.com/pop/s590x470_jfs/t1/147269/3/6533/87749/5f439b92E9a88ada5/80510a0e6a02a8a6.jpg.webp'
      },
        {
          href:'/profile',
          img:'https://img11.360buyimg.com/pop/s590x470_jfs/t1/144209/2/7014/96619/5f4c658aE82a48d4e/5a7b17cf20fb2447.jpg.webp'
        },
        {
          href:'/profile',
          img:'https://img13.360buyimg.com/da/s590x470_jfs/t1/125984/18/11626/81480/5f4f94ceE5e61f8de/d5cf94e2a400d98a.jpg.webp'
        },
        {
          href:'/profile',
          img:'https://img30.360buyimg.com/pop/s590x470_jfs/t1/139137/22/5248/88877/5f324a76Ee529e13d/3d0069cca7689ada.jpg.webp'
        },
        {
          href:'/profile',
          img:'https://img20.360buyimg.com/da/s590x470_jfs/t1/125027/33/8166/72388/5f203af8E3f3e0de0/f1bf8310ffc41916.jpg.webp'
        }
      ],
      recommends:[
        {
          href:'/profile',
          img:'https://img14.360buyimg.com/pop/s590x470_jfs/t1/129390/12/9468/90857/5f320ab5Eebca67a4/d17b1d48c5db054e.jpg.webp',
          text:'十点抢卷'
        },
        {
          href:'/profile',
          text:'好物特卖',
          img:'https://img13.360buyimg.com/pop/s590x470_jfs/t1/92901/35/4263/61081/5de61706Ee6b81e5a/44f7bd8810ac6113.jpg.webp'
        },
        {
          href:'/profile',
          text:'内购福利',
          img:'https://imgcps.jd.com/ling4/2542885/5aSP5a2j5YGl6Lqr/5YGl6Lqr6aOf5ZOB54m55Lu3/p-5bd8253082acdd181d02fa17/c1d451fc/cr/s/q.jpg'
        },
        {
          href:'/profile',
          text:'初秋上新',
          img:'https://img20.360buyimg.com/babel/s580x840_jfs/t1/103864/26/15396/51198/5e720327Eb2cedc20/73535908c696f475.jpg!cc_580x840.webp'
        }
      ]
    }
  }

}
</script>

<style scoped>
@import "~assets/css/base.css";
</style>

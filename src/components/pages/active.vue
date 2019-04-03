<template>
  <div class="wrap avtiveWrap">
    <div class="container">
      <div class="avtiveBox">
        <Collapse v-model="value" accordion>
          <Panel hide-arrow v-for="(item,index) in actives" :key="index">
            <div class="topItem">
              <div class="topItemCon">
                <div class="left">
                  <!-- <img src="../../assets/img/active/activeimg1.png"> -->
                  <img src="http://ad.cp88686.com/web/getActivityPicById?id=81">
                </div>
                <div class="right">
                  <div class="activeMainhead">{{item.mainhead}}</div>
                  <div class="activeSubhead">{{item.subhead}}</div>
                  <div class="activeTime">{{ item.createdDate | formatDate }}</div>
                </div>
              </div>
            </div>
            <p slot="content">
              彩票网拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们为会员提供最优惠的回馈，给予合作伙伴最高的营利回报!
              无论您拥有的是网络资源，或是人脉资源，都欢迎您加入凤凰彩票网合作伙伴的行列，无须负担任何费用，月入百万不再是梦想!
              代理条件：
              a.具有便利的计算机上网设备。
              b.有一定的人脉资源、网络资源或自己的广告网站。
              c.每期都要有5个实际有效投注的会员以上！
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { getActives } from '@/api/active'
import { formatDate } from '@/utils/date.js'
export default {
  name: 'active',
  data () {
    return {
      value: [],
      params: {},
      actives: []
    }
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  mounted () {
    getActives(this.params).then(res => {
      let data = res.data
      console.log(data)
      if (res.data.code === 200) {
        if (data.data) {
          this.actives = data.data
          console.log(data.data)
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
@import "../../assets/style/active.css";
</style>

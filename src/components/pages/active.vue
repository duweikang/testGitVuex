<template>
  <div class="wrap avtiveWrap">
    <div class="container">
      <div class="avtiveBox">
        <Collapse v-model="value" accordion>
          <Panel name="1" hide-arrow>
            <div class="topItem">
              <div class="topItemCon">
                <div class="left">
                  <img src="../../assets/img/active/activeimg1.png">
                </div>
                <div class="right">
                  <div class="activeTitle">人生若只如初见，佣金不高谁肯恋</div>
                  <div class="activeTime">2018/5/12-2019/11/11</div>
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
          <Panel name="2" hide-arrow>
            <div class="topItem">
              <div class="topItemCon">
                <div class="left">
                  <img src="../../assets/img/active/activeimg1.png">
                </div>
                <div class="right">
                  <div class="activeTitle">人生若只如初见，佣金不高谁肯恋</div>
                  <div class="activeTime">2018/5/12-2019/11/11</div>
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
          <Panel name="3" hide-arrow>
            <div class="topItem">
              <div class="topItemCon">
                <div class="left">
                  <img src="../../assets/img/active/activeimg1.png">
                </div>
                <div class="right">
                  <div class="activeTitle">人生若只如初见，佣金不高谁肯恋</div>
                  <div class="activeTime">2018/5/12-2019/11/11</div>
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
export default {
  name: 'active',
  data () {
    return {
      value: [],
      params: {}
    }
  },
  mounted () {
    getActives(this.params).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
@import "../../assets/style/active.css";
</style>

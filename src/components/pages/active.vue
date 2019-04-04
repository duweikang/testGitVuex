<template>
  <div class="wrap avtiveWrap">
    <div class="container">
      <div class="avtiveBox">
        <Collapse v-model="value" accordion>
          <Panel hide-arrow v-for="(item,index) in activeIds" :key="index">
            <div class="topItem">
              <div class="topItemCon">
                <div class="left">
                  <img :src="item.imgUrl">
                </div>
                <div class="right">
                  <div class="activeMainhead">{{item.mainhead}}</div>
                  <div class="activeSubhead">{{item.subhead}}</div>
                  <div class="activeTime">{{ item.createdDate | formatDate }}</div>
                </div>
              </div>
            </div>
            <p slot="content">
              {{getActiveDetail(item.id)}}
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { getActives, getActiveCon } from '@/api/active'
import { formatDate } from '@/utils/date.js'
export default {
  name: 'active',
  data () {
    return {
      value: [],
      params: {},
      activeIds: []
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
      if (res.data.code === 200) {
        if (data.data) {
          let dataArr = data.data
          for (let a = 0; a < dataArr.length; a++) {
            dataArr[a].imgUrl = process.env.BASE_API + 'web/getActivityPicById?id=' + dataArr[a].id
          }
          this.activeIds = dataArr
        }
      }
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    getActiveDetail (itemId) {
      getActiveCon({id: itemId}).then(res => {
        let data = res.data
        console.log(data)
      })
    }
  }
}
</script>

<style>
@import "../../assets/style/active.css";
</style>

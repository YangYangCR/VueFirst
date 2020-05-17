<template>
  <div>
    <div class="child_title">
      <div>
        <Input v-model="businessName" placeholder="请输入核算单元名称" style="width: 300px"/>
      </div>
      <!--      <Button type="info" @click="showBusiness">Info</Button>-->
      <Button type="info" @click="getBusinessByName">模糊查询</Button>
      <Table :columns="businessHeader" :data="businessData" v-if="businessShow"></Table>
    </div>
    <div class="page_footer">
      <Steps :current="2">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </div>
  </div>
</template>
<script>
  import net from '@/net'

  export default {
    name: '',
    methods: {
      showBusiness () {
        net.get('/business/show?id=1434', {
          parameters: {
            id: 1434
          }
        }).then(({data, code}) => {
          console.log(data)
          console.log(data.code)
          console.log(data.data)
        })
      },

      getBusinessByName () {
        net.get('/business/getBusinessByName', {
          params: {
            name: this.businessName
          }
        }).then((data, code) => {
          this.businessShow = true
          console.log(data.data.data)
          this.businessData = data.data.data
          console.log('-----' + this.businessName)
        })
      }

    },
    data () {
      return {
        businessShow: false,
        businessName: '',
        businessData: [],
        businessHeader: [
          {
            title: '代号',
            key: 'businessCode'
          },
          {
            title: '名称',
            key: 'businessName'
          },
          {
            title: '日期',
            key: 'monthWithYear'
          },
          {
            title: '管理员',
            key: 'admin'
          },
          {
            title: '创建时间',
            key: 'createTime'
          },
          {
            title: '修改时间',
            key: 'updateTime',
            width: '300px'
          }
        ],
      }
    }

  }
</script>

<style scoped>
  .child_title {
    font-size: 14px;
    font-weight: bold;
    margin: 25px 0 15px 0;
  }

  .page_footer {
    margin-top: 10px;
    zoom: 1;
    overflow: auto;
  }

  .transfer_item {
    margin-top: 15px;

  }
</style>

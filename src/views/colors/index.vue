<template>
  <div>
    <div class="row"
         v-for="(item,index) in colors"
         :key='index'>
      <div class="item"
           v-for="(vle,inx) in item"
           :key='inx'
           :style="{ backgroundColor: vle}">{{vle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        ['#333333', '#666666', '#999999', '#CCCCCC', '#E9E9E9', '#F5F5F5'],
        ['#0071E2', '#258FF8', '#5BADFC', '#86C2FC', '#D7EBFF', '#EBF5FF'],
        ['#ED2827', '#FF5453', '#FF7373', '#FF9898', '#FFD9D9', '#FFEEEE'],
        ['#BD4C00', '#FF7F29', '#FF9B58', '#FFB07B', '#FFE7D7', '#FFF5EE'],
        ['#ED9400', '#FFBC00', '#FFD21E', '#FFE167', '#FAEFC1', '#FFF9E2'],
        ['#00AB56', '#0DC66A', '#45D38B', '#74EBAE', '#CFFBE4', '#E8FFF3'],
        ['#42B500', '#60CF20', '#86D955', '#9FEB72', '#DBFBC8', '#EDFDE4'],
        ['#4F45D9', '#6E64ED', '#938BF6', '#AEA8F6', '#E7E5FF', '#F5F5FF']
      ]
    };
  }
};
</script>

<style lang="less">
.row {
  display: flex;
  margin-bottom: 8px;
  .item {
    flex: 1;
    height: 60px;
  }
}
</style>



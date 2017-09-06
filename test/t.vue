<template>
  <DatePicker
    :open="open"
    :value="value3"
    confirm
    type="date"
    @on-change="handleChange"
    @on-clear="handleClear"
    @on-ok="handleOk">
    <a href="javascript:void(0)" @click="handleClick">
      <Icon type="ios-calendar-outline"></Icon>
      <template v-if="value3 === ''">选择日期</template>
      <template v-else>{{ value3 }}</template>
    </a>
  </DatePicker>
</template>
<script>
  export default {
    data () {
      return {
        open: false,
        value3: ''
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open;
      },
      handleChange (date) {
        this.value3 = date;
      },
      handleClear () {
        this.open = false;
      },
      handleOk () {
        this.open = false;
      }
    }
  }
</script>

<template>
  <ul class="todo-list">
    <!-- 2.2 循环任务-关联选中状态-铺设数据 -->
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.isDone }" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <!-- 4.0 注册点击事件 -->
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    del(id) {
      this.$emit("del", id);
    },
  },
};
</script>

<style>
</style>
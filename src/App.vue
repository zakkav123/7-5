<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn" @check="checkFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter :count="count" @everyFn="everyFn" @clear="clearFn"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      getAll: "all",
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    everyFn(val) {
      this.getAll = val;
    },
    clearFn() {
      this.list.forEach((f) => (f.isDone = false));
    },
    checkFn(val){
      return this.list.forEach((ele) => (ele.isDone = val));
    }
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showList() {
      if (this.getAll == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else if (this.getAll == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []));
      },
    },
  },
};
</script>

<style>
</style>
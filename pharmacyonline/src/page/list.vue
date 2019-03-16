<template>
  <div>
    <!-- 搜索 -->
    <search/>

    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="onNavClick"
      @itemclick="onItemClick"
      :height="height"
    />

    <!-- 底部 -->
    <vanfooter/>
  </div>
</template>

<script>
import vanfooter from "../components/vanfooter"; //底部
import search from "../components/search"; //底部
export default {
  data() {
    return {
      height: 500,
      items: [
        {
          text: "必入尖货",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: "杭州",
              id: 2
            },
            {
              text: "杭州",
              id: 3
            },
            {
              text: "杭州",
              id: 4
            }
          ]
        },
        {
          text: "新品上线",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "营养保健",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "母婴产品",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "美妆个护",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "美妆个护",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "洗护日用",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          text: "家庭常备",
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        }
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  },
  components: {
    vanfooter,
    search
  }
};
</script>


<style lang="less" scoped>
.van-tree-select__nitem {
  line-height: 84px;
  padding-left: 30px;
}
.van-tree-select__item {
  width: 50%;
  text-align: center;

  line-height: 84px;
  height: 30%;
}
.van-tree-select__content {
  display: flex;
  flex-wrap: wrap;

  column-gap: 20px;
}
</style>

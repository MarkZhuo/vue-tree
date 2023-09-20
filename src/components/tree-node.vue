<script setup>
defineProps(['node', 'level'])

import TreeNode from './tree-node.vue'
</script>

<template>
  <div class='tree-node'>
    <div class="node-wrapper">
      <div class="content">
        <div class="parent-node" v-if="node.parentId === '0'"></div>
        <div class="sec-node" v-if="node.judge === 'init' && node.parentId !== '0'"></div>
        <div class="tree-node__content">{{ node.label }}</div>
      </div>
      <div class="actions">
        <i v-if="node.parentId === '0'">新建节点</i>
        <i v-if="node.parentId !== '0'">编辑</i>
        <i v-if="node.parentId !== '0'">删除</i>
        <div class="judge-content" v-if="node.parentId !== '0'">
          <i>+</i>
          <i>+</i>
        </div>
      </div>
    </div>
    <div class='tree-node__children' v-if="node.next && node.next.length">
      <tree-node v-for="child in node.next" :key="child.id" :node="child" :level="level + 1"></tree-node>
    </div>
  </div>
</template>

<style scoped></style>

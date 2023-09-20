<script setup>
import TreeNode from './components/tree-node.vue'
import treeData from './components/MockTreeData.js'

// const treeData = [
//   {
//     name: 'Root1',
//     key: '1',
//     children: [
//       {
//         name: 'Child 1-1',
//         key: '1-1',
//         children: [
//           {
//             name: 'Child 1-1-1',
//             key: '1-1-1',
//             children: [
//               {
//                 name: 'Child 1-1-1-1',
//                 key: '1-1-1-1',
//               },
//               {
//                 name: 'Child 1-1-1-2',
//                 key: '1-1-1-2',
//               }
//             ]
//           },
//           {
//             name: 'Child 1-1-2',
//             key: '1-1-2',
//           },
//           {
//             name: 'Child 1-1-3',
//             key: '1-1-3',
//           },
//         ]
//       },
//       {
//         name: 'Child 1-2',
//         key: '1-2',
//         children: [
//           {
//             name: 'Child 1-2-1',
//             key: '1-2-1',
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Root2',
//     key: '2',
//     children: [
//       {
//         name: 'Child 2-1',
//         key: '2-1'
//       }
//     ]
//   }
// ]
</script>

<template>
  <div class="tree">
    <tree-node v-for="node in treeData" :node="node" :level="0"></tree-node>
  </div>
</template>

<style scoped></style>

import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  // 0: node所在路径
  // 1: 项目所在路径
  console.log(`${index}: ${val}`);
});
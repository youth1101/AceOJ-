/* eslint-disable */
// Vue文件的原生类型声明（保留原有功能）
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 全局声明所有样式文件，彻底解决TS找不到css/less/scss文件的报错
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.less" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

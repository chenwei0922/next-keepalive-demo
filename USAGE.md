# nextjs&react组件缓存文档

## 路由页面缓存
> 根路由外层包裹一层 `Context`，并保留每次当前路由渲染数据&视图。当加载的路由组件是`KeepAlive`时，从缓存数据渲染组件，否则直接渲染组件。当离开组件时，将其变成`none`，并通过路由`routeChangeStart`记录组件的滚动位置，当进入组件时，根据 `currentAlive` 比较或 `MutationObserver`属性监听,来恢复页面位置。页面组件用高阶组件进行包裹`withKeepAlive`，即可区分此路由组件是否普通路由

### Provider

|属性名|描述|类型|
|---|---|---|
| `currentAlive`| 当前路由组件信息| `{name, Com}`|
| `data`| 所有路由缓存数据源 | Map |
| `update` | 更新缓存信息 | Function
| `unmount` | 删除路由缓存 | Function 

### 使用方法

```js
//根路由
export default function App({ Component, pageProps }: AppProps) {
  return (
    <KeepAliveContextProvider>
      <Component {...pageProps} />
    </KeepAliveContextProvider>
  )
}

//页面路由
import { withKeepAlive } from "./KeepAlive";
export default withKeepAlive(A)
```
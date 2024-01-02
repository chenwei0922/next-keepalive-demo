This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# KeepAlive 缓存流程

## 路由缓存
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
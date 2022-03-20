import React, { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import Loading from '../page/loading';
import NotFound from '../page/not-found';
import Layout from '../page/layout';

const Home = lazy(() => import('../page/home'));
const Product = lazy(() => import('../page/product'));
const WanZhuanDingZhi = lazy(() => import('../page/wan-zhuan-ding-zhi'));
const Topic = lazy(() => import('../page/topic'));

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

const routerList: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    // 路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: 'product',
        element: lazyLoad(<Product />),
      },
      {
        path: 'wanzhuandingzhi',
        element: lazyLoad(<WanZhuanDingZhi />),
      },
      {
        path: 'topic',
        element: lazyLoad(<Topic />),
      },

      {
        path: '*', // 首页路径
        element: <NotFound />,
      },
    ],
  },
];
export default routerList;

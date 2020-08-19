import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login'
import Client from "../components/Client";
import Staff from "../components/Staff";
import BaiduMapPath from "../components/BaiduMapPath";

// <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Vmat35Vngur0Ro4IeyyvhiLTrmLVCluv"></script>


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/staff',
    component: Staff
  },
  {
    path: '/client',
    component: Client
  },
  {
    path: '/baidumappath',
    component: BaiduMapPath
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

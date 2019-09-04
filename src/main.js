import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

import UserEdit from './components/users/UserEdit.vue';
import UserDisplay from './components/users/UsersDisplay.vue';
import UserCreate from './components/users/UsersCreate.vue';

// 类别
import CategoryEdit from './components/category/CategoryEdit.vue';
import CategoryDisplay from './components/category/CategoryDisplay.vue';
import CategoryCreate from './components/category/CategoryCreate.vue';

// 主题
import TopicEdit from './components/topic/TopicEdit.vue';
import TopicDisplay from './components/topic/TopicDisplay.vue';
import TopicCreate from './components/topic/TopicCreate.vue';

//热门书籍
import HotBooksEdit from './components/hotBooks/HotBooksEdit.vue';
import HotBooksDisplay from './components/hotBooks/HotBooksDisplay.vue';
import HotBooksCreate from './components/hotBooks/HotBooksCreate.vue';

//折扣书籍
import DiscountBooksEdit from './components/discountBooks/DiscountBooksEdit.vue';
import DiscountBooksDisplay from './components/discountBooks/DiscountBooksDisplay.vue';
import DiscountBooksCreate from './components/discountBooks/DiscountBooksCreate.vue';

//新书
import NewBooksEdit from './components/newBooks/NewBooksEdit.vue';
import NewBooksDisplay from './components/newBooks/NewBooksDisplay.vue';
import NewBooksCreate from './components/newBooks/NewBooksCreate.vue';

//计算机
import ComputerEdit from './components/computer/ComputerEdit.vue';
import ComputerDisplay from './components/computer/ComputerDisplay.vue';
import ComputerCreate from './components/computer/ComputerCreate.vue';

//历史
import HistoryEdit from './components/history/HistoryEdit.vue';
import HistoryDisplay from './components/history/HistoryDisplay.vue';
import HistoryCreate from './components/history/HistoryCreate.vue';

//经济学
import EconomicsEdit from './components/economics/EconomicsEdit.vue';
import EconomicsDisplay from './components/economics/EconomicsDisplay.vue';
import EconomicsCreate from './components/economics/EconomicsCreate.vue';

//经济学
import LiteratureEdit from './components/literature/LiteratureEdit.vue';
import LiteratureDisplay from './components/literature/LiteratureDisplay.vue';
import LiteratureCreate from './components/literature/LiteratureCreate.vue';

// 书籍评论
import CommentEdit from './components/comment/CommentEdit.vue';
import CommentDisplay from './components/comment/CommentDisplay.vue';
import CommentCreate from './components/comment/CommentCreate.vue';

const routes = [
  {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
          name: 'DisplayItem',
          path: '/item/display',
        //   path: '/',
          component: DisplayItem
      },
      {
            name: 'EditItem',
            path: '/edit/:id',
            component: EditItem
       },
    //    用户
       {
           name: 'UserEdit',
           path: '/users/edit/:id',
           component: UserEdit
       },
       {
            name: 'UserDisplay',
            // path: '/users/display',
            path: '/',
            component: UserDisplay
       },
        {
            name: 'UserCreate',
            path: '/users/item',
            component: UserCreate
          },
        //   类别
        {
            name: 'CategoryEdit',
            path: '/category/edit/:id',
            component: CategoryEdit
        },
        {
             name: 'CategoryDisplay',
             path: '/category/display',
             component: CategoryDisplay
        },
         {
             name: 'CategoryCreate',
             path: '/category/item',
             component: CategoryCreate
           },
        //   主题
        {
            name: 'TopicEdit',
            path: '/topic/edit/:id',
            component: TopicEdit
        },
        {
             name: 'TopicDisplay',
             path: '/topic/display',
             component: TopicDisplay
        },
         {
             name: 'TopicCreate',
             path: '/topic/item',
             component: TopicCreate
           },
        //    热门书籍
        {
            name: 'HotBooksEdit',
            path: '/hotBooks/edit/:id',
            component: HotBooksEdit
        },
        {
             name: 'HotBooksDisplay',
             path: '/hotBooks/display',
             component: HotBooksDisplay
        },
         {
             name: 'HotBooksCreate',
             path: '/hotBooks/item',
             component: HotBooksCreate
        },
        //    折扣书籍
        {
            name: 'DiscountBooksEdit',
            path: '/discountBooks/edit/:id',
            component: DiscountBooksEdit
        },
        {
             name: 'DiscountBooksDisplay',
             path: '/discountBooks/display',
             component: DiscountBooksDisplay
        },
         {
             name: 'DiscountBooksCreate',
             path: '/discountBooks/item',
             component: DiscountBooksCreate
        },
        //    新书
        {
            name: 'NewBooksEdit',
            path: '/newBooks/edit/:id',
            component: NewBooksEdit
        },
        {
             name: 'NewBooksDisplay',
             path: '/newBooks/display',
             component: NewBooksDisplay
        },
         {
             name: 'NewBooksCreate',
             path: '/newBooks/item',
             component: NewBooksCreate
        },
        //    计算机
        {
            name: 'ComputerEdit',
            path: '/computer/edit/:id',
            component: ComputerEdit
        },
        {
             name: 'ComputerDisplay',
             path: '/computer/display',
             component: ComputerDisplay
        },
         {
             name: 'ComputerCreate',
             path: '/computer/item',
             component: ComputerCreate
        },

        //    历史
        {
            name: 'HistoryEdit',
            path: '/history/edit/:id',
            component: HistoryEdit
        },
        {
             name: 'HistoryDisplay',
             path: '/history/display',
             component: HistoryDisplay
        },
         {
             name: 'HistoryCreate',
             path: '/history/item',
             component: HistoryCreate
        },

        //    经济学
        {
            name: 'EconomicsEdit',
            path: '/economics/edit/:id',
            component: EconomicsEdit
        },
        {
             name: 'EconomicsDisplay',
             path: '/economics/display',
             component: EconomicsDisplay
        },
         {
             name: 'EconomicsCreate',
             path: '/economics/item',
             component: EconomicsCreate
        },

        //    文学
        {
            name: 'LiteratureEdit',
            path: '/literature/edit/:id',
            component: LiteratureEdit
        },
        {
             name: 'LiteratureDisplay',
             path: '/literature/display',
             component: LiteratureDisplay
        },
         {
             name: 'LiteratureCreate',
             path: '/literature/item',
             component: LiteratureCreate
        },

        //    评论
        {
            name: 'CommentEdit',
            path: '/comment/edit/:id',
            component: CommentEdit
        },
        {
            name: 'CommentDisplay',
            path: '/comment/display',
            component: CommentDisplay
        },
        {
            name: 'CommentCreate',
            path: '/comment/item',
            component: CommentCreate
        },
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

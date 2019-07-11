// const Home = () => import('@/views/home/home')
// const Archive = () => import('@/views/archive/archive')
// const Tags = () => import('@/views/tags/tags')
// const TagDetail = () => import('@/views/tags/tag-detail')
// const About = () => import('@/views/about/about')
// const Profile = () => import('@/views/about/profile')
// const Messages = () => import('@/views/messages/messages')
// const ErrorPage = () => import('@/views/error-page/404')
// const ArticleDetail = () => import('@/views/article-detail/article-detail')

import Home from  '@/views/home/home'
import Archive from  '@/views/archive/archive'
import Tags from  '@/views/tags/tags'
import TagDetail from  '@/views/tags/tag-detail'
import About from  '@/views/about/about'
import Profile from  '@/views/about/profile'
import Messages from  '@/views/messages/messages'
import ErrorPage from '@/views/error-page/404'
import ArticleDetail from '@/views/article-detail/article-detail'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/archive',
    component: Archive
  },
  {
    path: '/tags',
    component: Tags,
  },
  {
    path: '/tags/:id/:name',
    component: TagDetail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/about/:id',
    component: Profile
  },
  {
    path: '/messages',
    component: Messages
  },
  {
    path: '/article/:id',
    component: ArticleDetail
  },
  {
    path: '*',
    component: ErrorPage
  }
]

export default routes;

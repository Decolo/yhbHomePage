import Live from '@/views/live/live'
import Lesson from '@/views/lesson/lesson'
import News from '@/views/news/news'
import Expert from '@/views/expert/expert'
import Corp from '@/views/corp/corp'
import About from '@/views/about/about'

const menuConfig = [
  {
    name: '直播/回看',
    path: '/video',
    component: Live
  }, {
    name: '课程学习',
    path: '/course',
    component: Lesson
  }, {
    name: '行业动态',
    path: '/news',
    component: News
  }, {
    name: '大咖秀',
    path: '/expert',
    component: Expert
  }, {
    name: '企业专区',
    path: '/corp',
    component: Corp
  }, {
    name: '关于我们',
    path: '/about',
    component: About
  }
] 

export default menuConfig
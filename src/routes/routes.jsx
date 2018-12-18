import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import CourseDetail from '@/views/courseDetail/courseDetail'
import VideoDetail from '@/views/videoDetail/videoDetail'
import menuConfig from '@/config/config'

const routers = [...menuConfig, {
  path: '/course/:id',
  component: CourseDetail
}, {
  path: '/live/:id',
  component: VideoDetail
}, {
  path: '',
  component: Home
}, {
  path: '/login',
  component: Login
}]

const Routes = () => {
  return (
    <div>
      <Switch>
        {
          routers.map((item, index) => {
            const { path, component } = item
            return (
              <Route exact path={path} key={'view' + index} component={component} />
            )
          })
        }
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default Routes
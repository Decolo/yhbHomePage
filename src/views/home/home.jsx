import React from 'react'
import ReactSwiper from 'reactjs-swiper'
import Main from '@/components/main'
import fetch from '@/utils/fetch'
import swiper_0 from '../../img/swiper_0.jpg'
import swiper_1 from '../../img/swiper_1.jpg'
import swiper_2 from '../../img/swiper_2.jpg'
import swiper_3 from '../../img/swiper_3.jpg'
import swiper_4 from '../../img/swiper_4.png'
import './index.scss'


const swipers = [swiper_0, swiper_1, swiper_2, swiper_3, swiper_4]
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swipers: [],
      videoList: [], 
      courseList: [],
      news: []
    }
  }
    
  componentDidMount() {
    this.fetchHomeData()
  }

  async fetchHomeData() {
    const result = await fetch({
      url: '/content/page?pageCode=homePage',
      method: 'GET'
    })
    
    const { courseList, videoList, industryNews } = result
    const courseListArr = []
    const videoListArr = []
    const newsListArr = []
    const courseListKeys = Object.keys(courseList)
    for (let i = 0; i < courseListKeys.length; i++) {
      courseListArr.push(courseList[courseListKeys[i]])
    }
    const videoListKeys = Object.keys(videoList)
    for (let i = 0; i < videoListKeys.length; i++) {
      videoListArr.push(videoList[videoListKeys[i]])
    }
    const newsListKeys = Object.keys(industryNews)
    for (let i = 0; i < newsListKeys.length; i++) {
      newsListArr.push(industryNews[newsListKeys[i]])
    }
    
    this.setState({
      courseList: courseListArr,
      videoList: videoListArr,
      news: newsListArr
    })
    
    localStorage.setItem('courseList', JSON.stringify(courseListArr))
    localStorage.setItem('videoList', JSON.stringify(videoListArr))
    localStorage.setItem('newsList', JSON.stringify(newsListArr))
  }

  render() {
    const { courseList, videoList, news } = this.state
    const swiperItems = swipers.map((item, index) => {
      return {
        image: item,
        title: 'banner' + index,
        link: 'javascript: void(0)'
      }
    })
    return (
      <Main>
        <div className="swiper-container">
        <ReactSwiper 
          swiperOptions={{
            preloadImages: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false
          }} 
          showPagination 
          items={swiperItems}
          className="swiper" />      
        </div>
        <div className="content-container">
          <div className="column">
            <div className="title-container">
              <div className="decoration video"></div>
              <div className="title">会议直播/回看</div>
            </div>
            <ul className="video-list">
              {
                videoList.map((item, index) => {
                  const { bannerImg, startTime, title, contentUrl, videoId } = item
                  const url = contentUrl || `/video/${videoId}`
                  return (
                    <li className="video item" key={index + 'videos'}>
                      <div className="cover-img-container">
                        <a className="img-cover" href={url} target="_blank">
                          <img src={bannerImg} />
                        </a>
                      </div>
                      <div className="content">
                        <a href={url} className="title row" target="_blank">{title}</a>
                        {/* <div className="lecturer row">主讲人: {lecturer}</div> */}
                        <div className="date row">日期: {startTime}</div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="column">
            <div className="title-container">
              <div className="decoration lesson"></div>
              <div className="title">课程学习</div>
            </div>
            <ul className="lesson-list">
              {
                courseList.map((item, index) => {
                  const { banner, title, videoId, contentUrl } = item
                  const url = contentUrl || `/course/${videoId}`
                  return (
                    <li className="lesson item" key={index + 'course'}>
                      <div className="cover-img-container">
                        <a className="img-cover" href={url} target="_blank">
                          <img src={banner} />
                        </a>
                      </div>
                      <div className="content">
                        <a className="title row" href={url} target="_blank">{title}</a>
                      </div>
                      {/*<div className="operation">
                        <div className="study btn">学习</div>
                        <div className="survey btn">问卷</div>
                      </div> */}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="column">
            <div className="title-container">
              <div className="decoration news"></div>
              <div className="title">行业动态</div>
            </div>
            <ul className="news-list">
              {
                news.map((item, index) => {
                  const { bannerImg, contentUrl, title } = item
                  return (
                    <li className="news item" key={index + 'news'}>
                      <div className="cover-img-container">
                        <a className="img-cover" href={contentUrl}>
                          <img src={bannerImg} />
                        </a>
                      </div>
                      <div className="content">
                        <a href={contentUrl} className="title row">主题: {title}</a>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Main>
    )
  }
}
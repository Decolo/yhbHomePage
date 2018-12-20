import React from 'react'
import Main from '@/components/main'
import ReactSwiper from 'reactjs-swiper'
import Pagination from 'react-js-pagination'
import './index.scss'

export default class News extends React.Component {
  state = {
    swiperItems: [], 
    news: [],
    pagination: {
      page: 1,
      itemsCountPerPage: 5,
      total: 3
    }
  }
  componentDidMount() {
    const newsListStr = localStorage.getItem('newsList')
    // console.log(JSON.parse(newsListStr))
    const newsList = newsListStr ? JSON.parse(newsListStr) : []
    const swiperItems = []
    const news = []
    
    newsList.forEach(item => {
      const { bannerImg, contentUrl, title } = item
      news.push({
        imgUrl: bannerImg,
        newsUrl: contentUrl,
        title,
      })

      swiperItems.push({
        image: bannerImg,
        link: contentUrl,
        title
      })
    })
    this.setState({
      news,
      swiperItems
    })
  }
  handlePaginationChange = (page) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        page,
      }
    })
  }
  render() {
    const { pagination, news, swiperItems } = this.state
    const { page, itemsCountPerPage, total } = pagination
    return (
      <Main>
        <div className="news-wrapper">
          <div className="news-container">
            <ul className="news-list">
              {
                news.map((item, index) => {
                  const { title, imgUrl, newsUrl } = item
                  return (
                    <li className="news-item clearfix" key={'news' + index}>
                      <div className="img-container">
                        <img src={imgUrl}/>
                      </div>
                      <div className="text-container">
                        <a href={newsUrl} target="_blank">
                          <h3 className="title">{title}</h3>
                        </a>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="pagination-container">
              <Pagination 
                activePage={page}
                totalItemsCount={total}
                itemsCountPerPage={itemsCountPerPage}
                onChange={this.handlePaginationChange}
              />
            </div>
          </div>
          
          <ReactSwiper 
            swiperOptions={{
              preloadImages: true,
              autoplay: 3000,
              autoplayDisableOnInteraction: false
            }} 
            showPagination 
            items={swiperItems}
            className="swiper-news" />
        </div>

      </Main>
    )
  }
}
import React from 'react'
import { Link } from 'react-router-dom'
import Main from '@/components/main'
import ReactSwiper from 'reactjs-swiper'
import Pagination from 'react-js-pagination'
import newsImg_1 from '../../img/news_banner_1.png'
import newsImg_2 from '../../img/news_banner_2.png'
import newsimg_3 from '../../img/news_banner_3.png'
import './index.scss'

const swiperItems = [{
  image: newsImg_1,
  link: 'https://mp.weixin.qq.com/s/QmcEOzuy9Xy6u_LLWUINHg',
  title: '"政策驱动，智慧赋能"| 2018第五届互联网+健康中国大会暨第二届"健康中国"杭州峰会成功举办'
}, {
  image: newsImg_2,
  link: 'http://samr.saic.gov.cn/gg/201811/t20181111_276981.html',
  title: '2018年11月11日市场监管总局关于就《中华人民共和国疫苗管理法（征求意见稿）》公开征求意见',
}, {
  image: newsimg_3,
  link: 'http://www.drvoice.cn/article/3814',
  title: '中国CTOCC CTO-PCI推荐路径专家共识发布暨“一带一路”共建启动',
}]

const news = [{
  imgUrl: newsImg_1,
  newsUrl: 'https://mp.weixin.qq.com/s/QmcEOzuy9Xy6u_LLWUINHg',
  title: '"政策驱动，智慧赋能"| 2018第五届互联网+健康中国大会暨第二届"健康中国"杭州峰会成功举办',
}, {
  imgUrl: newsImg_2,
  newsUrl: 'http://samr.saic.gov.cn/gg/201811/t20181111_276981.html',
  title: '2018年11月11日市场监管总局关于就《中华人民共和国疫苗管理法（征求意见稿）》公开征求意见',
}, {
  imgUrl: newsimg_3,
  newsUrl: 'http://www.drvoice.cn/article/3814',
  title: '中国CTOCC CTO-PCI推荐路径专家共识发布暨“一带一路”共建启动',
}]

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
  handlePaginationChange = (page) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        page,
      }
    })
  }
  render() {
    const { pagination } = this.state
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
import React from 'react'
import Main from '@/components/main'
import Pagination from 'react-js-pagination'
import './index.scss'

export default class Live extends React.Component {
  state = {
    videoList: [], 
    pagination: {
      page: 1,
      itemsCountPerPage: 5,
      total: 5
    }
  }
  componentDidMount() {
    this.setState({
      videoList: JSON.parse(localStorage.getItem('videoList'))
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
    const { pagination, videoList } = this.state
    const { page, itemsCountPerPage, total } = pagination
    return (
      <Main>    
        <ul className="live-list">
          {
            videoList.map((item, index) => {
              const { bannerImg, endTime, title, contentUrl, videoId } = item
              const url = contentUrl || `/live/${videoId}`
              return (
                <li className="live-item" key={'live' + index}>
                  <div className="content clearfix">
                    <div className="cover-img-container">
                      <a className="live-cover" href={url} target="_blank">
                        <img src={bannerImg} />
                      </a>
                    </div>
                    <div className="text-content">
                      <a className="title row" href={url} target="_blank">{title}</a>
                    </div>
                    <a className="start btn" href={url} target="_blank">立即观看</a>
                  </div>
                  <div className="line"></div>
                  <div className="date row">{endTime}</div>
                </li>
              )
            })
          }
        </ul>
        <Pagination 
          activePage={page}
          totalItemsCount={total}
          itemsCountPerPage={itemsCountPerPage}
          onChange={this.handlePaginationChange}
        />
      </Main>
    )
  }
}
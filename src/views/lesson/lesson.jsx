import React from 'react'
import Main from '@/components/main'
import Pagination from 'react-js-pagination'
import './index.scss'

export default class Lesson extends React.Component {
  state = {
    courseList: [], 
    pagination: {
      page: 1,
      itemsCountPerPage: 5,
      total: 2
    }
  }
  componentDidMount() {
    this.setState({
      courseList: JSON.parse(localStorage.getItem('courseList'))
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
    const { courseList, pagination } = this.state
    const { page, itemsCountPerPage, total } = pagination

    return (
      <Main>
        <ul className="lesson-list">
          {
            courseList.map((item, index) => {
              const { banner, title, videoId, contentUrl } = item
              const url = contentUrl || `/course/${videoId}`

              return (
                <li className="lesson-item clearfix" key={'lesson' + index}>
                  <div className="cover-img-container">
                    <a className="lesson-cover" href={url} target="_blank">
                      <img src={banner} />
                    </a>
                  </div>
                  <div className="text-content">
                    <a className="lesson-cover" href={url} target="_blank">
                      <div className="title">{title}</div>
                    </a>
                  </div>
                  {/* <div className="btns">
                    <div className="btn-container">
                      <div className="study btn">学习</div><span className="study score">{study.score}积分</span>
                    </div>
                    <div className="btn-container">
                      <div className="test btn">测试</div><span className="test score">{test.score}积分</span>
                    </div>
                  </div> */}
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
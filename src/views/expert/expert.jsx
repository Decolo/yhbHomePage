import React from 'react'
import Main from '@/components/main'
import Pagination from 'react-js-pagination'
import './index.scss'

export default class Expert extends React.Component {
  state = {
    experts: [
      {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }, {
        imgUrl: 'static/img/person.png',
        name: 'xxxxxx',
        job: 'xxxxxx',
        lessonNum: 10
      }
    ],
    pagination: {
      page: 1,
      itemsCountPerPage: 5,
      total: 1
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
    const { experts, pagination } = this.state
    const { page, total, itemsCountPerPage } = pagination
    return (
      <Main>
        <ul className="expert-list">
          {
            experts.map((item, index) => {
              return (
                <li className="expert-item" key={'expert' + index}>
                  <div className="img-container">
                    <img src={require('../../img/touxiang.png')} />
                  </div>
                  <div className="content">姓名</div>
                  <div className="text">职称</div>
                  <div className="lesson-num">课程数</div>
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
      </Main>
    )
  }
}
import React from 'react'
import Main from '@/components/main'
import Pagination from 'react-js-pagination'
import './index.scss'
export default class Corp extends React.Component {
  state = {
    corps: [
      {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
      }, {
        brandLogoUrl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b2370cf1aa18972ba33a07ccdef61cb4/9213b07eca8065386ef694f696dda144ad348232.jpg',
        content: 'xxxxxxxxxxxxx是最佳选择',
        text: 'xxxxxxxxx上市精彩回顾'
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
    const { corps, pagination } = this.state
    const { page, total, itemsCountPerPage } = pagination
    return (
      <Main>
        <ul className="corp-list">
          {
            corps.map((item, index) => {
              return (
                <li className="corp-item" key={'corp' + index}>
                  <div className="img-container">
                    <img src={require('../../img/qiye.png')} />
                  </div>
                  <div className="content">
                    企业名称
                  </div>
                  <div className="text">
                    精彩回顾
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
      </Main>
    )
  }
}
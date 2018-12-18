import React from 'react'
import { Link } from 'react-router-dom'
import menuConfig from '@/config/config'

export default class TopNav extends React.Component {
  render() {
    return(
      <nav className="top-nav">
        <div>
          <Link to="/" className="corp-container">
            <div className="nav-brand" >
            </div>
            <ul className="info">
              <li>医会播</li>
              <li>医学会议|直播|交流</li>
            </ul>
          </Link>
        </div>
        <div className="nav-collapse">
          <ul className="nav-list">
            {
              menuConfig.map((item, index) => {
                const { path, name } = item
                return (
                  <li className="nav-item" key={'nav' + index}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="operators-continer">
            <div className="search-container">
              <input className="search-input" type="text" placeholder="主题、专家等" />
              <button className="search-button">搜索</button>
            </div>
            <div className="qr-code-container">
            </div>
            <div className="login-container">
              <Link to="/login">登陆/注册</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
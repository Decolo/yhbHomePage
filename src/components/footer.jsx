import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container clearfix">
        <div className="logo-police"></div>
        <div className="text">
          <span className="column">浙ICP备18047841号-1</span>
          <span className="column">热线0571-28220489</span>
		 		  <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602009757">
            <span className="column">浙公网安备 33010602009757号</span>
          </a>
          <a target="_blank" href="https://www.yizhipin.com">
            <span className="column">医直聘</span>
          </a>
		 	  </div>
      </div>
    </footer>
  ) 
}

export default Footer
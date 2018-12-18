import React from 'react'
import Main from '@/components/main'
import './index.scss'

export default class Contact extends React.Component {
  render() {
    return (
      <Main>
        <div className="about-container">
          <div className="about-text">
            <h3>关于我们：</h3>
            <h4>医会播，会播科技旗下医药数字化营销服务平台</h4>
            <p className="row">
              随着国家取消药品加成、两票制、营改增、医药代表备案制等法律法规的出台，
              医药企业传统的营销模式和营销渠道已经难以为继，医药营销从带金销售向学
              术推广转型已经为业界的共识，具有低成本、广覆盖的数字营销则成为当前医
              药企业营销不二选择。根调查，目前有90％的制药企业已经广泛推广或试点将
              数字化工具作为营销推广的渠道之一，以提供疾病、产品、学术前沿技术及医
              学教育的信息及服务。
            </p>
            <p className="row">
              作为国内专业的医药数字化营销平台，医会播立足合规学术会议服务，聚集医生、
              学会、协会、医学专家资源，拥有先进的互联网平台技术和数字化营销工具，可
              为学/协会、医药企业、医疗机构、代理机构等用户提供数字化会务/营销服务，
              为众多医药企业学术推广提供强有力的技术支撑。
            </p>
          </div>
          <div className="service">
            <h3>提供服务：</h3>
            <ul className="service-list">
              <li>
                <h4>学术会议/企业卫星会网络直播、回看：</h4>
                <p className="row">
                  通过医会播网页版或手机小程序，针对未能到线下参会的客户发送企业卫星会或
                  活动短信或微信通知，医生直接线上观看参会，高清画质，支持评论互动，使公
                  司会议参与人数大幅提升，扩大会议影响，提升会议传播效果。
                </p>
              </li>
              <li>
                <h4>在线培训项目：</h4>
                <p className="row">
                  医会播具有在线课程开发能力，能将企业/学会/协会的培训需求落地，转化为在
                  线课程供医生学习，并辅以考试系统，生成学习记录、考试评分等一系列的后台报表。
                </p>
              </li>
              <li>
                <h4>会后调研：</h4>
                <p className="row">
                  医会播提供多种方式创建问卷，在视频观看后自动弹出，后台记录分析数据，生成
                  报表，让你真正了解客户需求，随时对市场做出准确数据判断。
                </p>
              </li>
              <li>
                <h4>医生交流：</h4>
                <p className="row">
                  组建医生社群，建立企业营销新阵地
                </p>
              </li>
            </ul>
          </div>
          <div className="slogan">
            会播科技——让学术交流触手可及 健康咨询无处不在
          </div>
          <div className="contact">
            <ul className="contact-info">
              <li>邮箱: public@medicalsee.com</li>
              <li>电话: 0571-28220489</li>
              <li>地址: 杭州市西湖区万塘路262号万塘汇大厦南楼五楼氪空间</li>
            </ul>
            <div className="code-container">
              <div className="public"></div>
              <div className="weapp"></div>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
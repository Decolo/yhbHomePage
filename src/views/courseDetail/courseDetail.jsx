import React from 'react'
import fetch from '@/utils/fetch'
import Main from '@/components/main'
import VideoPlayer from '@/components/videoplayer'
import './index.scss'

export default class VideoDetail extends React.Component {
  state = {
    poster: '',
    date: '',
    summary: '',
    title: '',
    type: '',
    videoAddr: ''
  }
  componentDidMount() {
    const courseId = this.props.match.params.id
    this.fetchVideo(courseId)
  }
  async fetchVideo(courseId) {
    const result = await fetch({
      url: `/member/sec/liveroom/get?roomId=${courseId}`,
      method: 'GET'
    })
    console.log(result)
    debugger
    const { bigPicUrl, gmtModified, summary, title, type, videoAddr } = result
    this.setState({
      poster: bigPicUrl,
      date: gmtModified,
      summary,
      title,
      type,
      videoAddr
    })
  }

  render() {
    const { poster, date, summary, title, type, videoAddr } = this.state
    console.log(type)
    let videoJsOptions
    if (videoAddr) {
      videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: videoAddr,
          type: 'video/mp4'
        }],
        poster: 'https://img.medicalsee.com/' + poster,
        fluid: 'true', // put the player in the VideoPlayerWrap box
        playbackRates: [0.75, 1, 1.5, 2],
        controlBar: {
          volumePanel: {
            inline: false // vertical VolumeControl
          }
        },
      }
    }
    
    return (
      <Main>
        <div className="video-detail-container">
          <h3 className="title">{title}</h3>
          <p className="date">{date}</p>
          <div className="video-player-container">
            {
              videoAddr ? 
                <VideoPlayer videoJsOptions={videoJsOptions} />
              : null
            }
          </div>
          <p className="summary">{summary}</p>
        </div>
      </Main>      
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import Links from '../links/Links'
import Video from '../video/Video'
import Tabs from 'react-responsive-tabs'
import Image from '../image/Image'
import 'react-responsive-tabs/styles.css'
import './ContentPageContainer.css'

class ContentPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
			data: null
		}
		this.getData()
    this.getTabs = this.getTabs.bind(this)
    this.getLocalisedData = this.getLocalisedData.bind(this)
  }

  componentDidMount() {
		global.logPageView(window.location.pathname + window.location.search)
		this.props.changeStyle(this.props.style)
		global.logUserLocation()
  }
  
  getData() {
    // get data from JSON
    axios.get(this.props.filePath)
      .then(res => {
        this.setState({
					data: res.data
				})
      })
  }

  getLocalisedData(data) {
    const lang = this.props.lang
    const localisedData = data[lang] ? data[lang] : data['en']
    return localisedData
  }
  
  getTabs() {
    var data = this.state.data.tab
    return data.map((item, index) => ({
      tabClassName: `tab tab-style-${this.props.style}`,
      panelClassName: `panel panel-style-${this.props.style}`,
      title: this.getLocalisedData(item.title),
      getContent: () => {
        return (
          <div className='tabContent' key={index}>
            <div dangerouslySetInnerHTML={{__html: this.getLocalisedData(item.text)}} />
						<div className="content-page-videos">
							{item.video && item.video.map((video, index) => <Video key={index} url={video} /> ) }
						</div>
						{item.image && <img className="tab-image" src={item.image} />}
            <div className='tabLinks'>
              {item.links && item.links.length > 0 && <Links links={item.links} lang={this.props.lang} />}
            </div>
          </div>
        )
      },
    }));
  }

  render() {
    const data = this.state.data
    const lang = this.props.lang
    const style = {
      direction: lang === 'en' ? 'ltr' : 'rtl'
    }
    return (
      <div style={style} className={'wrapper'}>
        <h1 className={`content-page-title content-page-title-style-${this.props.style}`}>{data && this.getLocalisedData(data.title)}</h1>
        {data && data.topLevelImage && <Image img={this.getLocalisedData(data.topLevelImage)} />}
        {data && !data.arabicComplete && lang ==='ar' && <h3>Arabic content coming soon</h3> }
				{data && data.summary && <div className='summary' dangerouslySetInnerHTML={{__html: this.getLocalisedData(data.summary)}} />}
				<div className="content-page-videos">
					{data && data.topLevelVideo && data.topLevelVideo.map((video, index) => <Video key={index} url={video} /> ) }
				</div>
        {data && data.topLevelVideo && data.tab && <br/>}
        {data && data.tab && <Tabs items={this.getTabs()} />}
        {data && data.notes && <div className='notes' dangerouslySetInnerHTML={{__html: this.getLocalisedData(data.notes)}} />}
        {data && data.timeline && <Image img={this.getLocalisedData(data.timeline)}/>}
      </div>
    )
  }
}

export default ContentPageContainer
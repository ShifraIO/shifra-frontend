import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import WomensHealthIcon from '../../images/icons/familyhealth/womens-health.png'
import MensHealthIcon from '../../images/icons/familyhealth/mens-health.png'
import TeenHealthIcon from '../../images/icons/familyhealth/teen-health.png'
import ChildrensHealthIcon from '../../images/icons/familyhealth/childrens-health.png'
import MentalHealthIcon from '../../images/icons/familyhealth/mental-health.png'
import Violence from '../../images/icons/familyhealth/violence.png'

class FamilyHealth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: WomensHealthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Women\'s Health',
            'ar': 'صحة المرأة'
          },
          linkUrl: '/community-health/womens-health'
        },
        {
          imgSrc: MensHealthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Men\'s health',
            'ar': 'صحة الرجل'
          },
          linkUrl: '/community-health/mens-health'
        },
        {
          imgSrc: TeenHealthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Teen Health',
            'ar': 'صحة الأطفال' 
          },
          linkUrl: '/community-health/teen-health'
        },
        {
          imgSrc: ChildrensHealthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Children\'s Health',
            'ar': 'صحة المراهقين'
          },
          linkUrl: '/community-health/childrens-health'
        },
        {
          imgSrc: MentalHealthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Mental Health',
            'ar': 'الصحة العقلية' 
          },
          linkUrl: '/community-health/mental-health'
        },
        {
          imgSrc: Violence,
          theme: this.props.theme,
          titleText: {
            'en': 'Violence',
            'ar': 'العنف' 
          },
          linkUrl: '/community-health/violence'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(5);
  }
  render() {
    return (
      <GridPageContainer
        cards={this.state.cards}
        lang={this.props.lang} />
    )
  }
}

export default FamilyHealth

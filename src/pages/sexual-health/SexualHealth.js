import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import HealthyRelationshipsIcon from '../../images/icons/sexualhealth/healthy-relationships.png'
import SafeSexIcon from '../../images/icons/sexualhealth/safe-sex.png'
import StisIcon from '../../images/icons/sexualhealth/stis.png'
import SexualityIcon from '../../images/icons/sexualhealth/sexuality.png'

class SexualHealth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: HealthyRelationshipsIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Healthy Relationships',
            'ar': 'العلاقات الصحية' 
          },
          linkUrl: '/sexual-health/healthy-relationships'
        },
        {
          imgSrc: SafeSexIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Having Sex',
            'ar': 'الجنس الآمن' 
          },
          linkUrl: '/sexual-health/safe-sex'
        },
        {
          imgSrc: StisIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'STI\'s/ HIV',
            'ar': 'فيروس نقص المناعة المكتسب والأمراض الجنسية'
          },
          linkUrl: '/sexual-health/sti'
        },
        {
          imgSrc: SexualityIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Sexuality',
            'ar': 'النشاط الجنسي' 
          },
          linkUrl: '/sexual-health/sexuality'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(4);
  }
  render() {
    return (
      <GridPageContainer
        cards={this.state.cards}
        lang={this.props.lang} />
    )
  }
}

export default SexualHealth
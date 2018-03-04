import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import PregnancyIcon from '../../images/icons/pregnancynewborn/pregnancy-newborn.png'
import BirthIcon from '../../images/icons/pregnancynewborn/birth.png'
import PostnatalIcon from '../../images/icons/pregnancynewborn/postnatal.png'
import NewbornIcon from '../../images/icons/pregnancynewborn/newborn-12months.png'
import ModelsIcon from '../../images/icons/pregnancynewborn/models.png'
import ComplicationsIcon from '../../images/icons/pregnancynewborn/complications.png'

class PregnancyNewborn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: PregnancyIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Pregnancy',
            'ar': 'الحمل' 
          },
          linkUrl: '/pregnancy-newborn/pregnancy'
        },
        {
          imgSrc: ComplicationsIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Complications',
            'ar': 'مضاعفات' 
          },
          linkUrl: '/pregnancy-newborn/complications'
        },
        {
          imgSrc: BirthIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Labour & Birth',
            'ar': 'الولادة' 
          },
          linkUrl: 'pregnancy-newborn/birth'
        },
        {
          imgSrc: PostnatalIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Postnatal',
            'ar': 'بعد الولادة' 
          },
          linkUrl: 'pregnancy-newborn/postnatal'
        },
        {
          imgSrc: NewbornIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Newborn - 12 months',
            'ar': 'حديثي الولادة حتى 12 شهر' 
          },
          linkUrl: 'pregnancy-newborn/newborn'
				},
				{
          imgSrc: ModelsIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Models of Maternity Care',
            'ar': ''
          },
          linkUrl: 'pregnancy-newborn/models-maternity-care'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(3);
  }
  render() {
    return (
      <GridPageContainer
        cards={this.state.cards}
        lang={this.props.lang} />
    )
  }
}

export default PregnancyNewborn

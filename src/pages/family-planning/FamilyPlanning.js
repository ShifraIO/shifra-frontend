import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import BirthSpacingIcon from '../../images/icons/familyplanning/birthspacing.png'
import ContraceptionIcon from '../../images/icons/familyplanning/contraception-types.png'
import FertilityIcon from '../../images/icons/familyplanning/fertility.png'
import UnplannedPregnancyIcon from '../../images/icons/familyplanning/unplanned-pregnancy.png'

class FamilyPlanning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: BirthSpacingIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Birth Spacing and Planning',
            'ar': 'تخطيط الولادة والمدة الزمنية بين الحمل' 
          },
          linkUrl: '/family-planning/birth-spacing'
        },
        {
          imgSrc: ContraceptionIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Contraception',
            'ar': 'طرق منع الحمل' 
          },
          linkUrl: '/family-planning/contraception'
        },
        {
          imgSrc: UnplannedPregnancyIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Unplanned Pregnancy',
            'ar': 'الحمل الغير مخطط' 
          },
          linkUrl: '/family-planning/unplanned-pregnancy'
        },
        {
          imgSrc: FertilityIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Fertility',
            'ar': 'الإخصاب والعجز الجنسي' 
          },
          linkUrl: '/family-planning/fertility'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(2);
  }
  render() {
    return (
      <GridPageContainer
        cards={this.state.cards}
        lang={this.props.lang} />
    )
  }
}
export default FamilyPlanning

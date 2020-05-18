import React from 'react'

import * as SurveyCreator from 'survey-creator'
import 'survey-creator/survey-creator.css'

export const SurveyCreatorComponent = () => {
  SurveyCreator.StylesManager.applyTheme('default')
  const creator = new SurveyCreator.SurveyCreator(null, {})

  React.useEffect(() => creator.render('surveyCreatorContainer'), [])

  return <div id='surveyCreatorContainer' />
}

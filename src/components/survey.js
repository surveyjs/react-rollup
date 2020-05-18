import React from 'react'
import * as Survey from 'survey-react'
import 'survey-react/survey.css'

import * as Widgets from 'surveyjs-widgets'

import $ from 'jquery'
import 'select2/dist/js/select2.js'
import 'select2/dist/css/select2.css'

Widgets.select2tagbox(Survey, $)

export const SurveyComponent = () => {
  const json = {
    questions: [
      {
        type: 'tagbox',
        isRequired: true,
        choicesByUrl: {
          url: 'https://restcountries.eu/rest/v2/all'
        },
        name: 'countries',
        title: 'Please select all countries you have been for the last 3 years.'
      }
    ]
  }

  const survey = new Survey.Model(json)

  return <Survey.Survey model={survey} />
}

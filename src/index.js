import React from 'react'
import styles from './styles.module.css'
import * as Survey from 'survey-react'
import 'survey-react/survey.css'

export const ExampleComponent = ({ text }) => {
  const json = {
    questions: [
      {
        type: 'radiogroup',
        name: 'car',
        title: 'What car are you driving ??',
        isRequired: true,
        colCount: 4,
        choices: [
          'None',
          'Ford',
          'Vauxhall',
          'Volkswagen',
          'Nissan',
          'Audi',
          'Mercedes-Benz',
          'BMW',
          'Peugeot',
          'Toyota',
          'Citroen'
        ]
      }
    ]
  }

  const survey = new Survey.Model(json)

  return (
    <div>
      <Survey.Survey model={survey} />
      <div className={styles.test}>Example Component: {text}</div>
    </div>
  )
}

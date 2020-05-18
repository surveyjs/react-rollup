import React from 'react'
import styles from './styles.module.css'
import { SurveyComponent } from './components/survey'
import { SurveyCreatorComponent } from './components/creator'

export const ExampleComponent = ({ text }) => {
  return (
    <div>
      <div className={styles.test}>Example Component: {text}</div>

      <SurveyComponent />

      <SurveyCreatorComponent />
    </div>
  )
}

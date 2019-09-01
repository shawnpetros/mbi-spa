import * as CONSTANTS from './constants'

export const {
  BURNOUT_CONSTANTS,
  BURNOUT_RISK_CONSTANTS,
  SECTION_CONSTANTS
} = CONSTANTS

export const getResults = results => {
  return (
    burnout(results[0]) +
    depersonalization(results[1]) +
    personalAchievement(results[2])
  )
}

const burnout = tot => {
  if (tot < 18) return 0
  if (tot < 30) return 1
  return 2
}

const depersonalization = tot => {
  if (tot < 6) return 0
  if (tot < 12) return 1
  return 2
}

const personalAchievement = tot => {
  if (tot > 40) return 0
  if (tot > 33) return 1
  return 2
}

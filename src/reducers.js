import { combineReducers } from 'redux';

const alert = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return Object.assign(
        {},
        state,
        {alert_shown: true},
      )
    default:
      return state
  }
}

const rootReducer = combineReducers({
  alert
})

export default rootReducer

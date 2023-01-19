
import { BehaviorSubject } from 'rxjs'

const userSettings = {
  categories: ["food", "gas", "shopping"],
  username: "Tal",
  lang: 'he',
  favColor: 'steelblue',
  dob: '30-11-1982'
}

const _userSettings$ = new BehaviorSubject({})
const userSettings$ = _userSettings$.asObservable()

function getSettings() {
  _userSettings$.next(userSettings)
}
export const userService = {
  userSettings$,
  getSettings
}

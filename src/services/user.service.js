import { BehaviorSubject, of, getValue } from "rxjs"
const userSettings = {
  categories: ["food", "gas", "shopping"],
  username: "Tal"
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

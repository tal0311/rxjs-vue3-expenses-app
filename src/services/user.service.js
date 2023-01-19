
import { BehaviorSubject, map, of } from 'rxjs'

const userSettings = {
  categories: ["food", "gas", "shopping",],
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

function getByKey(key) {
  let userKey
  _userSettings$.pipe(
    tap((set) => userKey = set[key])
  )
  return of(userKey)

}
export const userService = {
  userSettings$,
  getSettings,
  getByKey
}

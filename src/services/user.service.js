
import { BehaviorSubject, map, of } from 'rxjs'

const userSettings = {
  categories: ["food", "gas", "shopping",],
  username: "Tal",
  lang: 'en',
  accountName: 'Direct',
  favColor: 'steelblue',
  accountNumber: 332211,
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

function updateUser(userSettings) {
  console.log('userSettings:', userSettings)
  _userSettings$.next(userSettings)
  const userSet = _userSettings$.getValue()
  console.log('userSet:', userSet)
}
export const userService = {
  userSettings$,
  getSettings,
  getByKey,
  updateUser
}

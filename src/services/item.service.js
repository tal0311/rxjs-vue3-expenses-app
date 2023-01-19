import exDB from "./../../data/todo.json"
import { BehaviorSubject, of } from "rxjs"

const gView = {
  with: window.innerWidth,
  view: "table"
}
const _ex$ = new BehaviorSubject([])
const ex$ = _ex$.asObservable()
const _filter$ = new BehaviorSubject({ txt: '', category: '' })
const filter$ = _filter$.asObservable()
const _view$ = new BehaviorSubject(gView)
const view$ = _view$.asObservable()

function query() {
  const filter = _filter$.getValue()
  console.log('filter:', filter)
  let ex = exDB
  ex = exDB.filter(_filterItems)

  _ex$.next(ex)
}

function _filterItems(expanse) {
  const filter = _filter$.getValue()
  const regex = new RegExp(filter.txt)

  return filter.category
    ? regex.test(expanse.content) && expanse.category === filter.category
    : regex.test(expanse.content)
}

function addEx({ content }) {
  const exToAdd = createEx(content)
  exDB.push(exToAdd)
  _ex$.next(exDB)
}

function removeEx(todoId) {
  const idx = exDB.findIndex((todo) => todo.id === todoId)
  exDB.splice(idx, 1)
  _ex$.next(exDB)
}

function updateEx(todoId, key, value) {
  const todo = getById(todoId)
  todo[key] = value
  const idx = exDB.findIndex((todo) => todo.id === todoId)
  exDB.splice(idx, 1, todo)
  _ex$.next(exDB)
}

function getById(todoId) {
  return exDB.find((todo) => todo.id === todoId)
}

function setFilter(filter) {
  _filter$.next(filter)
  query()
}

function setView() {
  gView.view = gView.view === "table" ? "card" : "table"
  return of(gView)
}

function createEx(content) {
  return {
    id: makeId(),
    content,
    cratedAt: Date.now()
  }
}

// UTILS
function makeId() {
  return (Math.random() + 1).toString(36).substring(2)
}

export const itemService = {
  ex$,
  view$,
  filter$,
  setView,
  query,
  addEx,
  removeEx,
  updateEx,
  setFilter
}

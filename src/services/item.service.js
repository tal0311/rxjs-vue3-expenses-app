import exDB from "./../../data/todo.json"
import { BehaviorSubject, of } from "rxjs"

const gView = {
  with: window.innerWidth,
  view: "table"
}
var gSortBy = {
  key: 'content',
  dir: -1
}
const _ex$ = new BehaviorSubject([])
const ex$ = _ex$.asObservable()
const _filter$ = new BehaviorSubject({ txt: '', category: '' })
const filter$ = _filter$.asObservable()
const _view$ = new BehaviorSubject(gView)
const view$ = _view$.asObservable()

function query() {
  let ex = exDB
  ex = exDB.filter(_filterItems)
  ex = _sortEx(ex, gSortBy)
  _ex$.next(ex)
}

function _filterItems(expanse) {
  const filter = _filter$.getValue()
  const regex = new RegExp(filter.txt)
  return filter.category
    ? regex.test(expanse.content) && expanse.category === filter.category
    : regex.test(expanse.content)
}

function _sortEx(ex, sortBy) {
  if (!sortBy.key) return ex
  return ex.sort((a, b) => {
    return typeof a[sortBy.key] === 'string'
      ? a[sortBy.key].localeCompare(b[sortBy.key]) * sortBy.dir
      : a[sortBy.key] - b[sortBy.key] * sortBy.dir
  })
}

function addEx({ content }) {
  const exToAdd = createEx(content)
  exDB.push(exToAdd)
  _ex$.next(exDB)
}

function removeEx(exId) {
  const exs = _ex$.getValue()
  const idx = exs.findIndex((ex) => ex.id === exId)
  exs.splice(idx, 1)
  _ex$.next(exs)
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



function setSort(key) {
  gSortBy.key = key
  gSortBy.dir = gSortBy.dir === -1 ? 1 : -1
  query()
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
  setFilter,
  setSort
}

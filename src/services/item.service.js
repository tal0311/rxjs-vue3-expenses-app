import exDB from "./../../data/expense.json"
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
const _filter$ = new BehaviorSubject({ txt: '', category: '', isArchived: false })
const filter$ = _filter$.asObservable()
const _view$ = new BehaviorSubject(gView)
const view$ = _view$.asObservable()
const _modal$ = new BehaviorSubject(null)
const modal$ = _modal$.asObservable()

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
    ? regex.test(expanse.content) && expanse.category === filter.category &&
    expanse.isArchived === JSON.parse(filter.isArchived)
    : regex.test(expanse.content) &&
    expanse.isArchived === JSON.parse(filter.isArchived)
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

function updateEx(exId, key, value) {
  const ex = getById(exId)

  console.log(typeof ex[key])
  typeof ex[key] === 'boolean'
    ? ex[key] = !ex[key]
    : ex[key] = value

  const idx = exDB.findIndex((ex) => ex.id === exId)
  exDB.splice(idx, 1, ex)
  query()
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
function getArchivedAmount() {
  return exDB.filter(ex => ex.isArchived).length
}

function setModalType(type) {
  _modal$.next(type)
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
  setSort,
  getArchivedAmount,
  modal$,
  setModalType
}

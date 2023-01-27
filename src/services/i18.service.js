

const trans = {
 // table header
 'name': {
  en: 'name',
  he: 'שם'
 },
 'amount': {
  en: 'amount',
  he: 'סכום'
 },
 'action': {
  en: 'actions',
  he: 'פעולות'
 },
 'app-title': {
  en: 'Expense Tracker rxjs',
  he: 'Rxjs - מעקב הוצאות'
 },
 // filter
 'search': {
  en: 'search',
  he: 'חיפוש'
 },
 'select-category': {
  en: 'Select Category',
  he: 'בחר קטגוריה'
 },
 // user-settings
 'user-settings': {
  en: 'User Settings',
  he: 'הגדרות משתמש'
 },
 'username': {
  en: 'User Name',
  he: 'שם משתמש'
 },
 'account-name': {
  en: 'Account Name',
  he: 'שם החשבון',
 },
 'account-number': {
  en: 'Account Number',
  he: 'מספר החשבון'
 },
 'language': {
  en: 'Language',
  he: 'שפה'
 },
 'user-set-btn': {
  en: 'Save Changes',
  he: 'שמור שינויים'
 },
}

export function getTrans(key, lang) {
 return trans[key][lang]
}
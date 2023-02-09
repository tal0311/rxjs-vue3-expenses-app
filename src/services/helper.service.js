const content = {
 'settings': {
  content: 'In the user settings we can change the main features the user works with.Username, color, language and more....',
  header: 'User Settings'
 },
 'app': {
  content: 'On this page the user performs the main actions in the application.Adds, updates, deletes and changes the order of expenses.In addition, you can search by name and by category.',
  header: 'Expenses Page'
 },
 'home': {
  content: 'It is a management application to track the user\'s expenses and income.In the navigation bar you can edit expenses or edit the user settings.',
  header: 'Home Page'
 },
 'statistics': {
  content: 'On this page you will find the data segmentation for your expenses',
  header: 'Statistics page'
 },
 'default': {
  content: 'Still not sure how to use this segment? contact as at tal.amit0311@gmail.com',
  header: 'it obvious 😉'
 }
}

export function getHelperContent(to) {
 return content[to.name] || content['default']

}


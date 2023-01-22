
const categoryColor = {
 food: '#db9616',
 shopping: '#9a08cb',
 gas: '#08a2ab',
 'default': '#46c378'
}

export function setCatColor(category) {
 return categoryColor[category] || categoryColor['default']
}
const nameValue = {
  'url': 'http://www.newscorpaustralia.com/',
  'sitename': 'NewsCorp',
  'dbhost': 'localhost',
  'dbuser': 'newscorpdbuser',
  'dbpass': '3f9ufvk29s',
}

// [
//   ['url', 'http://www.newscorpaustralia.com/'],
//   ['sitename', 'NewsCorp'],
//   ..
// ]

function *makeList(obj) {
  var keys = Object.keys(obj);
  for(let i = 0; i<keys.length; i++) {
    yield [keys[i], obj[keys[i]]];
  }
}

console.log([...makeList(nameValue)])

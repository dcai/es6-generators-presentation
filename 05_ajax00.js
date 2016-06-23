// Use callback
var data = {};
ajax('https://api.github.com/users/dcai/repos', function(err, res) {
  if (res.status == 200) {
    var json = JSON.parse(res.responseText);
    data['repos'] = _.map(json, function(r) {return r.full_name});

    var repo = data['repos'][0];
    ajax(`https://api.github.com/repos/${repo}/commits`, function(err, res) {
      if (res.status == 200) {
        var json = JSON.parse(res.responseText);
        data['commits'] = _.map(json, function(r) {return r.sha});
        // all done
      }
    })
  }
})


// Use promise
var data = {};
fetch('https://api.github.com/users/dcai/repos').then(response => {
  if (response.status >= 400) {
    throw new Error('Bad response from server');
  }
  return response.json();
}).then(json => {
  data['repos'] = _.map(json, function(r) {return r.full_name});
  var repo = data['repos'][0];
  return repo;
}).then(repo => {
  fetch(`https://api.github.com/${repo}/repos`).then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(json => {
    data['commits'] = _.map(json, function(r) {return r.sha});
    // all done
  });
})

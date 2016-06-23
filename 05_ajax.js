/*jshint esnext: true */
/*jshint asi: true */

let buildProfile = function* () {
  let json;
  let profile = {};
  let api = 'https://api.github.com/users/dcai/repos';
  json = yield ajax(api);
  profile['repos'] = JSON.parse(json).map(function(c) {
    return c.full_name;
  });
  api = 'https://api.github.com/repos/dcai/test/commits';
  json = yield ajax(api);
  profile['commits'] = JSON.parse(json).map(function(c) {
    return c.sha;
  });
  console.log(profile);
}

let iter = buildProfile();

let result = iter.next(); // result is an ajax thunk
result.value((err, response) => {
  if (err) { console.info(err) }
  let result = iter.next(response);  // result is an ajax thunk

  // process second ajax request
  result.value((err, response) => {
    if (err)  { console.info(err) }
    let result = iter.next(response); 
  });
});

// helpers
function ajax(url) {
  return function (callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
      let response = xhr.responseText;
      if(xhr.readyState != 4) return;
      if (xhr.status === 200) {
        callback(null, response);
      } else {
        callback(response, null);
      }
    };
    xhr.send();
  };
};

let runner = function(generatorFunction) {
  // recursive next()
  let next = function (err, arg) {
    if (err) return it.throw(err);
    var result = it.next(arg);
    if (result.done) return;
    if (typeof result.value == 'function') {
      // call next() as the callback()
      result.value(next);
    }
    else {
      next(null, result.value);
    }
  }

  let it = generatorFunction();
  return next();
}

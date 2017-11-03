var sr = require('samsung-remote');
var remoteTv = new sr({
  ip: '192.168.1.44'
});

remoteTv.isAlive(function(err){
  if (err){
    console.log('No TV found!!!');
  }
  else {
    remoteTv.send('KEY_VOLUP', function cb(err){
      if (err) {
        console.log('TV did not accept command', err);
      }
      else {
        console.log('Command accepted!');
      }
    })
  }
});
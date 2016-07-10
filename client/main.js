// ------------------
// -- TESTING PAGE --
// ------------------


const electron = require('electron')
const remote = electron.remote
const mainProcess = remote.require('./electron')

document.getElementById('button').addEventListener('click', _ => {
	console.log('d', mainProcess)

  mainProcess.selectDirectory(
  	function callback( filename ) {
  		document.getElementById('image').src = filename
  	}
  )

})
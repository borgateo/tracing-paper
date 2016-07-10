
const {app, BrowserWindow, dialog} = require('electron')
const fs = require('fs');

const path = require('path')

// require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null

function createWindow() {
	const options = {
    width: 800
  , height: 420
  , autoHideMenuBar: false
  , useContentSize: true
  , frame: false
  , transparent: true
  , alwaysOnTop: true
  , title: "Tracing Paper"
  , icon: `${__dirname}/icon/pencil.png`
  }

  // Create the browser window.
  mainWindow = new BrowserWindow( options )

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  mainWindow.focus()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if ( mainWindow === null) {
    createWindow()
  }
})

exports.selectDirectory = function( callback ) {
  dialog.showOpenDialog(
    mainWindow,
    { 
      properties: [ 'openFile' ],
      filters: [
        { 
          name: 'Images', 
          extensions: ['jpg', 'png', 'gif'] 
        }
      ]
    },
    function( fileName ) {
      if ( fileName === undefined ) { return }
      callback( fileName[0] )
    }
  );
}

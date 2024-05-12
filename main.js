const { app, BrowserWindow } = require('electron')
const path = require('path');
const  { setTitle } = require('./src/renderer/pages/title');


const createWindow = () => {
  let win = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    icon:path.join(__dirname,'resources','icon.png')  
    
  })

  setTitle(`錢包工具`,app.getVersion());
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  
})
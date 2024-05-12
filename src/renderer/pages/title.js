const { BrowserWindow } = require('electron');

function setTitle(title,version) {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    
    win.setTitle(`${title}  ${version}`);
  }
}

module.exports = {
  setTitle
};
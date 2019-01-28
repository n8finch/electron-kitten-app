import { BrowserWindow, ipcRenderer } from 'electron';
import { writeFile } from 'fs';

const selectElem = document.getElementById('cat-selector');
const printPDFButton = document.getElementById('print-pdf');

printPDFButton.addEventListener('click', (event) => {
  ipcRenderer.send('print-to-pdf');
});

ipcRenderer.on('wrote-pdf', (event, path) => {
  const message = `Wrote PDF to: ${path}`;
  document.getElementById('pdf-path').innerHTML = message;
});

// Print on click.
// printButton.addEventListener('click', (e) => {
//   console.log('click to print');

//   const printingWindow = new BrowserWindow();

//   // Use default printing options
//   printingWindow.webContents.printToPDF({}, (error, data) => {
//     if (error) throw error;
//     writeFile('/Users/natefinch/Desktop/printCats.pdf', data, (error) => {
//       if (error) throw error;
//       console.log('Write PDF successfully.');
//     });
//   });
// });

selectElem.addEventListener('change', (e) => {
  let selectedCat = e.target.value;
  const name = document.getElementById('cat-name');
  const bio = document.getElementById('cat-bio');
  const pic = document.getElementById('cat-pic');

  selectedCat = catsObj[0][selectedCat];

  name.innerHTML = selectedCat.name;
  bio.innerHTML = selectedCat.bio;
  pic.src = `./img/${selectedCat.pic}`;
});


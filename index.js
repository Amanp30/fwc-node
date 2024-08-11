import { FWC } from './FWC.js';

// Initialize the FWC instance
const fwc = new FWC();

// Define paths from the project root
const paths = [
  { src: 'src/imgs', dest: 'dist/imgs' },
  { src: 'src/logos', dest: 'dist/logos' },
];

// Add paths for processing
paths.forEach(({ src, dest }) => fwc.add(src, dest));

// To use in a production environment
// Copies files from source directories to destination folders
// fwc.copy().then(message => console.log(message));

// To clean destination folders (they will be emptied)
// fwc.clean().then(message => console.log(message));

// Use in development environment
fwc.watch();

// To stop watching for changes
// fwc.stop();

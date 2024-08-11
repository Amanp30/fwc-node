# FWC (File Watcher and Copier)

`FWC` is a Node.js module for automating file and directory management. It allows you to copy files and directories from a source to a destination while also providing the ability to watch for changes and automatically reflect those changes in the destination.

## Features

- **Automatic File Copying**: Synchronize files from source directories to destination directories.
- **File Watching**: Monitor source directories for changes and replicate those changes to the destination.
- **Flexible Configuration**: Customize file operations with options like overwriting and filtering.
- **Error Logging**: Provides detailed error logging for file operations.

## Installation

Make sure you have Node.js and npm installed. Then, install the required dependencies with:

```bash
npm install chokidar fs-extra
```

## Usage

### Import and Initialization

Start by importing the `FWC` class and creating an instance:

```js
import { FWC } from './FWC.js';

// Initialize the FWC instance
const fwc = new FWC();
```

### Adding Directories

Define the source and destination directories and add them to the instance:

```js
const paths = [
  { src: 'src/imgs', dest: 'dist/imgs' },
  { src: 'src/logos', dest: 'dist/logos' },
];

paths.forEach(({ src, dest }) => fwc.add(src, dest));
```

### Copying Files

To copy files from the source directories to the destination directories:

```js
fwc.copy().then(message => console.log(message));
```

### Cleaning Directories

To empty all destination directories:

```js
fwc.clean().then(message => console.log(message));
```

### Watching for Changes

To start watching the source directories for changes:

```js
fwc.watch();
```

### Stopping Watch

To stop watching the directories:

```js
fwc.stop();
```

## Methods

### `add(source: string, destination: string, options?: Object)`

Adds a new folder path with its source and destination directories. Optional file operation settings can be provided.

- `source`: The path to the source directory.
- `destination`: The path to the destination directory.
- `options`: Optional configuration for file operations (e.g., `overwrite`, `filter`).

### `copy()`

Copies all files from the source directories to the destination directories.

- Returns a promise that resolves with a success message.

### `clean()`

Empties all destination directories.

- Returns a promise that resolves with a success message.

### `watch()`

Starts watching all source directories for changes.

### `stop()`

Stops watching all directories.

## Error Handling

Errors during file operations are logged to the console. Ensure proper error handling in production environments.


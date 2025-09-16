# Math Wizard Desktop App

This project converts the Math Wizard web application into a desktop executable using Electron.

## Setup Instructions

1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org/
   - Choose the LTS version

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app in development mode**:
   ```bash
   npm start
   ```

4. **Build the executable**:
   ```bash
   npm run build-win
   ```

The executable will be created in the `dist` folder.

## Building Process

- `npm start` - Runs the app in development mode
- `npm run build-win` - Creates Windows executable (.exe)
- The built app will be in the `dist` folder

## App Icon

To customize the app icon:
1. Create an `.ico` file (256x256 px recommended) 
2. Save it as `assets/icon.ico`
3. Create a PNG version as `assets/icon.png` for the window icon

## File Structure

```
math-app/
├── html/           # Your HTML files
├── css/            # Your CSS files  
├── js/             # Your JavaScript files
├── assets/         # Icons and other assets
├── main.js         # Electron main process
├── package.json    # Project configuration
└── dist/           # Built executables (created after build)
```

## Notes

- The app opens your `html/index.html` as the main page
- Window size is set to 1200x800 with minimum 800x600
- Includes basic menu with File, View, and Help options
- Developer tools available via F12

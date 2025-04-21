# Eat-n-Split Project Structure & Workflow

This is a React application for tracking and splitting expenses with friends. The app allows users to manage a list of friends, track balances, and split bills with ease.

## Project Structure

- **Standard Create React App structure** with:
  - public - Static assets and HTML entry point
  - src - React components and styles
  - Configuration files (package.json, .gitignore)

## Component Hierarchy

- **App** (Main container)
  - **Sidebar** (Left panel)
    - **FriendsList** - Displays all friends
      - **Friend** - Individual friend component
    - **FormAddFriend** - Form to add new friends
    - **Button** - Reusable button component
  - **FormSplitBill** - Right panel form for bill splitting

## Core State Management

The app uses React's useState hooks to manage:

1. `friends` - Array of friend objects with name, image, and balance
2. `showAddFriend` - Boolean to toggle the add friend form
3. `selectedFriend` - Currently selected friend (or null)

## Application Workflow

1. **View Friends**:

   - App initializes with a preset list of friends
   - Each friend shows their name, photo, and balance status

2. **Add New Friends**:

   - Click "Add Friend" to show the form
   - Enter name and image URL (uses a random avatar service)
   - Submit to add them to the list

3. **Split Bills**:

   - Select a friend to open the split bill form
   - Enter bill total and your portion
   - Choose who paid the bill
   - Friend's portion is calculated automatically
   - Submit to update balances

4. **Track Balances**:
   - Positive balance: Friend owes you money
   - Negative balance: You owe your friend money
   - Zero balance: You're even

The app uses a clean, visual interface with color coding (green/red) to indicate debt direction and maintains all data in component state.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

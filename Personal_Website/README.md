# Personal Website Documentation
kkkkkk
### Directory Structure:

```
src                 
├── App.js
├── index.js
└── components
    ├── NavBar.js               <=== default header that exists in all pages
    ├── NavBar.css
    ├── Footer.js               <=== default footer that exists in all pages
    ├── Footer.css
    ├── Image.css               <=== css for default logo/photo items
    └── pages                   <=== directory containing items related to the 4 pages accessible via NavBar
        ├── About.js                <=== brief intro of myself
        ├── Mile_Stones.js          <=== recent experiences
        ├── Readings.js             <=== GoodReads sync
        ├── Readings.css          
        ├── Ttca.js                 <=== blog posts
        ├── Cards                   <=== card items belonging to Mile_Stones page  
        |   ├── Cards.js
        |   ├── Cards.css
        |   └── CardItem.js
        └── Posts                   <=== post items belonging to Ttca page
            ├── Posts.js
            ├── Posts.css
            └── PostItem.js
```
## **Classes**

### **Main**

This is the entry point to the program. It takes in arguments from the command line and based on the command (the first element of the `args` array) calls the corresponding method in `Repository`. It also validates the arguments based on the command to ensure that enough arguments are passed in.

### **Repository**

Repository is the router that contains all the methods respective to the input commands from the main class. Its instance variables are the physical directories, which are created only the first time the initialization method is called. Other methods manipulate the files within the directory (e.g `add`, `remove`, `commit`, and `checkout`).

### **Commit**

A commit is created everytime `commit` method is called from the Repository class. The commit object saves a linked list of blobs which point to each individual file blob. Each commit has the following instance variables:

* message: String message that the user inputted when committing
* timestamp: time at which the commit was made
* parent: SHA1 ID of its parent commit
* content: linked list of blobs

### **Blob**

Blob is the smallest object unit. Each blob represents an individual file in the current working directory. Relevant files are serialized into blobs and their pointer addresses are saved into a new commit object. File version specific to that commit is reversible by checking out the desired commit.

### **Branch**

Branch is a reference pointing to the most recent commit. It is used for checking out a particular branch.

### **Log**

Textfile holds the following information (identical to commit instance variables) as string:
  * commit SHA1 ID
  * timestamp
  * message

### **Utils**

Class provided by 61B staff for serializing cache into savable data. Allows reading/writing objects or `String` contents from/to files, as well as reporting errors when they occur. All objects are serialized with SHA1 encoding to commit files. They are later deserialized if requiring access to previous files.

## **Commands**

The following are the executable commands for the project.

#### 1. Initialize: `java gitlet.Main init`

* creates a new version-control system with the directory name `.gitlet`
* starts with an initial commit with `Thursday, 1 January 1970` timestamp and a `master` branch

#### 2. Add: `java gitlet.Main add [file name]`

* adds a copy of the `[file name]` to the `staging` directory
* newer file replaces the old file if `[file name]` exists in `staging`

#### 3. Commit: `java gitlet.Main commit [message]`

* creates a new commit object with files in `staging`
* `staging` is cleared once the method call is complete
* saves commit object into `commits` with its SHA1 ID
* new commit represents the head of the branch; current branch saves the most recent commit SHA1 ID in `branches`

#### 4. Remove: `java gitlet.Main rm [file name]`

* removes `[file name]` from the `staging` directory
* adds `[file name]` to the `removing` directory

#### 5. Log: `java gitlet.Main log`

* displays history of commits on the current branch

#### 6. Global-Log: `java gitlet.Main global-log`

* displays information of all the commits made

#### 7. Find: `java gitlet.Main find [commit message]`

* displays commit SHA1 ID of commits with `[commit message]`
 
#### 8. Status: `java gitlet.Main status`

* displays the following information:
   * name of existing branches (with an asterisk in front of the working branch)
   * files in `staging`
   * files in `removing`

#### 9. Checkout:

`java gitlet.Main checkout -- [file name]`

`java gitlet.Main checkout [commit id] -- [file name]`

`java gitlet.Main checkout [branch name]`

* overwrites the current working directory with the files in the selected file/branch
* changes content in `head` to the most recent commit of the selected branch


#### 10. Branch: `java gitlet.Main branch [branch name]`

* creates a branch with `[branch name]` that points to the current head commit
* only has the SHA1 reference to the commit object


11. Remove Branch: `java gitlet.Main rm-branch [branch name]`

* creates a branch with `[branch name]` that points to the current head commit


12. Reset: `java gitlet.Main reset [commit id]`

* deletes cache with the respective `[commit id]`

/////////////////

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

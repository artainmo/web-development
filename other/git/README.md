# GIT

## Table of contents
- [Codecademy course](#CODECADEMY-COURSE)


## CODECADEMY COURSE
### Basic git workflow
Git is a software that allows you to keep track of changes made to a coding project over time.<br>
Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed.<br>
Git also facilitates coworking and project/task management. 

To turn a directory into a git project, type in terminal in right directory 'git init', this will create a .git directory which will track your project.<br>
A git project can be viewed as at least three parts:
* local active `working directory` you are directly working in
* `Staging area`: temporary tracking of made changes
* `Repository`: where git permanently stores changes as different versions of the project

'git status' can be used to check the made changes and if they are tracked by git or not.<br>
In order for git to track the changes they have to be added to the staging area with the command `git add *`.<br>
`*` refers to all contents in current and downstream directories but one can also indicate specific files.

`git diff` allows to view differences between stagging area and working directory.

`git commit -m "Description of made changes"` permanently stores changes from the staging area inside the repository.<br>
Commits are stored chronologically in the repository and can be viewed with `git log`.

`git push` is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.

### Important git operations

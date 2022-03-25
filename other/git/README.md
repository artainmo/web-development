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

### Backtrack
The head commit represents the last commit and can be viewed with `git show HEAD`.<br>
`git checkout HEAD fileName` is used to reset working directory file to latest commit file.<br>
'git reset HEAD fileName` is used to reset the file in staging area to be same as HEAD commit.<br>
`git reset commit_SHA` is used to reset HEAD (latest commit version) to a specific prior commit, all commits SHA can be viewed with `git log` and only first 7 characters of SHA have to be indicated.

If you want to switch branch you will lose local changes that have not been commited.<br>
You can commit or if you do not want to commit you can `git stash`, which will temporarily store local changes.<br>
After you switch branches and come back to initial branch, to reset local changes use `git stash pop`.

If you realize after a commit you forgot something small that does not deserve its own commit, you can use 'git commit --amend --no-edit' to add the small changes to latest commit with same message.

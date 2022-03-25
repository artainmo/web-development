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

`git push` is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. Github for example allows remote repos in a cloud.

### Backtrack
The head commit represents the last commit and can be viewed with `git show HEAD`.<br>
`git checkout HEAD fileName` is used to reset working directory file to latest commit file.<br>
'git reset HEAD fileName` is used to reset the file in staging area to be same as HEAD commit.<br>
`git reset commit_SHA` is used to reset HEAD (latest commit version) to a specific prior commit, all commits SHA can be viewed with `git log` and only first 7 characters of SHA have to be indicated.

If you want to switch branch you will lose local changes that have not been commited.<br>
You can commit or if you do not want to commit you can `git stash`, which will temporarily store local changes.<br>
After you switch branches and come back to initial branch, to reset local changes use `git stash pop`.

If you realize after a commit you forgot something small that does not deserve its own commit, you can use 'git commit --amend --no-edit' to add the small changes to latest commit with same message.

### Github
GitHub is popular hosting service for Git repositories. GitHub allows you to store your local Git repositories in the cloud. With GitHub, you can backup your personal files, share your code, and collaborate with others.<br>
In short, GitHub is a tool for working with Git. There are other services to host Git repositories, but GitHub is a trusted, free service used by organizations across the world, big and small.<br>
Although both GitHub and Git have similar names, GitHub is a service while Git is a development tool that can be used outside of and without GitHub.<br>
Github grants developers access to a massive community of developers around the world who openly share their code, projects, and software development tools with each other.<br>
Therefore, to continue working on Git skills, creating a programming portfolio, or finding work, GitHub can help.

The github workflow goes as follows:
1. Create a branch
2. Commit changes
3. create a pull request
4. review pull request
5. merge and delete branch

A branch is a git repo with own history of commits, multiple branches can exist on one project.<br>
A conflict occur when different programmers made changes to same file/code and try to push that code to the same repo.<br>
On same project, next to one main branch, each programmer should have own branch to avoid conflicts.<br>
By using separate branches, the main project remains intact and unaffected before the changes are reviewed and merged into the main project.<br>
The main branch is usually the working version of a project and contains the production code, so it’s very important to only merge clean and correct code into it!<br>
Pull Requests on GitHub allow collaborators to review and give feedback on proposed code changes before they are merged to the main branch.<br>
When creating a pull request it is important to have a good description of the changes and not have too much changes in same pull request, the reviewer should comment clearly and propose solutions. It is called pull request because the main branch has to pull from another branch to merge.<br>
Unactive branches can be deleted.

In repository different sections exist such as code, issues, pull requests, actions... The projects section can be used to create a todo list.<br>
Different columns can be created, todo, doing and done. Notes can be draged across the different columns to see what is left to be done for you or what you were working on...

Markdown provides a lightweight syntax to style any text document so that it can be converted to HTML for viewing and publishing.<br>
Github allows to format written text in markdown, this is usually done in README.md files or any files with md or markdown as extension.<br>
It is used to explain more about the project/repo.<br>
Usually a repo at least has one README.md file but technically each directory in the repo can have one.<br>
Here is a markdown cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

### Git branching

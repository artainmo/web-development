# GIT

## Table of contents
- [Codecademy course](#CODECADEMY-COURSE)
 - [Basic git workflow](#Basic-git-workflow)
 - [Backtrack](#Backtrack)
 - [Github](#Github)
 - [Git branching](#Git-branching)
 - [Git teamwork](#Git-teamwork)
 - [Best practices for github repositories](#Best-practices-for-github-repositories)
 - [Collaborating with the github community](#Collaborating-with-the-github-community)
 - [Github features](#Github-features)

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
A conflict occurs when different programmers made changes to same file/code and try to push that code to the same repo.<br>
On same project, next to one main branch, each programmer should have own branch to avoid conflicts.<br>
By using separate branches, the main project remains intact and unaffected before the changes are reviewed and merged into the main project.<br>
The main branch is usually the working version of a project and contains the production code, so it’s very important to only merge clean and correct code into it!<br>
Pull Requests on GitHub allow collaborators to review and give feedback on proposed code changes before they are merged to the main branch.<br>
When creating a pull request it is important to have a good description of the changes and not have too much changes in same pull request, the reviewer should comment clearly and propose solutions. It is called pull request because the main branch has to pull from another branch to merge.<br>
Unactive branches can be deleted.

Markdown provides a lightweight syntax to style any text document so that it can be converted to HTML for viewing and publishing.<br>
Github allows to format written text in markdown, this is usually done in README.md files or any files with md or markdown as extension.<br>
It is used to explain more about the project/repo.<br>
Usually a repo at least has one README.md file but technically each directory in the repo can have one.<br>
Here is a markdown cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

### Git branching
See branching concept in github chapter.

'git branch' allows you to view the branch you are on and all the branches that exist.<br>
'git branch nameNewBranch` allows you to create a new branch.<br>
'git checkout nameBranch` allows you to switch to another branch.<br>
'git merge nameBranch` allows the current branch to merge with another branch, meaning the current branch will change based on the other branch.

 merge conflict occurs when different branches with changes on similar files try to merge.<br>
 The conflicts will be indicated and you can chose from the code what branch version you want to keep.<br>

After a succesful commit a branch is not always kept, especially if you create a branch for each new feature, in this case it can be deleted with `git branch -d nameBranch`.<br>

### Git teamwork
A remote is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations.<br>
Collaborators work on the project independently, have their own branch, and merge changes after reviewing together.

`git clone repoLink localName` git clone is used to clone on local computer a remote repository.<br>

origin/master is a default-existing branch, used as intermediary before merging with master branch, to verify code-changes.

'git fetch` will verify if changes have been made on remote repository compared to local and will set those changes on a branch called origin/master, if you want to set those changes in your local master branch use `git merge origin/master` while being on master branch.<br>
'git pull' directly sets the remote repository changes in current branch, bypassing the verification step with origin/master.

'git push origin branchName` will push a certain branch to origin/master branch, others will be able to review and merge the changes in origin/master into the master branch.<br>
`git push` is used to directly upload local repository commits to the remote repository branch, bypassing the verification step with origin/master.<br>

### Best practices for github repositories
A pull request is a feature of github to review code before merging it from one branch to the main branch.<br>
A pull request can be created from the software interface pull request section on repository.<br>
Teammates can accept or reject the proposed changes, each pull request has own discussion forum for feedback.<br>
Teammates make suggestions, the proposed changes can be updated with further commits until they are accepted by teammates, leading to a merge.<br>
When creating a pull request try to answer in title 'What?', in description 'Why?' and 'How?'. Make clear commit messages and set comments in code when necessary. Reduce size of pull requests, make one for each new feature. Respond fast to pull request and make clear suggestions.

rebase is an alternative to merge. The difference lies in the commit history, merge only merges code, while rebase also merges the commit history, letting source branch commit history overwrite destination branch commit history.<br>
It is usually used to merge the main branch back into a working branch, it makes visualizing past commits easier.<br>
Because rebase overwrites and thus deletes commit history, it is considered dangerous and thus only recommended to use locally.

In repository settings branch section, we can setup the rule consisting of forcing pull requests when wanting to merge a working branch to the main branch.<br>
In repository settings collaborators section, we can add new users and give them certain permissions.<br>
GitHub Organizations provide its members a way to collaborate on multiple projects across multiple repositories.<br>

Sometimes we have in our repository files that we know in advance we will never want to commit.<br>
A .gitignore file can be created inside the repository to indicate which files should not be commited nor added to the stagging area.<br>
Each line in .gitignore corresponds to a file, directory, or pattern (such as file extensions) we would like to ignore when staging.

When wanting to delete files in repository locally but also in remote repository after push or merge, one has to explicitly remove it by using `git rm` instead of simply 'rm'.

### Collaborating with the github community
Profiles can be followed to stay up-to-date with others work, having well-rounded profiles creates more legitimacy towards recruiters and when wanting to make contributions to open-source projects.<br>
A well-rounded profile contains different projects, well-written READMEs, filled-out activity trackers.

Github's seach feature can be used to explore other projects, developers or companies, this can be used as inspiration or to learn from others.

Open-source-projects have their code open to the public and take suggestions from them.<br>
Contributing to open-source-projects is great to grow in experience.<br>
To contribute, you can start at any repository’s issues page, where bugs and potential new features are listed. Then, you can fork the repository to work on a specific issue and eventually make a pull request.<br>
A fork consists of copying another's project into one of your projects, it will contain a 'compare & pull request' button that enables you to make a pull request on the original project from your forked project.

### Github features
In repository different sections exist such as code, issues, pull requests, actions... The projects section can be used to create a todo list relative to a certain 'project' in a repository.<br>
Different columns can be created, todo, doing and done. Notes can be draged across the different columns to see what is left to be done for you or what you were working on...

Github issues allows project management by listing tasks and organize them into which are open and in progress while containing own discussion forum.<br>
Those can even be referenced in pull requests and in other issues and receive tags such as feature or bug.

The github command line interface (CLI) allows one to interact with issues and pull requests from the terminal instead of the software interface.

Github actions can be used to automate certain tasks, such as using automated tests after a pull request or notify collaborators after a branch merged into the main.


# HackYourOwn
HYO website

# Building
## Prerequisites
1. [Git](https://git-scm.com/)
2. [Node](https://nodejs.org/en/)
    1. If you're on Unix/macOS/WSL, consider using [nvm](https://github.com/nvm-sh/nvm#about) to install instead.
3. [GitHub](https://github.com/) account

## Setup
1. Hit the *Fork* button in the top right corner to fork the repository to your GitHub.

2. Clone the resulting repository.
```
git clone git@github.com:<your GitHub username>/HackYourOwn.git
```

If you don't [have SSH keys set up](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) with your GitHub, you can also use
```
git clone https://github.com/<your GitHub username>/HackYourOwn.git
```

3. Enter the cloned repository and install dependencies.
```
cd HackYourOwn
npm install
```

4. Start a development server to see your changes rendered live as you make them.
```
npm run dev
```

5. View the rendered content at [http://localhost:3000](http://localhost:3000).

# Contributing
If you would like to contribute, please follow these steps.
1. Make your desired changes in your local cloned repository.
2. View changed files with `git status`.
3. Add each changed file to the next commit with `git add <filename>`.
4. Commit your changes with `git commit -m "<insert informative commit message describing your changes>"`.
5. Push the changes to your remote repository with `git push`.
6. Open a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository on GitHub.

# React Notes

## Setting Up:

```
npx create-react-app APP-NAME
```

- Go to github
- Create a Repo

```
git remote add origin https://github.com/REPO
git remote -v
git push -f origin master
```

Current Node Sass Version compatible with React:

```
npm i node-sass@4.14.1
```

<hr>

## Deploying to GitHub Pages

Install gh-pages

```
npm i gh-pages
```

Add the following to scripts in packages.json:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Create Github Workflow by copying template from whereever codefellows/config folder is located:

```
cp -rp .../codefellows.../configs/.github .
```

Setup GitHub Token:

- Github Settings >> Developer Settings >> Personal Access Tokens >> Generate New Token
- Add a note >> Checkbox Repo & Workflow >> Generate Token
- Copy Token

Go To Repository Setting >> Secrets >> New Repository Secret
Enter the following:

```
Name: PERSONAL_TOKEN
Value: paste_token_here
```

Activate Github Pages  
Grab the site address github give you
In package.json add the following:

```
"homepage": "the_url_github_gives_you"
```

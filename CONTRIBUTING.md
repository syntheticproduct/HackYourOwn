# Getting started:

First step would be to fork the repo.
Then follow this tutorial: https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/

NOTE: **WE ARE USING NextJS and Material UI in this project!!**

# Contributing a new page

Since we are using nextjs, we are using its routing. Read more here: https://nextjs.org/docs/routing/introduction.
Whenever you create a new page, use nextjs routing.

We have it set up so that the aboslute path starts at `/src`, so when importing for example, instead of doing `../`, just do `[foldername]/[file/folder]` etc. You can see examples in the code if you are still confused.

Whenever you create a new page, create a folder in src/Pages so named `Page[Page Name]`, then have a seperate text, card file exported which you would then import to the file in your orginal page file.

If you want to create a new component that could be used anywhere do it in `src/components` which you then create an folder with the name of the component, eg. Cards. NOTE that we are using **MATERIAL UI** so you can used styled components. Look at the code for an example.

# Updating an existing page

Step 1: Check if the component is styled yet in `src/components`, if it isn't and you want to use custom styling (Note if your component cannot be reused, then skip this step) create a new folder in components with the component name as the name of the folder and the file names in the folder have to be called `Styled[component].styled.js` then create a file name `[component].js` which imports the styled component.
Step 2: Import the styled component or the custom component or the orginal material ui component into `src/Pages/Page[page your updating]` to be customized.
Step 3: Export the customized component and then import it in `pages/[page name].js`
Step 4: Make the PR :)

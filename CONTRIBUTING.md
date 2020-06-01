First step would be to fork the repo.
Then follow this tutorial: https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/

WE ARE USING NextJS and Material UI in this project!!

Since we are using nextjs, we are using its routing. Read more here: https://nextjs.org/docs/routing/introduction.
Whenever you create a new page, use nextjs routing.

We have it set up so that the aboslute path starts at /src, so when importing for example, instead of doing ../, just do [foldername]/[file/folder] etc. You can see examples in the code if you are still confused.

Whenever you create a new page, create a folder in src/Pages so named `Page[Page Name]`, then have a seperate text, card file exported which you would then import to the file in your orginal page file.

If you want to create a new component that could be used anywhere do it in `src/components` which you then create an folder with the name of the component, eg. Cards. NOTE that we are using **MATERIAL UI** so you can used styled components. Look at the code for an example.


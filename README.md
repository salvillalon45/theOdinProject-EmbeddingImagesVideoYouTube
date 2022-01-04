<h1 align="center">
[The Odin Project: Node] - Project: Embedding Images and Video
</h1>

## Intro

-   The project is to work with media by building YouTube’s video player page. I also practice properly organizing my website with Semantics tags
-   For this project, I decided to use tailwind css to easily use utilities I need that are commonly used
-   You can find more on the project here: [The Odin Project - Embedding Images and Video](https://www.theodinproject.com/paths/full-stack-javascript/courses/html-and-css/lessons/embedding-images-and-video)

### 📗 Fonts used

-   [Roboto](https://fonts.google.com/specimen/Roboto?preview.text=Back%20at%20volunteering&preview.text_type=custom&category=Sans+Serif)

### 🎨 Color Reference

|  Color            |  Hex                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| Blue              |  ![#248eff](https://via.placeholder.com/10/248eff?text=+) `#248eff`  |
| Grey              | ![#827876](https://via.placeholder.com/10/827876?text=+) `#827876`   |
| Black             |  ![#181818](https://via.placeholder.com/10/181818?text=+) `#181818`  |
| Search Bar Black  | ![#121212](https://via.placeholder.com/10/121212?text=+) `#121212`   |
| Dark Grey         | ![#303030](https://via.placeholder.com/10/303030?text=+) `#303030`   |
| Light Black       |  ![#202020](https://via.placeholder.com/10/202020?text=+) `#202020`  |

## Overall

### What I Learned

-   This project was great since I got to learn more about semantic tags. I got to practice and have a better idea of when to use them. I used `aside, main, section, article, header, nav` in the website
-   Also learned what is the meaning behind reset.css! I learned that browsers put their own CSS on a html so it is good to use a reset.css file to clear that styling
-   I also learned the proper way to create css selectors. I used to write them with camelcase syntax, but I learned that proper convention is to use dashes in between
-   Also I finally understand the difference between span and div. They are both tags used solely for styling purposes. Span are inline and div are block elements. This showed me different ways of organizing the content so that I do not have to always rely on flexbox since span will give me inline
-   I also learned how to install tailwindcss into a simple HTML/CSS website. It took me some time but here is what happened

    -   When I ran `npx tailwindcss init` it gave an error

    ```
    Salvador Villalon@DESKTOP-OGUBHNT MINGW64 ~/Documents/projects/personal/courses/odin/4.) html & css/projects/theOdinProject-EmbeddingImagesVideoYouTube (main)
    $ npx tailwindcss init
    'css\projects\theOdinProject-EmbeddingImagesVideoYouTube\node_modules\.bin\' is not recognized as an internal or external command,
    operable program or batch file.
    node:internal/modules/cjs/loader:936
    throw err;
    ^

    Error: Cannot find module 'C:\Users\Salvador Villalon\Documents\projects\personal\courses\odin\tailwindcss\lib\cli.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
    code: 'MODULE_NOT_FOUND',
    requireStack: []
    }
    ```

    -   I ran into this error everytime I tried to run the command `npx tailwindcss init`. To fix it I did the following:
        -   Install the latest version of node. I was using v14.15.4, but now I have v16.13.1
        -   Doing this also updated npm and npx which are now 8.1.2
        -   Then I tried npx tailwindcss init, but I still got an error
        -   I then tried this command `npx tailwindcss-cli@latest init --postcss`. I see that also `npx tailwindcss-cli@latest init` this command works as well
        -   And I got it working!
        -   I then created this script to help build the stylesheet `"build-css": "npx tailwindcss-cli@latest -i ./assets/stylesheets/tailwind.css -o ./public/assets/stylesheets/tailwind.css"`
        -   I included npx in the command since using `yarn tailwindcss-cli@latest init` nor `npm run tailwindcss-cli@latest init` was not working

## Next Steps

-   Continue using semantic tags to properly organize the website
-   Use `display: grid` since it better to use when organizing content instead of `display: flex`
-   Get more familiar with Media Queries and how they are used
-   Do more preparation in paper so that it is easier when making the website

## Technologies:

-   HTML
-   CSS
-   Tailwind
-   Netlify

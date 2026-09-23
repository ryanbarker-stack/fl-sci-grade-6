# Publish on GitHub Pages — beginner guide

## Recommended: a separate repository

Use a new repository named `project-discovery`. It keeps this questionnaire's files and updates separate from your other classroom activities. You get one stable URL to paste into Classroom. The website needs no build process or installed packages.

A folder inside your existing classroom repository also works; directions are below. Use that route if you already know your existing site's publishing folder and want to keep every activity together.

## Create and upload

1. Download and unzip the website package on your computer. Open its `project-discovery` folder. You should see `index.html`, `css`, and `js`, alongside the guides and examples.
2. Sign in to GitHub. Use the **+** menu → **New repository**. Name it **project-discovery**. For a simple GitHub Free Pages setup, use a public repository. The application files contain no real student information. Never add student responses or an identity map.
3. Add a README when creating the repository so the `main` branch exists, then choose **Create repository**.
4. In the repository's **Code** tab, choose **Add file → Upload files**.
5. Drag **index.html**, the **css** folder, and the **js** folder from inside the unzipped folder into the upload area. Keep the folder structure. These three items are the whole running website. Do not upload the ZIP as the website, and do not upload an extra outer `project-discovery` folder if you want the URL shown below.
6. Confirm the upload list contains `index.html`, `css/styles.css`, and all eight `js/*.js` files. For example, the settings file must be `js/config.js`, not a root-level `config.js`.
7. Write a commit message such as **Add Project Discovery website**. Choose the offered **Commit changes** action. If GitHub instead asks you to propose a new branch, create the pull request and merge it into `main` so the published branch receives the files.

The documentation, tests, and fictional examples can stay on your computer. They are not required online. The optional `package.json` is a developer convenience, not an installation requirement.

## Enable Pages and find the link

1. Open the repository's **Settings** tab. If it is hidden, use the repository's overflow menu.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **main** and **/(root)**. Click **Save**.
5. Wait for the Pages build to finish. The **Actions** tab shows the deployment's progress and any failure. Then return to **Settings → Pages** and use **Visit site**, or copy the published URL displayed there.
6. Your project-site URL normally has this shape: `https://YOUR-USERNAME.github.io/project-discovery/`. Use the actual URL GitHub displays. Do not give students the repository's `github.com/...` Code page.
7. Open the published link in a new tab. Confirm the title, grade buttons, questionnaire styles, and both grade pathways. Use HTTPS; enable **Enforce HTTPS** when available.

If you see 404, confirm the Pages source is `main / (root)`, the deployment succeeded, and `index.html` is directly at that root. If the page is unstyled, check that `css` and `js` retained their folder names and the file paths match. GitHub paths are case-sensitive. Avoid changing names casually.

## Add it to Google Classroom

Create a normal assignment. Paste the supplied `Google_Classroom_Assignment.txt`, replace its website placeholder with the actual Pages URL, and attach that URL as a link if useful. Students open the website, create a TXT locally, and manually attach the TXT to the assignment. No Classroom credentials or connection settings go into the code.

Test on one actual school Chromebook before class: enter a fictional ID, save and reopen a draft, complete the questionnaire, download the TXT, and attach it in a test assignment. School filtering and download policies need this real-device check.

## If you use your existing classroom repository

Keep its existing Pages settings unchanged. Find the folder that currently publishes: usually the repository root or its `docs` folder. Add a folder named `project-discovery` there, containing `index.html`, `css`, and `js`.

For an existing project site at `https://YOUR-USERNAME.github.io/classroom/`, the questionnaire would normally be at `https://YOUR-USERNAME.github.io/classroom/project-discovery/`. For an existing user site at `https://YOUR-USERNAME.github.io/`, it would be `https://YOUR-USERNAME.github.io/project-discovery/`. Confirm the actual link after deployment. Do not replace the old site's root `index.html`.

## Update without losing students' work

1. Download a backup copy of the current site or retain its GitHub commit before editing.
2. Change only the needed source files locally. A text-only correction can retain the same questionnaire version, question IDs, and option values.
3. Use **Add file → Upload files** from the same repository folder. Upload the revised files/folders into their original paths and commit the change. Check the new deployment under Actions.
4. Test after a hard refresh (`Ctrl+Shift+R` on a Chromebook). Students with an open tab continue using the version loaded into that tab until they refresh.
5. Avoid updates during a class collection. Ask students to download drafts first if an update is necessary.
6. For changed question meanings, IDs, options, required fields, or scales, increase `questionnaireVersion` in `js/config.js`. Do not reuse an option value for a different meaning. The importer refuses version-mismatched drafts rather than silently changing responses.
7. Keep the old version available at its old URL until outstanding drafts are complete; publish a breaking revision in a new versioned folder or repository and update the Classroom link for future classes. Browser saves are scoped by URL path. Moving the site does not move local saves, but draft files remain portable to the matching version.
8. Already downloaded TXT files and Classroom submissions are not changed by a website update. Keep the version printed in each file when processing it later.

## Official help used to verify these directions

Checked September 23, 2026; interface labels may vary with account permissions.

- [Create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configure a branch publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Upload files and folders](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Enforce HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Students: attach a file and turn in work](https://support.google.com/edu/classroom/answer/6020285?co=GENIE.Platform%3DDesktop&hl=en)

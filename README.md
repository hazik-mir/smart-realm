# Smart Realm — static GitHub Pages site

A mobile-first, single-page Minecraft community site built with plain HTML, CSS and JavaScript. No build step or dependencies are needed. The included server/event copy is clearly marked as example content and must be replaced or removed before launch.

## Files

- `index.html` — page content, metadata and navigation
- `styles.css` — responsive visual design
- `script.js` — mobile menu, server filters and sample-content notice
- `icon.png` — local logo and favicon (created for this project because no supplied icon was present)
- `IMAGE-CREDITS.md` — image source and license notes
- `robots.txt` and `sitemap.xml` — basic crawler files; update the domain before publishing

## Before publishing

1. Replace example server names, descriptions and event/giveaway cards in `index.html` with confirmed details, or remove them. Do not publish unverified IPs, prize claims, dates or entry rules.
2. The Discord URL is set to `https://discord.gg/xJpP79EB4y` in all CTAs. Change it only if the invite changes.
3. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in the canonical and Open Graph URLs in `index.html`, and update `sitemap.xml` and `robots.txt` to the final public URL. For a custom domain, use `https://yourdomain.example/`.
4. Review image links and the license notes in `IMAGE-CREDITS.md`. Wikimedia Commons URLs can redirect to the currently hosted file. If using the village panorama, preserve CC BY-SA 4.0 attribution and share-alike obligations.
5. If the client supplies a different `icon.png`, overwrite the included file with that same filename; it is used in the header and as the favicon.

## Deploy to GitHub Pages

1. Create a GitHub repository for the site and add the contents of this folder at the repository root.
2. Push the files to the default branch (usually `main`).
3. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub will show the published URL after deployment.
4. Update canonical/Open Graph metadata and crawler files with that URL, commit and push the changes.

## Connect a custom domain

1. Buy/register the domain with a registrar and add it under **Settings → Pages → Custom domain** in the repository.
2. At the registrar, add the DNS records GitHub Pages currently specifies for the chosen host type (apex domain or subdomain). DNS values can change, so use GitHub's current Pages documentation and the values shown in repository settings.
3. Wait for DNS verification, enable **Enforce HTTPS** when GitHub makes it available, then update the canonical URL, Open Graph URL and `sitemap.xml` to the custom domain.
4. Keep the domain renewed with the registrar. GitHub Pages serves the static website; domain registration is separate.

## Local preview

Open `index.html` directly in a browser, or use any static file server. The project has no package installation or compile step.

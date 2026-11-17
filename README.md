# Jiyi Yang (杨佶懿) — personal website

Bilingual (EN/中文) academic homepage built with [al-folio](https://github.com/alshedivat/al-folio).
Live: https://foreveryoungjay.github.io/yangjiyi/

Edit content in `_pages/`, `_news/`, `_bibliography/papers.bib`. Each page has `<div class="en">` and `<div class="zh">` blocks; `assets/js/lang.js` switches between them.

## Updating the site

The `Deploy site` GitHub Action builds and deploys automatically on push. If Actions can't run (e.g. an account billing lock), build with Docker and push the result to `gh-pages`:

```bash
docker compose build
rm -rf /tmp/yj-site && mkdir -p /tmp/yj-site
docker compose run --rm --no-deps -T -e JEKYLL_ENV=production -v /tmp/yj-site:/out --entrypoint sh jekyll \
  -c "cd /srv/jekyll && bundle exec jekyll build -d /tmp/_site && cp -r /tmp/_site/. /out/"
cd /tmp/yj-site && touch .nojekyll && git init -q -b gh-pages && git add -A && git commit -qm deploy \
  && git push -f https://github.com/ForeverYoungJay/yangjiyi.git gh-pages
```

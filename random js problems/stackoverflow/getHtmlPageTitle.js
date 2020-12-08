let html = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head prefix="og: http://ogp.me/ns#">
  <link rel="preconnect" href="https://interactive-examples.mdn.mozilla.net" pr="0.75" />
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  <title>String.prototype.match() - JavaScript | MDN</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
`;

// let title = html.match(/(?:<title>).+(?:<\/title>)/i);
let match = /(?:<title>)(.+)(?:<\/title>)/i.exec(html);
title = match && match[1];
console.log(title);
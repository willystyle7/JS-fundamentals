let content = `/******************************************************************
Theme Name: Starter Theme
Theme URI:
Description: Custom Wordpress starter theme
Author:
Author URI:
Version: 1.0.0
Tags: fluid-layout, responsive-layout, translation-ready

License: WTFPL
License URI: http://sam.zoy.org/wtfpl/
------------------------------------------------------------------*/

.sticky {}          /* DO NOT EDIT THIS */
.gallery-caption {} /* THESE ARE USELESS */
.bypostauthor {}    /* THEY ARE ONLY TO KEEP THEME CHECK HAPPY */`;

let newVersion = 3;
content = content.replace(/^Version: \d+\.\d+\.\d+$/mg, function(match, index) {
    return match.replace(/\.\d+$/, newVersion);
});

console.log(content);
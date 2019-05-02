// dato.config.js
const htmlTag = require('html-tag');


const toHtml = (tags) => (
    tags.map(({ tagName, attributes, content }) => (
        htmlTag(tagName, attributes || {}, content)
    )).join("")
);

module.exports = (dato, root, i18n) => {
    // Create a YAML data file to store global data about the site
    root.createDataFile('data/settings.yml', 'yaml', {
        faviconMetaTags: toHtml(dato.site.faviconMetaTags),
        seoMetaTags: toHtml(dato.homepage.seoMetaTags),
    });

    root.createPost(`content/imprint.md`, 'yaml', {
        frontmatter: {
          title: dato.imprint.title,
          slug: dato.imprint.slug,
          seoMetaTags: toHtml(dato.imprint.seoMetaTags),
        },
        content: dato.imprint.text
    });

    root.createPost(`content/privacy.md`, 'yaml', {
    frontmatter: {
        title: dato.privacy.title,
        slug: dato.privacy.slug,
        seoMetaTags: toHtml(dato.privacy.seoMetaTags),
    },
    content: dato.privacy.text
    });

    root.directory("content/posts", (dir) => {

        dato.posts.forEach((post, index) => {

            dir.createPost(`${post.slug}.md`, "yaml", {
                frontmatter: {
                    title: post.title,
                    publishedDate: post.createdAt,
                    type: "posts",
                    image: post.image.url(), 
                    date: post.meta.publishedAt,
                    tag: post.tags.toMap(),
                    intro: post.intro,
                    weight: index,
                    seoMetaTags: toHtml(post.seoMetaTags),
                },
                content: post.content
            });
        })
    });
}
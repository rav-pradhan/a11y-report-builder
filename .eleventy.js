const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const matter = require('gray-matter');

module.exports = (config) => {
    // Set Markdown config
    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: "",
    });

	// Watch CSS
	config.addWatchTarget('dist/css/*.css')
	config.setBrowserSyncConfig({
		files: ['dist/css/*.css']
	})

	// Syntax highlighting plugin
	config.addPlugin(syntaxHighlight);

	// Build a reportedSections computed data object for table of contents and tidier templates
	config.addCollection("reportSections", (collection) => {
		const sections = collection.getFilteredByGlob('./src/report/*.md').map(section => {
			const separatedMetadataAndContent = matter(section.template.inputContent)
			return {
				ID: section.fileSlug,
				title: separatedMetadataAndContent.data.title,
				order: separatedMetadataAndContent.data.order,
				url: `../..${section.filePathStem}.md`,
				content: separatedMetadataAndContent.content,
				isEmpty: separatedMetadataAndContent.isEmpty
			}
		})
		return sections.sort((a, b) => a.order - b.order);
	})

	config.addPairedShortcode("markdown", content => {
		return markdownLibrary.render(content)
	})

	// Pass through vendor script for prism.js
	config.addPassthroughCopy('vendor')
	
	return {
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};

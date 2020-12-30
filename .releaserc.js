module.exports = {
	branch: 'master',
	plugins: [
		// analyse all our commits since the last release
		'@semantic-release/commit-analyzer',

		// generate some nice release notes to use in our GitHub release
		'@semantic-release/release-notes-generator',

		// finally, push a new version as a release to npm with the changelog included
		['@semantic-release/npm', {
			failComment: false, // don't create a 'release failed' issue on the repo
			releasedLabels: ['published'] // tag PRs with [published] when release succeeded
		}]
	]
};

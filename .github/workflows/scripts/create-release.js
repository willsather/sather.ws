// @ts-check
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context, core }) => {
  const releaseName = context.sha.substring(0, 7);
  console.log("Release Name: ", releaseName);

  const response = await github.rest.repos.createRelease({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tag_name: `release-${releaseName}`,
    name: `Release ${releaseName}`,
    generate_release_notes: true,
    draft: false,
    prerelease: false,
  });

  console.log("Release URL: ", response.data.html_url);
  core.setOutput("release_url", response.data.html_url);
};

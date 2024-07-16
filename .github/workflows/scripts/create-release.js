module.exports = async ({ github, context, core }) => {
  console.log("Release Type: ", process.env.RELEASE_TYPE);

  const latestRelease = await github.rest.repos.getLatestRelease({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  const latestTag = latestRelease.data.tag_name;
  const versionParts = latestTag.replace(/^v/, "").split(".");

  console.log("Latest Release Tag: ", latestTag);

  let major = Number.parseInt(versionParts[0]);
  let minor = Number.parseInt(versionParts[1]);
  let patch = Number.parseInt(versionParts[2]);

  if (process.env.RELEASE_TYPE === "major") {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (process.env.RELEASE_TYPE === "minor") {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }

  const nextVersion = `v${major}.${minor}.${patch}`;

  console.log("Creating Release: ", nextVersion);

  const response = await github.rest.repos.createRelease({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tag_name: nextVersion,
    name: nextVersion,
    generate_release_notes: true,
    draft: false,
    prerelease: false,
  });

  core.setOutput("version", nextVersion);
  core.setOutput("release_url", response.data.html_url);
};

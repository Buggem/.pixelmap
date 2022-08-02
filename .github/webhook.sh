#!/bin/sh
set -e

# Get branch and hash
git_hash=$(git rev-parse --short "$GITHUB_SHA")
git_branch=${GITHUB_REF#refs/heads/}

echo "Commit ${git_hash} on ${git_branch}"

curl -H 'Content-Type: application/json' -X POST "$DISCORDWEBHOOK" -d@- << EOF
{
    "username": "RepoReport",
    "avatar_url": "https://i.stack.imgur.com/5dVWT.jpg",
    "content": "Commit ${git_hash} on ${git_branch}.\nCheck the commit here: https://github.com/Nyanport/.pixelmap/commit/${GITHUB_SHA}"
}
EOF

Нужна авторизация иначе ограничение по запросам (~60в минуту - наверное можно и без них)
profile-settings - developer settings - new github app

Данные для авторизации:
- Client ID
- * 34c5c906f4d23f9e58a5
- Client secrets:
- * b692320d1ff2914b3a231a69b2610a1c280eb987

Пара примеров:
*****
const getReposUser = async (user:string)=> {
const response = await octokit.request(`GET /users/${user}/repos`, {
type: "public",
per_page:100
});
console.log(response.data);
}
const getUserInfo = async (user:string)=> {
const response = await octokit.request(`GET /users/${user}`, {
});
console.log(response.data);
}
const getUserFollowers = async (user:string)=> {
const response = await octokit.request(`GET /users/${user}/followers`, {
per_page:1000
});
console.log(response.data);
}

getUserInfo('mojombo')
getReposUser('mojombo')
getUserFollowers('mojombo')
******

mojombo - случайный юзер

- https://api.github.com/users - все юзеры
!!!- https://api.github.com/users/mojombo - юзер по login
Результат:
  - login": "mojombo",
  - "id": 1,
  - "node_id": "MDQ6VXNlcjE=",
  - "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4"
  - "html_url": "https://github.com/mojombo"
  - "name": "Tom Preston-Werner",
  - "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
  - "blog": "http://tom.preston-werner.com",
  - "location": "San Francisco",
  - "email": null,
  - "twitter_username": "mojombo",
  - "public_repos": 62,
  - "public_gists": 62,
  - "followers": 22374,
  - "following": 11,
    

!!!- https://api.github.com/users/mojombo/repos - все репозитории данного юзера

У каждого репозитория есть:

- "id": 26899533,
- "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
- "name": "30daysoflaptops.github.io",
- "full_name": "mojombo/30daysoflaptops.github.io",
- "private": false,
- "owner": { </br>
    "login": "mojombo",</br>
    "id": 1,</br>
    "node_id": "MDQ6VXNlcjE=",</br>
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4", </br>
    "gravatar_id": "",</br>
    "url": "https://api.github.com/users/mojombo", </br>
    "html_url": "https://github.com/mojombo", </br>
    "followers_url": "https://api.github.com/users/mojombo/followers", </br>
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}", </br>
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}", </br>
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}", </br>
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions", </br>
    "organizations_url": "https://api.github.com/users/mojombo/orgs", </br>
    "repos_url": "https://api.github.com/users/mojombo/repos", </br>
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}", </br>
    "received_events_url": "https://api.github.com/users/mojombo/received_events", </br>
    "type": "User", </br>
    "site_admin": false </br>
},
- "html_url": "https://github.com/mojombo/30daysoflaptops.github.io", </br>
- "description": null, </br>
- "fork": false, </br>
- "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io", </br>
- "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks", </br>
- "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}", </br>
- "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}", </br>
- "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams", </br>
- "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks", </br>
- "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}", </br>
- "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events", </br>
- "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}", </br>
- "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}", </br>
- "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags", </br>
- "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}", </br>
- "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}", </br>
- "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}", </br>
- "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}", </br>
- "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}", </br>
- "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages", </br>
- "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers", </br>
- "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors", </br>
- "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers", </br>
- "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription", </br>
- "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}", </br>
- "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}", </br>
- "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}", </br>
- "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}", </br>
- "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}", </br>
- "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}", </br>
- "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",  </br>
- "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",  </br>
- "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",  </br>
- "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",  </br>
- "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",  </br>
- "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}", </br>
- "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}", </br>
- "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}", </br>
- "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}", </br>
- "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments", </br>
- "created_at": "2014-11-20T06:42:06Z", </br>
- "updated_at": "2021-01-13T19:44:03Z", </br>
- "pushed_at": "2014-11-20T06:42:47Z", </br>
- "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git", </br>
- "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git", </br>
- "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git", </br>
- "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io", </br>
- "homepage": null, </br>
- "size": 1197, </br>
- "stargazers_count": 7, </br>
- "watchers_count": 7, </br>
- "language": "CSS", </br>
- "has_issues": false, </br>
- "has_projects": true, </br>
- "has_downloads": true, </br>
- "has_wiki": true, </br>
- "has_pages": false, </br>
- "forks_count": 2, </br>
- "mirror_url": null, </br>
- "archived": false, </br>
- "disabled": false, </br>
- "open_issues_count": 0, </br>
- "license": null, </br>
- "forks": 2, </br>
- "open_issues": 0, </br>
- "watchers": 7, </br>
- "default_branch": "gh-pages" </br>

- https://api.github.com/repos/mojombo/30daysoflaptops.github.io - инфа данной репы 30daysoflaptops.github.io = name из предыдущего запроса  </br>
.... продолжение следует

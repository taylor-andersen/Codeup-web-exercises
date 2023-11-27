const username = prompt("Please enter your github username:");
const url = `https://api.github.com/users/${username}/events/public`
const octokit = new Octokit({
    auth: GITHUB_API_KEY
})

await octokit.request('POST /repos/{owner}/{repo}/statuses/{sha}', {
    owner: 'OWNER',
    repo: 'REPO',
    sha: 'SHA',
    state: 'success',
    target_url: "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    description: 'The build succeeded!',
    context: 'continuous-integration/jenkins',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})
fetch(url, {headers: {'Authorization': 'token' + GITHUB_API_KEY}})
    .then(r => r.json())
    .then(response => console.log(`${username}'s last commit was on ${response.state}`))
    .catch(error => console.log(error));







const USER_API_URL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Using promise
// function getUserPromise(username) {
//   axios.get(APIURL + username)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

// Using async/await
async function getUser(username) {
  try {
    const { data } = await axios.get(USER_API_URL + username)
    createUserCard(data)

  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('No profile with this username')
    } else {
      console.log(error)
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
            <div> 
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>

            </div>
        </div>
  `
  main.innerHTML = cardHTML
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(USER_API_URL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (error) {
    createErrorCard('Problem fetching repos')
  }
}

function createErrorCard(message) {
  const errorHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `

  main.innerHTML = errorHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
    .slice(0,5)
    .forEach(repo => {
      const repoEl = document.createElement('a')
      repoEl.classList.add('repo')
      repoEl.href = repo.html_url
      repoEl.target = '_blank'
      repoEl.innerText = repo.name
      reposEl.appendChild(repoEl)
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = search.value

  if (username) {
    getUser(username)
    getRepos(username)
    search.value = ''
  }
})
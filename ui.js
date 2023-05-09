class UI{
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // Show user in the DOM
    showProfile(user){
        this.profile.innerHTML = `
        <div class='card card-body mb-3'>
            <div class = 'row'>
                <div class = 'd-grid gap-2 col-md-3'>
                    <img class = 'img-fluid rounded d-block' src='${user.avatar_url}'>

                    <a href='${user.html_url}' target = '_blank' class='btn btn-dark mb-2'>View Profile</a>

                </div>
                <div class = 'col-md-9'>

                    <span class='badge bg-info'>Public repos: ${user.public_repos}</span>
                    <span class='badge bg-primary'>Public gists: ${user.public_gists}</span>
                    <span class='badge bg-secondary'>Followers: ${user.followers}</span>
                    <span class='badge bg-success'>Following: ${user.following}</span>
                    <br><br>

                    <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Members Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class='page-heading'>Latest Repos</h3>
        <div class = 'repos'>
        
        </div>
        `
    }

    // show repo
    showRepo(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target = '_blank' class='btn btn-secondary'>${repo.name}</a>
                        </div>
                        <div class='col-md-6'>
                            <span class='badge bg-info'>Stars: ${repo.stargazers_count}</span>
                            <span class='badge bg-primary'>Watchers: ${repo.watchers_count}</span>
                            <span class='badge bg-secondary'>Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `
        })
        document.querySelector('.repos').innerHTML =  output
    }

    // show alert in the DOM
    showAlert(message, alertClass) {
        // remove any existing alert
        this.removeAlert()

        // build a new alert
        const alert = document.createElement('div')
        alert.className = alertClass
        alert.appendChild(document.createTextNode(message))
        const container = document.querySelector('.searchContainer')
        const search = document.querySelector('.search')
        container.insertBefore(alert, search)

        // set timeout
        setTimeout(()=>{this.removeAlert()},3000)
    }
    
    // remove current alert
    removeAlert(){
        const alert = document.querySelector('.alert')
        if (alert) {
            alert.remove()
        }

    }

    //Clear User from the DOM
    clearProfile() {
        this.profile.innerHTML = ''
    }
}
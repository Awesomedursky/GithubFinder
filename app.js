// initialize Github class
const github = new Github

// initialize UI class
const ui = new UI

// search input
const searchInput = document.getElementById('searchUser')

// search input event listener
searchInput.addEventListener('keyup', (e) => {
    const userInput = e.target.value
    if (userInput !== '') {
        
        // make http call
        github.getUser(userInput)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                }
                else {
                    // show profile
                    ui.showProfile(data.profile)

                    // show repos
                    ui.showRepo(data.repo)

                }
        })
    }
    else {
        // clear Profile
        ui.clearProfile()
    }
})
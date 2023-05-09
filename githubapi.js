class Github{
    constructor() {
        this.client_id = '6dec9d40557651db034d'
        this.client_secret = 'c4226f9460cfb2c40197d451bd0218b423382e3e'
        this.repo_count = 5
        this.repo_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()
        const repo = await repoResponse.json()
        return {
            profile,
            repo
        }
    }
}
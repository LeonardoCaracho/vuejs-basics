export const state = {
    user: { id: 'abc123', name: 'Adam' }
}

export const getters = {
    user: state => state.user
}
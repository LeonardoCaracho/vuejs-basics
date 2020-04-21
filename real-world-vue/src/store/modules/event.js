import api from '@/services/api'

export const state = {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3
}


export const mutations = {
    ADD_EVENT(state, event){
        state.events.push(event)
    },

    SET_EVENTS(state, events){
        state.events = events
    },

    SET_TOTAL_EVENTS(state, total){
        state.eventsTotal = total
    },

    SET_EVENT(state, event){
        state.event = event
    }
}

export const actions = {
    createEvent({ commit, dispatch }, event){
        return api.postEvent(event).then(() => {
            commit('ADD_EVENT', event)

            const notification = {
                type: 'success',
                message: 'Event created!'
            }

            dispatch('notification/add', notification, { root: true })
        }).catch(err => {
            const notification = {
                type: 'error',
                message: 'Event cannot be created!' + err.message
            }

            dispatch('notification/add', notification), { root: true }
            throw err
        })
    },

    fetchEvents({ state, commit, dispatch }, { page }){
        api.getEvents(state.perPage, page)
        .then(res => {
            commit('SET_TOTAL_EVENTS', res.headers['x-total-count'])
            commit('SET_EVENTS', res.data)
        })
        .catch(err => {
            const notification = {
                type: 'error',
                message: 'There was a problem fetching events ' + err.message
            }

            dispatch('notification/add', notification, { root: true })
        })
    },

    fetchEvent({ commit, getters }, id){
        const event = getters.getEventById(id)

        if (event){
            commit('SET_EVENT', event)
            return event
        } else {
            return api.getEvent(id)
                .then(res => {
                    commit('SET_EVENT', res.data)
                    return res.data
                })
        }

        
    }
}


export const getters = {
    perPage: state => state.perPage,
    catLength: state => state.categories.length,
    events: state => state.events,
    eventsTotal: state => state.eventsTotal,
    event: state => state.event,
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}
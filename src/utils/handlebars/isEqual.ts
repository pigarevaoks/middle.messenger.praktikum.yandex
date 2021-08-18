import Handlebars from 'handlebars'

export const isEqual = () =>
    Handlebars.registerHelper('isEqual', (a, b) => {
        return a == b
    })

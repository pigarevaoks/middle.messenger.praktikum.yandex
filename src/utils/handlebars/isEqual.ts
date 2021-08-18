import Handlebars from 'handlebars'

export const isEqual = () =>
    Handlebars.registerHelper('isEqual', function (a, b) {
        return a == b
    })

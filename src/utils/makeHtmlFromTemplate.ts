import Handlebars from 'handlebars'

export const makeHtmlFromTemplate = (template: string, data: object): string => {
    const compileProp = Array.isArray(data) ? {data} : data
    return Handlebars.compile(template.trim())(compileProp)
}

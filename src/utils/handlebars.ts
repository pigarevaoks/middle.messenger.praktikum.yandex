Handlebars.registerHelper('isEqual', (a, b) => {
    return a === b
})

Handlebars.registerHelper('childComponent', (object, propertyName) => {
    const stub = object[propertyName].firstElementChild
    stub.setAttribute('data-child', propertyName)
    return new Handlebars.SafeString(stub.outerHTML)
})

Handlebars.registerHelper('childComponentArray', (object, propertyName) => {
    const stubs = []
    for (const stub of object[propertyName]) {
        stub.setAttribute('data-child', propertyName)
        stubs.push(stub.innerHTML)
    }
    return new Handlebars.SafeString(`${stubs.join('')}`)
})

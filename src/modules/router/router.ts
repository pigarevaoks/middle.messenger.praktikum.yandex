import Route from './route'

export class Router {
    static __instance: Router

    routes: Route[]
    history: History
    _currentRoute: Route | null
    _rootQuery: string

    constructor(rootQuery?: string) {
        if (Router.__instance) {
            return Router.__instance
        }

        this.routes = []
        this.history = window.history
        this._currentRoute = null
        this._rootQuery = rootQuery || ''

        Router.__instance = this
    }

    use(pathname: string, block: any): Router {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery})
        this.routes.push(route)
        return this
    }

    start(): void {
        window.addEventListener('popstate', (event) => {
            // eslint-disable-next-line
            // @ts-ignore
            this._onRoute(event.currentTarget.location.pathname)
        })

        this._onRoute(window.location.pathname)
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname)

        if (this._currentRoute) {
            this._currentRoute.leave()
        }

        this._currentRoute = route
        if (route) {
            route.render()
        }
    }

    go(pathname: string): void {
        this.history.pushState({url: pathname}, pathname, pathname)
        this._onRoute(pathname)
    }

    back(): void {
        this.history.back()
    }

    forward(): void {
        this.history.forward()
    }

    getRoute(pathname: string): Route | null {
        return this.routes.find((route) => route.match(pathname)) || null
    }

    getCurrentRoute(): string | null {
        return document.URL
    }

    getUrlParam(): string {
        return document.URL.split('/').reverse()[0]
    }
}

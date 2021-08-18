import Block from '../block'
import Route from './route'
import {ROUTES} from './index'

export default class Router {
    routes: Route[] = []
    history: History
    _currentRoute: Route | null
    _rootQuery = 'app'
    static __instance: Router

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance
        }

        this.routes = []
        this.history = window.history
        this._currentRoute = null
        this._rootQuery = rootQuery

        Router.__instance = this
    }

    use(pathname: string, block: Block): this {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery})
        this.routes.push(route)
        return this
    }

    start(): void {
        window.onpopstate = (event: PopStateEvent) => {
            // @ts-ignore
            this._onRoute(event.currentTarget.location.pathname)
        }

        this._onRoute(window.location.pathname)
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname)
        if (!route) {
            this.go(ROUTES.NOT_FOUND)
            window.location.href = ROUTES.NOT_FOUND
        }

        if (this._currentRoute) {
            this._currentRoute.leave()
        }

        this._currentRoute = route
        // @ts-ignore
        if (route) {
            route.render()
        }
    }

    go(pathname: string): void {
        this.history.pushState({}, '', pathname)
        this._onRoute(pathname)
    }

    back(): void {
        history.back()
    }

    forward(): void {
        history.forward()
    }

    getRoute(pathname: string): Route {
        // @ts-ignore
        return this.routes.find((route) => route.match(pathname))
    }
    getUrlParam(): string {
        return document.URL.split('/').reverse()[0]
    }
}

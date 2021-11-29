declare module "*.handlebars" {
    function compileFn(props: any): string;
    export default compileFn;
}

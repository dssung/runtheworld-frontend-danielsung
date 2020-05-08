export default interface User {
    name: string;
    email: string;
    gender: string;
    react: boolean
    typescript: boolean;
    graphql: boolean;
    node: boolean;
    other: boolean;

    [key: string]: string | boolean | string[];
}
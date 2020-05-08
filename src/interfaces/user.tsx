export default interface User {
    name: string;
    email: string;
    gender: string;
    agreement: string;
    
    [key: string]: string | boolean | string[];
}
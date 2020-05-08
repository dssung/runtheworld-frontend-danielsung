export default interface User {
    name: string;
    email: string;
    gender: string;
    agreement: boolean;
    
    [key: string]: string | boolean | string[];
}
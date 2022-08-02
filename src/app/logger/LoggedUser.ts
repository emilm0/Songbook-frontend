export class LoggedUser {
    public userName: string;
    public jwtToken: string;

    constructor (userName: string, jwtToken: string) {
        this.userName = userName,
        this.jwtToken = jwtToken;
    }
}
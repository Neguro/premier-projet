export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public drinkPreference: string;
    public hobbies: string[];
    public pseudo: string;
    public password: string;

    constructor(firtsName: string, lastName: string, email: string, drinkPreferences: string, hobbies: string[], pseudo: string, password: string) {
        this.firstName = firtsName;
        this.lastName = lastName;
        this.email = email;
        this.drinkPreference = drinkPreferences;
        this.hobbies = hobbies;
        this.pseudo = pseudo;
        this.password = password;
    }
}
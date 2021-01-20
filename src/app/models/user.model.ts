export class User 
{
    public firstName: string;
    public lastName: string;
    public email: string;
    public drinkPreference: string;
    public hobbies?: string[];

    constructor(lastName: string, firstName: string, email: string, drinkPreferences: string, hobbies?: string[]) 
    {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.drinkPreference = drinkPreferences;
        this.hobbies = hobbies;
    }
}
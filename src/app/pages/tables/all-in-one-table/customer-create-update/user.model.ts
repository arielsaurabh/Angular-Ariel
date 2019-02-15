export class User {
    CustomerId: number;
    Name: string;
    Address: string;
    MobileNo: string;
    Email: string;
    Flag: boolean;




    constructor(user) {
        debugger;
        this.CustomerId = user.CustomerId;
        this.Name = user.Name;
        this.Address = user.Address;
        this.MobileNo = user.MobileNo;
        this.Email = user.Email;
        this.Flag = user.Flag;
    }
}

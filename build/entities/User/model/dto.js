export class UserDto {
    email;
    id;
    accessLevel;
    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.accessLevel = model.accessLevel;
    }
}

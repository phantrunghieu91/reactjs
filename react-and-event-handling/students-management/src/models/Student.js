class Student {
    constructor(name, email, phone) {
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get phone(){
        return this._phone;
    }

    set name(name){
        this._name = name;
    }

    set email(email){
        this._email = email;
    }

    set phone(phone){
        this._phone = phone;
    }
}

export default Student;
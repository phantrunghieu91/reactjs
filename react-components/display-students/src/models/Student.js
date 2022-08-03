class Student {
    constructor(id, name, age, address) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._address = address;
    }

    get id () {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get address() {
        return this._address;
    }

    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
    set address(addr) {
        this._address = addr;
    }
}

export default Student;
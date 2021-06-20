import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const userCookie = {
    USERNAMEKEY: 'username',
    IDKEY: 'userid',
    NAMEKEY: 'name',
    set userName(userName) {
        cookies.set(this.USERNAMEKEY, userName);
    },
    set userId(id) {
        cookies.set(this.IDKEY, id);
    },
    set name(name) {
        cookies.set(this.NAMEKEY, name);
    },
    get userName() {
        return cookies.get(this.USERNAMEKEY);
    },
    get userId() {
        return cookies.get(this.IDKEY);
    },
    get name() {
        return cookies.get(this.NAMEKEY);
    },
};

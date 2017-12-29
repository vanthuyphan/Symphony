import {observable, computed, action} from "mobx";
import GonhadatAPI from "../../common/gonhadatAPI.js";

const AUTHED = 'authed';
const FAILED = 'failed';
const EXPIRED = ''

class UserModel {

    @observable state = "";
    @observable user = {};

    @computed
    get fin() {
        return this.user.fin;
    }

    @computed
    get avatar() {
        return this.user.ava;
    }

    @computed
    get tok() {
        return this.user.tok;
    }

    @action
    logout(tok) {
        console.log(this);
        this.state = FAILED;
        localStorage.setItem("user", undefined);
        GonhadatAPI.logout(tok, (response) => {
            this.user = undefined;
            window.location.href = '?#/login';
        });
    }

    @computed
    get mob() {
        return this.user.mob;
    }

    @action
    foundInStorage() {
        const item = localStorage.getItem('user');
        if (item !== "undefined") {
            this.user = JSON.parse(item);
            this.state = AUTHED;
            return true;
        }
        return false;
    }

    @computed
    get isAuthed() {
        return this.state == AUTHED;
    }

    @computed
    get failedLogin() {
        return this.state == FAILED;
    }

    @action
    login(username, password) {
        GonhadatAPI.login(username, password, (response) => {
            if (response.code == 0) {
                this.user = response.data;
                localStorage.setItem("user", JSON.stringify(this.user));
                this.state = AUTHED;
                alert("Thru")
            } else {
                alert("Wrong password/phone")
            }

        });
    }
}

var userStore = new UserModel();

export default userStore;
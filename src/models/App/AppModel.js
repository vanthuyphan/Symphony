/**
 * author Van Phan <vanthuyphan@gmail.com>
 */

import {observable, computed, action} from "mobx";
import GonhadatAPI from "../../common/gonhadatAPI.js";

class AppModel {
    @observable modeOptions = undefined;
    @observable typeOptions = undefined;
    @observable projectSelection = undefined;
    @observable landmarkSelection = undefined;

    @action
    populateAppOptions(tok) {
        if (!this.modeOptions || !this.typeOptions) {
            GonhadatAPI.getListingCategory(tok, (response) =>{
                let data = response.data || {};
                this.modeOptions = data.lstTransactionType || [];
                this.typeOptions = data.lstRealEstateType || [];
            });
        }

        this.projectSelection = [];
        this.landmarkSelection = [];
        return true;
    }

    @action
    createNewLandmark(word,tok, cb) {
        if (confirm("You want to create new landmark: "+ word)) {
            let landmarkInfo = [{realName: word}];
            GonhadatAPI.createLandmark(tok, landmarkInfo, (response) => {
                let data = response.data || [];
                if (data.length == 0) {
                    alert("Error !! can't create new landmark: " + word);
                    cb(null);
                } else {
                    alert("Created landmark :" + word);
                    let newLandmark = {value: data[0].id, label: data[0].realName};
                    cb(newLandmark);
                }
            });
        } else {
            cb(null);
        }
    }

    @action
    searchLandmark(word,tok, cb) {
        if (word!="") {
        GonhadatAPI.searchLandmark(tok, word, (response) => {
                if (response.data) {
                    this.landmarkSelection = this.parseLandmarkInfo(response.data.lstLandmark);
                } else {
                    this.landmarkSelection = [];
                }
                cb();
            });
        } else {
            this.landmarkSelection = [];
            cb();
        }
    }

    parseLandmarkInfo(lstLandmark) {
        let parsedLstLandmark = []
        for (let i=0;i<lstLandmark.length;i++) {
            parsedLstLandmark.push({value:lstLandmark[i].id,label:lstLandmark[i].realName});
        }
        return parsedLstLandmark;
    }

    @action
    searchProject(word,tok, cb) {
        if (word!="") {
            GonhadatAPI.searchProject(tok, word, (response) => {
                if (response.data) {
                    this.projectSelection = this.parseProjectInfo(response.data.lst);
                } else {
                    this.projectSelection = [];
                }
                cb();
            });
        } else {
            this.landmarkSelection = [];
            cb();
        }
    }

    parseProjectInfo(lstProject) {
        let parsedLstProject = []
        for (let i=0;i<lstProject.length;i++) {
            parsedLstProject.push({value:lstProject[i].pid,label:lstProject[i].title});
        }
        return parsedLstProject;
    }
}

var appModel = new AppModel();

export default appModel;

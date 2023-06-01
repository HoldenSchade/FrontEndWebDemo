function setQuestionVisible() {
    document.getElementById("questionOneOptional").hidden = false;
    document.getElementById("whatInstrument").required = true;
    document.getElementById("startAge").required = true;
}

function setQuestionInvisible() {
    document.getElementById("questionOneOptional").hidden = true;
    document.getElementById("whatInstrument").required = false;
    document.getElementById("startAge").required = false;
}

function otherSelected() {
    if (document.getElementById("listening7").checked == true) {
        document.getElementById("listening8container").hidden = false;
        document.getElementById("listening8").required = true;
    }
    else {
        document.getElementById("listening8container").hidden = true;
        document.getElementById("listening8").required = false;
    }
}

function checkChecked() {
    var checkBoxList = document.getElementById("checkBoxes").getElementsByTagName("input");
    var anyChecked = 0;
    for (i = 0; i < checkBoxList.length; i++) {
        if (checkBoxList[i].checked == true) {
            anyChecked = 1;
            break;
        }
    }
    if (anyChecked == 0) {
        for (i = 0; i < checkBoxList.length; i++) {
            checkBoxList[i].required = true;
        }
    }
    else {
        for (i = 0; i < checkBoxList.length; i++) {
            checkBoxList[i].required = false;
        }
    }
}
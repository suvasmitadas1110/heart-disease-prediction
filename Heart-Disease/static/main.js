function validation() {
    var f1 = document.getElementById("f1").value;
    var f2 = document.getElementById("f2").value;
    var f3 = document.getElementById("f3").value;
    var f4 = document.getElementById("f4").value;
    var f5 = document.getElementById("f5").value;
    var f6 = document.getElementById("f6").value;
    var f7 = document.getElementById("f7").value;
    var f8 = document.getElementById("f8").value;
    var f9 = document.getElementById("f9").value;
    var f10 = document.getElementById("f10").value;
    var f11 = document.getElementById("f11").value;
    var f12 = document.getElementById("f12").value;
    var f13 = document.getElementById("f13").value;
    if (f1 == "") {
        document.getElementById("age").innerHTML = "Age can't be empty!";
        return false;
    }
    else if (f1 < 29) {
        document.getElementById("age").innerHTML = "age can't be less than 29!";
        return false;
    }
    else if (f1 > 77) {
        document.getElementById("age").innerHTML = "age can't greater than 77!";
        return false;
    }
    else {
        document.getElementById("age").innerHTML = "";
    }
    if (f2 == "") {
        document.getElementById("sex").innerHTML = "sex can't be empty!";
        return false;
    }
    else if (f2 <0.0) {
        document.getElementById("sex").innerHTML = "Sex Should be either 0 or 1!";
        return false;
    }
    else if (f2 > 1.0) {
        document.getElementById("sex").innerHTML = "Sex Should be either 0 or 1";
        return false;
    }
    else {
        document.getElementById("sex").innerHTML = "";
    }
    if (f3 == "") {
        document.getElementById("cp").innerHTML = "cp can't be empty!";
        return false;
    }
    else if (f3 < 0.0) {
        document.getElementById("cp").innerHTML = "cp can't be less than 0.0!";
        return false;
    }
    else if (f3 > 3.0) {
        document.getElementById("cp").innerHTML = "cp can't greater than 3.0!";
        return false;
    }
    else {
        document.getElementById("cp").innerHTML = "";
    }
    if (f4 == "") {
        document.getElementById("trestbps").innerHTML = "trestbps can't be empty!";
        return false;
    }
    else if (f4 < 94.0) {
        document.getElementById("trestbps").innerHTML = "trestbps can't be less than 94.0!";
        return false;
    }
    else if (f4 > 200.0) {
        document.getElementById("trestbps").innerHTML = "trestbps can't greater than 200.0!";
        return false;
    }
    else {
        document.getElementById("trestbps").innerHTML = "";
    chol
    if (f5 == "") {
        document.getElementById("chol").innerHTML = "chol can't be empty!";
        return false;
    }
    else if (f5 < 126.0) {
        document.getElementById("chol").innerHTML = "chol can't be less than 126.0!";
        return false;
    }
    else if (f5 > 564.0) {
        document.getElementById("chol").innerHTML = "chol can't greater than 564.0!";
        return false;
    }
    else fbs
        document.getElementById("chol").innerHTML = "";
    }
    if (f6 == "") {
        document.getElementById("fbs").innerHTML = "fbs can't be empty!";
        return false;
    }
    else if (f6 < 0.0) {
        document.getElementById("fbs").innerHTML = "fbs should be either 0 or 1.!";
        return false;
    }
    else if (f6 > 1.0) {
        document.getElementById("fbs").innerHTML = "fbs should be either 0 or 1.!";
        return false;
    }
    else {
        document.getElementById("fbs").innerHTML = "";
    }
    if (f7 == "") {
        document.getElementById("restecg").innerHTML = "restecg can't be empty!";
        return false;
    }
    else if (f7 < 0.0) {
        document.getElementById("restecg").innerHTML = "restecg value shouls be in between 0.0 to 2.0";
        return false;
    }
    else if (f7 >2.0) {
        document.getElementById("restecg").innerHTML = "restecg value shouls be in between 0.0 to 2.0";
        return false;
    }
    else {
        document.getElementById("restecg").innerHTML = "";
    }
    if (f8 == "") {
        document.getElementById("thalach").innerHTML = "thalach can't be empty!";
        return false;
    }
    else if (f8 < 71.0) {
        document.getElementById("thalach").innerHTML = "thalachcan't be less than 71.0";
        return false;
    }
    else if (f8 > 202.0) {
        document.getElementById("thalach").innerHTML = "thalach can't greater than 202.0!";
        return false;
    }
    else {
        document.getElementById("thalach").innerHTML = "";
    }
    if (f9 == "") {
        document.getElementById("exang").innerHTML = "exang can't be empty!";
        return false;
    }
    else if (f9 < 0.0) {
        document.getElementById("exang").innerHTML = "exang value should be either 0 or 1.";
        return false;
    }
    else if (f9 > 1.0) {
        document.getElementById("exang").innerHTML = "exang value should be either 0 or 1.";
        return false;
    }
    else {
        document.getElementById("exang").innerHTML = "";
    }
    if (f10 == "") {
        document.getElementById("oldpeak").innerHTML = "oldpeak can't be empty!";
        return false;
    }
    else if (f10 < 0.0) {
        document.getElementById("oldpeak").innerHTML = "oldpeak can't be less than 0.00!";
        return false;
    }
    else if (f10 > 6.20) {
        document.getElementById("oldpeak").innerHTML = "oldpeak can't greater than 6.20!";
        return false;
    }
    else {
        document.getElementById("oldpeak").innerHTML = "";
    }
    if (f11 == "") {
        document.getElementById("slope").innerHTML = "slope can't be empty!";
        return false;
    }
    else if (f11 < 0.0) {
        document.getElementById("slope").innerHTML = "slope range should be in between 0.0 to 2.0!";
        return false;
    }
    else if (f11 > 2.0) {
        document.getElementById("slope").innerHTML = "slope range should be in between 0.0 to 2.0";
        return false;
    }
    else {
        document.getElementById("slope").innerHTML = "";
    }
    if (f12 == "") {
        document.getElementById("ca").innerHTML = "ca can't be empty!";
        return false;
    }
    else if (f12 < 0.0) {
        document.getElementById("ca").innerHTML = "ca can't be less than 0.0!";
        return false;
    }
    else if (f12 > 4.0) {
        document.getElementById("ca").innerHTML = "ca can't greater than 4.0!";
        return false;
    }
    else {
        document.getElementById("ca").innerHTML = "";
    }
    if (f13 == "") {
        document.getElementById("thal").innerHTML = "thal can't be empty!";
        return false;
    }
    else if (f13 < 0.0) {
        document.getElementById("thal").innerHTML = "thal value range should be 0 to 3.";
        return false;
    }
    else if (f13 > 3.0) {
        document.getElementById("thal").innerHTML = "thal value range should be 0 to 3.";
        return false;
    }
    else {
        document.getElementById("thal").innerHTML = "";
    }
}
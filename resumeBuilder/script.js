var _a, _b, _c, _d;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var imageInput = document.getElementById('image');
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var hobbies = document.getElementById('hobbies').value;
    var resumeContent = document.getElementById('resumeContent');
    if (resumeContent) {
        var imageFile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';
        resumeContent.innerHTML = "\n            <div class=\"resume-header\">\n                <div class=\"left\">\n                    <h2>".concat(name, "</h2>\n                    <h3>").concat(profession, "</h3>\n                    <h4>Contact</h4>\n                    <p>Phone: ").concat(phone, "</p>\n                    <p>Address: ").concat(address, "</p>\n                    <p>Email: ").concat(email, "</p>\n                    <p>LinkedIn: <a href=\"").concat(linkedin, "\">").concat(linkedin, "</a></p>\n                </div>\n                <div class=\"right\">\n                    <img src=\"").concat(imageUrl, "\" alt=\"").concat(name, "\">\n                </div>\n            </div>\n            <div class=\"resume-details\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                <h3>Hobbies</h3>\n                <p>").concat(hobbies, "</p>\n            </div>\n        ");
    }
    (_b = document.getElementById('resumeTemplate')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
});
(_b = document.getElementById('editResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    (_a = document.getElementById('resumeTemplate')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
});
(_c = document.getElementById('downloadResume')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var element = document.getElementById('resumeContent');
    if (element) {
        html2pdf().from(element).save();
    }
});
(_d = document.getElementById('shareResume')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var element = document.getElementById('resumeContent');
    if (element) {
        var htmlContent = element.innerHTML;
        var blob = new Blob([htmlContent], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }
});

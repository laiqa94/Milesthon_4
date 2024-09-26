// app.ts
function generateResume() {
    var _a;
    // Get values from the form
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profilePic = (_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0];
    // Display resume
    document.getElementById('resName').textContent = name;
    document.getElementById('resSurname').textContent = surname;
    document.getElementById('resFatherName').textContent = fatherName;
    document.getElementById('resEmail').textContent = email;
    document.getElementById('resMobile').textContent = mobile;
    document.getElementById('resEducation').textContent = education;
    document.getElementById('resSkills').textContent = skills;
    document.getElementById('resExperience').textContent = experience;
    // Display profile picture
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById('resProfilePic').src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Show resume container
    document.getElementById('resumeContainer').style.display = 'block';
}
function editField(id) {
    var field = document.getElementById(id);
    var newValue = prompt('Edit value:', field.textContent || '');
    if (newValue !== null) {
        field.textContent = newValue;
    }
}

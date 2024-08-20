function saveProfile() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        localStorage.setItem('userName', name);
        loadProfile();
    }
}

function setGender(gender) {
    localStorage.setItem('userGender', gender);
    document.getElementById('genderSelection').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
}

function loadProfile() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userName').textContent = userName;
        document.getElementById('genderSelection').style.display = 'none';
        document.getElementById('nameInput').style.display = 'none';
        // فرض بر این است که تصویر پروفایل ممکن است در صفحه دیگر بارگذاری شود
    } else {
        document.getElementById('genderSelection').style.display = 'block';
        document.getElementById('nameInput').style.display = 'none';
    }
}

window.onload = loadProfile;

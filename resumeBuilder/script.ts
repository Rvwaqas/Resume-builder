declare var html2pdf: any;

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const imageInput = document.getElementById('image') as HTMLInputElement;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;

    const resumeContent = document.getElementById('resumeContent');
    if (resumeContent) {
        const imageFile = imageInput.files?.[0];
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';

        resumeContent.innerHTML = `
            <div class="resume-header">
                <div class="left">
                    <h2>${name}</h2>
                    <h3>${profession}</h3>
                    <h4>Contact</h4>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>Email: ${email}</p>
                    <p>LinkedIn: <a href="${linkedin}">${linkedin}</a></p>
                </div>
                <div class="right">
                    <img src="${imageUrl}" alt="${name}">
                </div>
            </div>
            <div class="resume-details">
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Hobbies</h3>
                <p>${hobbies}</p>
            </div>
        `;
    }

    document.getElementById('resumeTemplate')?.classList.remove('hidden');
});

document.getElementById('editResume')?.addEventListener('click', function () {
    document.getElementById('resumeTemplate')?.classList.add('hidden');
});

document.getElementById('downloadResume')?.addEventListener('click', function () {
    const element = document.getElementById('resumeContent');
    if (element) {
        html2pdf().from(element).save();
    }
});

document.getElementById('shareResume')?.addEventListener('click', function () {
    const element = document.getElementById('resumeContent');
    if (element) {
        const htmlContent = element.innerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }
});
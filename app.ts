// app.ts

function generateResume(): void {
    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const surname = (document.getElementById('surname') as HTMLInputElement).value;
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const profilePic = (document.getElementById('profilePic') as HTMLInputElement).files?.[0];
  
    // Display resume
    (document.getElementById('resName') as HTMLSpanElement).textContent = name;
    (document.getElementById('resSurname') as HTMLSpanElement).textContent = surname;
    (document.getElementById('resFatherName') as HTMLSpanElement).textContent = fatherName;
    (document.getElementById('resEmail') as HTMLSpanElement).textContent = email;
    (document.getElementById('resMobile') as HTMLSpanElement).textContent = mobile;
    (document.getElementById('resEducation') as HTMLSpanElement).textContent = education;
    (document.getElementById('resSkills') as HTMLSpanElement).textContent = skills;
    (document.getElementById('resExperience') as HTMLSpanElement).textContent = experience;
  
    // Display profile picture
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function(e) {
        (document.getElementById('resProfilePic') as HTMLImageElement).src = e.target?.result as string;
      };
      reader.readAsDataURL(profilePic);
    }
  
    // Show resume container
    (document.getElementById('resumeContainer') as HTMLDivElement).style.display = 'block';
  }
  
  function editField(id: string): void {
    const field = document.getElementById(id) as HTMLSpanElement;
    const newValue = prompt('Edit value:', field.textContent || '');
    if (newValue !== null) {
      field.textContent = newValue;
    }
  }
  
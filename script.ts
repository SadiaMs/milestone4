// Get references to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement; // Corrected id
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement; // Corrected id

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const country = (document.getElementById('country') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const companyName = (document.getElementById('companyName') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const aboutYourself = (document.getElementById('aboutyourself') as HTMLTextAreaElement).value;

    // Collect the uploaded image file
    const profileImageFile = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];

    // Check if an image is uploaded
    if (profileImageFile) {
        // Create a FileReader to read the image
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target?.result as string;

            // Generate the resume content dynamically, making the fields editable
            const resumeHTML = `
                <div style="display: flex; align-items: center;">
                    <div style="flex-shrink: 0;">
                        <img src="${imageUrl}" alt="Profile Picture" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <div style="margin-left: 20px;">
                        <h2><b>Editable Resume Builder</b></h2>
                        <h3>Personal Information</h3>
                        <p><b>Name:</b> <span contenteditable="true">${firstName} ${lastName}</span></p>
                        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
                        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
                        <p><b>Address:</b> <span contenteditable="true">${address}, ${city}, ${country}</span></p>
                    </div>
                </div>

                <h3>Education</h3>
                
                <p><b>Degree:</b> <span contenteditable="true">${degree}</span></p>
                <p><b>Education:</b> <span contenteditable="true">${education}</span></p>

                <h3>Work Experience</h3>


                <p><b>Company Name:</b> <span contenteditable="true">${companyName}</span></p>
                   <p><b>Position:</b> <span contenteditable="true">${position}</span></p>
                <p><b>Description:</b> <span contenteditable="true">${description}</span></p>

                <h3>Skills</h3>

                <p><b>Skills:</b> <span contenteditable="true">${skills}</span></p>
                <h3>About Yourself</h3>

                  <p><b>About Yourself:</b> <span contenteditable="true">${aboutYourself}</span></p>
            `;

            // Display the generated resume
               if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {

                  
                console.error("Cannot display resume.");
            }
        };

        // Read the image file as a data URL
        reader.readAsDataURL(profileImageFile);
    } else {
        console.error("No image uploaded.");
    }
});

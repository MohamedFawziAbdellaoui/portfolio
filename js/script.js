window.onload = function () {
    // scroll Section
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if (top >= offset && top < offset + height) {
                // active nav bar link
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            }
        });
        // sticky header
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);
    }
    // Get the form element
    const form = document.getElementById('contactForm');
    const submitformbtn = document.getElementById("submit_form");
    // Add event listener for form submission
    submitformbtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        console.log("hello")
        // Get the input values
        const fullName = document.getElementById('fullName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const emailSubject = document.getElementById('emailSubject').value;
        const emailAdress = document.getElementById('emailAdress').value;
        const message = document.getElementById('message').value;

        // Construct the email content
        const emailContent = `Hi, I'm ${fullName}, my phone number is ${phoneNumber} , and my adress mail is ${emailAdress}.` + "\n \n" + `${message}`;

        // Construct the mailto: link
        Email.send({
            SecureToken : "c4442156-e86e-43f8-bc52-470c39dbdc2d",
            To : 'mohamedfawzi.abdellaoui@gmail.com',
            From : 'mohamedfawzi.abdellaoui@gmail.com',
            Subject : emailSubject,
            Body : emailContent
        }).then(
          message => alert(message)
        );
    });
    
}
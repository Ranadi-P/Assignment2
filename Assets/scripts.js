//DATABASE
const campaigns = [
    {
        titlecampaign: "Donating Needs To others",
        detailcampaign: "Donating to those in need is a powerful way to make a meaningful difference in the lives of others. Whether it's clothes, food, or essential supplies, every contribution has the potential to positively impact someone's life. By giving generously, we not only provide immediate relief but also foster a sense of community and solidarity. Together, let's embrace the spirit of compassion and generosity, creating a ripple effect of kindness that spreads far and wide.",
        shortcampaign: "Donating to those in need is a powerful way to make a meaningful difference in the lives of others.",
        location: "Niti Mandala, Bali Indonesia.",
        date: "01/ 03/ 2024 - 15/ 05/ 2024",
        status: "Ongoing",
        imgsrc: "Assets/Images/Donating Needs To others_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },

    {
        titlecampaign: "Free medication and treatment",
        detailcampaign: "Embarking on a free campaign and treatment initiative signifies a commitment to accessible healthcare and social welfare. Through this endeavor, individuals are provided with essential medical services and support without financial barriers. This campaign aims to address pressing health concerns, ensuring that no one is left behind due to economic constraints. By offering free treatment, we strive to promote equitable access to healthcare and improve overall well-being within our communities.",
        shortcampaign: "Embarking on a free campaign and treatment initiative signifies a commitment to accessible healthcare and social welfare.",
        location: "Banjar Bekul Panjer",
        date: "01/ 04/ 2024",
        status: "Completed",
        imgsrc: "Assets/Images/Free medication and treatment_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },

    {
        titlecampaign: "Bible study in communities",
        detailcampaign: "Bible study in communities brings together individuals seeking spiritual enrichment and deeper understanding of religious teachings. Through regular gatherings and discussions, participants engage in meaningful dialogue, reflection, and interpretation of biblical passages. These community-based studies foster a sense of fellowship and unity among attendees, as they explore shared beliefs and values. By delving into the scriptures within a supportive environment, participants not only deepen their faith but also strengthen the bonds of friendship and solidarity within the community.",
        shortcampaign: "Bible study in communities brings together individuals seeking spiritual enrichment and deeper understanding of religious teachings.",
        location: "Local volunteering house (7pm local time)",
        date: "12/06 - 14/07 2024",
        status: "Ongoing",
        imgsrc: "Assets/Images/Bible study in communities_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },

    {
        titlecampaign: "Children’s Finest day",
        detailcampaign: "Imagine a day where we come together each month, not just to spare time, but to ignite young minds with the spark of education and joy. In this monthly tradition, we gather as a community to engage with local children, offering them the gift of knowledge and the thrill of learning. Through interactive activities, storytelling, and hands-on experiences, we create moments of connection and discovery that resonate long after the day is done. Together, we share laughter, curiosity, and the joy of making a positive impact in the lives of those around us.",
        shortcampaign: "Imagine a day where we come together each month, not just to spare time, but to ignite young minds with the spark of education and joy.",
        location: "SDN 1 Karangasem",
        date: "26/ 04/ 2024",
        status: "Completed",
        imgsrc: "Assets/Images/Children’s Finest day_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },

    {
        titlecampaign: "Hope for Gaza: Nourishing Children, Nurturing Futures",
        detailcampaign: "This campaign is dedicated to providing essential food and supplies to the children of Gaza. Amidst challenging circumstances, our mission is to offer nourishment and support, ensuring that every child has access to the basic necessities for a healthy life. Through collective efforts, we aim to alleviate hunger and promote well-being, empowering young minds to thrive despite adversity. Together, let's sow the seeds of hope and resilience, nurturing a brighter future for the children of Gaza. ",
        shortcampaign: "This campaign is dedicated to providing essential food and supplies to the children of Gaza.",
        location: "Gacoan – Renon",
        date: "23/ 02/ 2024 - 11/05/2024",
        status: "Ongoing",
        imgsrc: "Assets/Images/Hope for Gaza Nourishing Children, Nurturing Futures_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },

    {
        titlecampaign: "Healing Hands: Supporting Children's Hospitals through Donation",
        detailcampaign: "It is a heartfelt campaign dedicated to providing vital support to children's hospitals. Through generous contributions, we aim to equip these institutions with the resources they need to offer quality care and comfort to young patients. Together, we can make a difference in the lives of children facing illness or injury, ensuring they receive the treatment and support they deserve. Join us in spreading hope and healing through your generous donations to children's hospitals.",
        shortcampaign: "It is a heartfelt campaign dedicated to providing vital support to children's hospitals.",
        location: "Kasih Ibu Hospital",
        date: "03/ 03/ 2024",
        status: "Ongoing",
        imgsrc: "Assets/Images/Healing Hands Supporting Children's Hospitals through Donation_Img.jpg",
        volunteerslist: [
            { vname: "Ranaru" }
        ],
        donationslist: [
            { dname: "Ranaru", damount: 100 }
        ]
    },
];

// NAVIGATION BAR
let menuList = document.getElementById("menuList");
let sectionList = document.getElementById("sectionList");

menuList.style.maxHeight = "0px";
sectionList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
        sectionList.style.marginTop = "255px"; // Menggeser sectionList ke bawah
    } else {
        menuList.style.maxHeight = "0px";
        sectionList.style.marginTop = "0px"; // Mengembalikan margin ke nilai awal
    }
}

// INDEX PAGE
document.addEventListener("DOMContentLoaded", function () {

    function generateCampaignCardHTML(campaign) {
        return `
          <div class="grid-item">
              <div class="card">
                  <img src="${campaign.imgsrc}" alt="${campaign.titlecampaign}">
                  <div class="card-body">
                      <p class="card-title">${campaign.titlecampaign}</p>
                      <p class="card-des">${campaign.shortcampaign}</p>
                      <div class="card-more">
                          <p><i class="fa-solid fa-location-dot"></i> Location: ${campaign.location}</p>
                          <p><i class="fa-solid fa-calendar-days"></i> Date: ${campaign.date}</p>
                      </div>     
                      <a href="donation.html?title=${encodeURIComponent(campaign.titlecampaign)}" class="btn-to">Donate</a>
                  </div>
              </div>
          </div>
      `;
    }

    function displayCampaigns(campaigns, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        campaigns.forEach(campaigns => {
            const campaignCardHTML = generateCampaignCardHTML(campaigns);
            container.insertAdjacentHTML('beforeend', campaignCardHTML);
        });
    }

    const filteredCampaigns = campaigns.filter(campaign =>
        ["Donating Needs To others", "Bible study in communities", "Hope for Gaza: Nourishing Children, Nurturing Futures"].includes(campaign.titlecampaign)
    );

    displayCampaigns(filteredCampaigns, 'thecampaigns');
});

// CAMPAIGNS DETAIL PAGE
document.addEventListener("DOMContentLoaded", function () {
    // Function to retrieve URL parameters
    function getUrlParams(url) {
        const params = {};
        const urlSearchParams = new URLSearchParams(url.search);
        for (const [key, value] of urlSearchParams) {
            params[key] = value;
        }
        return params;
    }

    // Function to update donation details based on the campaign title
    function updateCampaignDetails(campaignName) {
        const campaign = campaigns.find(c => c.titlecampaign === campaignName);
        if (campaign) {
            const donateTitleElement = document.querySelector('.campaigns-title');
            const donateImage = document.querySelector('.details-img');
            const descElement = document.getElementById('desc');
            const locationIcon = document.getElementById('loc');
            const dateIcon = document.getElementById('dat');
            const statusIcon = document.getElementById('sta');
            const donateButton = document.getElementById('donateButton'); // Get the donate button element
            const donateButtontext = document.getElementById('dntbtn'); // Get the donate button element
            const participateButton = document.getElementById('trybtn'); // Get the "Let’s Participate" button element

            donateImage.src = campaign.imgsrc;
            donateImage.alt = campaign.titlecampaign;
            donateTitleElement.textContent = campaign.titlecampaign;
            descElement.textContent = campaign.detailcampaign;
            locationIcon.nextSibling.textContent = ` Location: ${campaign.location}`;
            dateIcon.nextSibling.textContent = ` Date: ${campaign.date}`;
            statusIcon.nextSibling.textContent = ` Status: ${campaign.status}`;


            // Disable the buttons if campaign status is "Completed"
            if (campaign.status === 'Completed') {
                participateButton.textContent = 'Ended'
                donateButtontext.textContent = 'Ended'
                donateButton.disabled = true;
                participateButton.disabled = true;
            } else {
                // Update the href attribute of the donate button
                donateButton.href = `donation.html?title=${encodeURIComponent(campaign.titlecampaign)}`;
            }

            // Update donation list table
            updateDonationList(campaign.donationslist);
            // Update volunteer list table
            updateVolunteersList(campaign.volunteerslist);
        } else {
            console.error("Campaign not found");
        }
    }

    // Function to update the donation list table
    function updateDonationList(donationList) {
        const tableBody = document.querySelector('.grid-item.table tbody');
        tableBody.innerHTML = '';
        donationList.forEach((donation, index) => {
            const row = `
              <tr>
                  <td>${index + 1}</td>
                  <td>${donation.dname}</td>
                  <td>$${donation.damount}</td>
              </tr>
          `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // Function to update the volunteer list table
    function updateVolunteersList(volunteersList) {
        const tableBody = document.querySelectorAll('.grid-item.table tbody')[1];
        tableBody.innerHTML = '';
        volunteersList.forEach((volunteer, index) => {
            const row = `
              <tr>
                  <td>${index + 1}</td>
                  <td>${volunteer.vname}</td>
              </tr>
          `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // Get the URL parameters
    const urlParams = getUrlParams(new URL(window.location.href));

    // Check if the title parameter exists
    if (urlParams.title) {
        // Update donation details based on the title parameter
        updateCampaignDetails(urlParams.title);
        loadVolunteersListFromLocalStorage()
        loadDonationListFromLocalStorage()
    } else {
        console.error('Campaign title not found in URL parameters.');
    }

    // Get a reference to the "Let’s Participate" button
    const participateButton = document.getElementById('trybtn');

    // Add an event listener to the button
    participateButton.addEventListener('click', handleParticipateButtonClick);

    // Define the function to handle the click event
    function handleParticipateButtonClick() {
        // Extract the campaign title from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const campaignTitle = urlParams.get('title');

        // Check if the campaign title is available in the URL
        if (campaignTitle) {
            // Find the campaign object
            const campaign = campaigns.find(c => c.titlecampaign === campaignTitle);

            // Check if the campaign exists
            if (campaign) {
                // Retrieve information to be added to the volunteer list
                const participantName = "YOU"; // Example participant name

                // Add the participant to the volunteer list
                campaign.volunteerslist.push({ vname: participantName });

                // Save the updated volunteer list to local storage
                localStorage.setItem('volunteers_' + campaignTitle, JSON.stringify(campaign.volunteerslist));

                // Display the updated volunteer list
                updateVolunteersList(campaign.volunteerslist);
            } else {
                console.error("Campaign not found");
            }
        } else {
            console.error("Campaign title not found in URL");
        }
    }
    function loadVolunteersListFromLocalStorage() {
        // Extract the campaign title from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const campaignTitle = urlParams.get('title');

        // Check if the campaign title is available in the URL
        if (campaignTitle) {
            const volunteersListString = localStorage.getItem('volunteers_' + campaignTitle);

            if (volunteersListString) {
                const volunteersList = JSON.parse(volunteersListString);
                // Display the loaded volunteer list
                updateVolunteersList(volunteersList);
            }
        }
    }
    function loadDonationListFromLocalStorage() {
        // Extract the campaign title from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const campaignTitle = urlParams.get('title');

        // Check if the campaign title is available in the URL
        if (campaignTitle) {
            const donationListString = localStorage.getItem('donations_' + campaignTitle);

            if (donationListString) {
                const donationList = JSON.parse(donationListString);
                // Display the loaded donation list
                updateDonationList(donationList);
            }
        }
    }
});

// DONATIONS PAGE
document.addEventListener("DOMContentLoaded", function () {
    // Function to retrieve URL parameters
    function getUrlParams(url) {
        const params = {};
        const urlSearchParams = new URLSearchParams(url.search);
        for (const [key, value] of urlSearchParams) {
            params[key] = value;
        }
        return params;
    }

    // Function to update donation details based on the campaign title
    function updateCampaignDetails(campaignName) {
        const campaign = campaigns.find(c => c.titlecampaign === campaignName);
        if (campaign) {
            const donateTitleElement = document.querySelector('.donate-title');
            const descriptionElement = document.querySelector('.c-des + p');
            const locationElements = document.querySelector('#loca')
            const dateElements = document.querySelector('#ate')
            const statusElements = document.querySelector('#stat')
            const donateImage = document.querySelector('.donate-image');
            donateImage.src = campaign.imgsrc;
            donateImage.alt = campaign.title;

            donateTitleElement.textContent = campaign.titlecampaign;
            descriptionElement.textContent = campaign.detailcampaign;

            dateElements.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Date: ${campaign.date}`;
            locationElements.innerHTML = `<i class="fa-solid fa-location-dot"></i> Location: ${campaign.location}`;
            statusElements.innerHTML = `<i class="fa-solid fa-play"></i> Status: ${campaign.status}`;
        } else {
            console.error("Campaign not found");
        }
    }

    // Get the URL parameters
    const urlParams = getUrlParams(new URL(window.location.href));


    // Check if the title parameter exists
    if (urlParams.title) {
        // Update donation details based on the title parameter
        updateCampaignDetails(urlParams.title);
    } else {
        console.error('Campaign title not found in URL parameters.');
    }

    // Add an event listener to the donate button
    document.getElementById('donbtn').addEventListener('click', handleParticipateButtonClick);

    // Define the function to handle the click event
    function handleParticipateButtonClick() {
        // Extract the campaign title from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const campaignTitle = urlParams.get('title');

        // Check if the campaign title is available in the URL
        if (campaignTitle) {
            // Retrieve form data
            const dname = document.querySelector('#fn').value;
            const email = document.querySelector('#em').value;
            const selectedAmount = document.querySelector('input[name="amount"]:checked');
            const damount = selectedAmount ? selectedAmount.value : ""; // Get the value of the checked radio button
            const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked');
            const paymentMethod = selectedPaymentMethod ? selectedPaymentMethod.value : ""; // Get the value of the checked radio button

            // Create an object to represent the donation
            const donation = {
                dname: dname,
                email: email,
                damount: damount,
                paymentMethod: paymentMethod
            };

            // Retrieve the existing donation list from local storage
            let donationList = localStorage.getItem('donations_' + campaignTitle);
            donationList = donationList ? JSON.parse(donationList) : [];

            // Add the new donation to the list
            donationList.push(donation);

            // Save the updated donation list to local storage
            localStorage.setItem('donations_' + campaignTitle, JSON.stringify(donationList));

            // Optionally, you can display a message or redirect the user
            alert('Thank you for your donation!');

            // Clear the form fields if needed
            clearFormFields();

        } else {
            console.error("Campaign title not found in URL");
        }
    }

    // Function to clear form fields
    function clearFormFields() {
        document.querySelector('#fn').value = '';
        document.querySelector('#em').value = '';
        document.querySelector('input[name="amount"]:checked').checked = false;
        document.querySelector('input[name="payment"]:checked').checked = false;
    }
});

// CAMPAIGN PAGE
document.addEventListener("DOMContentLoaded", function () {
    function generateProductCardHTML(campaign) {
        // Check if the campaign status is "Completed" and disable the button accordingly

        return `
                <div class="card">
                    <img src="${campaign.imgsrc}" alt="${campaign.titlecampaign}">
                    <div class="card-body">
                        <p class="card-title">${campaign.titlecampaign}</p>
                        <p class="card-des">${campaign.shortcampaign}</p>
                        <div class="card-more">
                            <p><i class="fa-solid fa-location-dot"></i> Location: ${campaign.location}</p>
                            <p><i class="fa-solid fa-calendar-days"></i> Date: ${campaign.date}</p>
                        </div>     
                        <a href="campaignsDetail.html?title=${encodeURIComponent(campaign.titlecampaign)}" class="btn-to">Donate</a>
                    </div>
                </div>
            `;
    }

    function displayProductsByStatus(campaigns, containerId, status) {
        const productContainer = document.getElementById(containerId);
        productContainer.innerHTML = '';

        const filteredCampaigns = campaigns.filter(campaign => campaign.status === status);
        filteredCampaigns.forEach(campaign => {
            const productCardHTML = generateProductCardHTML(campaign);
            productContainer.insertAdjacentHTML('beforeend', productCardHTML);
        });
    }

    displayProductsByStatus(campaigns, 'latest', 'Ongoing');
    displayProductsByStatus(campaigns, 'ongoing', 'Ongoing');
    displayProductsByStatus(campaigns, 'completed', 'Completed');
});



// VOLUNTEER PAGE
let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupForm = document.querySelector("form.signup");
let signupBtn = document.querySelector("label.signup");
let title = document.querySelector(".title-text .login");
let signUpLink = document.querySelector(".signup-link a");

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    title.style.marginLeft = "-50%";
    alert('Thank you Signing Up!');
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    title.style.marginLeft = "0%";
    alert('Login Sucessfull');
};

// Add event listeners to the login and signup buttons
document.getElementById('loginbtn').addEventListener('click', handleLoginButtonClick);
document.getElementById('signbtn').addEventListener('click', handleSignupButtonClick);

// Function to handle login button click
function handleLoginButtonClick(event) {
    event.preventDefault(); // Prevent form submission
    alert('Login Sucessfull');
}

// Function to handle signup button click
function handleSignupButtonClick(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you Signing Up!');
}


// signUpLink.onclick = () => {
//   signupBtn.click();
//   return false;
// };
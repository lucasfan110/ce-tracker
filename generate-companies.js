import { faker } from "@faker-js/faker";

const companyImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/640px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg",
    "https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg",
    "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg?format=pjeg&auto=webp&crop=16:9",
    "https://media.istockphoto.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=",
    "https://cdn.ihsmarkit.com/www/images/0821/Company-178447404.jpg",
    "https://www.singhalonline.com/assets/images/photos/header-2.jpg",
    "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
];

async function generateCompany() {
    const company = {
        name: faker.company.name(),
        type: [
            faker.company.buzzNoun(),
            faker.company.buzzNoun(),
            faker.company.buzzNoun(),
        ],
        image: companyImages[Math.floor(Math.random() * companyImages.length)],
        description: faker.company.catchPhrase(),
        location: faker.location.streetAddress(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
    };

    const res = await fetch(
        "http://localhost:8000/api/v1/users/65d6c1725ffaf7faa3377243/companies",
        {
            method: "POST",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDZjMTcyNWZmYWY3ZmFhMzM3NzI0MyIsImlhdCI6MTcwODU3Mzg2NCwiZXhwIjoxNzA5MTc4NjY0fQ.-CRUaTu3zmscfEa_i-lyX0trwyF3Ag-c7DHjLTETaUo",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company),
        }
    );
    const json = await res.json();
    console.log(json);
}

for (let i = 0; i < 25; i++) {
    await generateCompany();
}

console.log(faker.company.catchPhrase());

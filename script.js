let currentIndex = 0;

const imageGroups = {
    project1: ["res/images/project1/image1.png", "res/images/project1/image2.png", "res/images/project1/image3.png", "res/images/project1/image4.png", "res/images/project1/image5.png", "res/images/project1/image6.png", "res/images/project1/image7.png", "res/images/project1/image8.png", "res/images/project1/image9.png", "res/images/project1/image10.png"],
    project2: ["res/images/project2/image1.png", "res/images/project2/image2.png", "res/images/project2/image3.png", "res/images/project2/image4.png"],
    project3: ["res/images/project3/image1.png", "res/images/project3/image2.png", "res/images/project3/image3.png", "res/images/project3/image4.png"],
    project4: ["res/images/project4/image1.png", "res/images/project4/image2.png", "res/images/project4/image3.png", "res/images/project4/image4.png"],
    project5: ["res/images/project5/image1.png", "res/images/project5/image2.png", "res/images/project5/image3.png", "res/images/project5/image4.png", "res/images/project5/image5.png", "res/images/project5/image6.png", "res/images/project5/image7.png", "res/images/project5/image8.png", "res/images/project5/image9.png", "res/images/project5/image10.png", "res/images/project5/image11.png"],
    project6: ["res/images/project6/image1.png", "res/images/project6/image2.png", "res/images/project6/image3.png", "res/images/project6/image4.png", "res/images/project6/image5.png"]
};

function openModal(image) {
    const projectKey = getProjectKey(image);
    if (projectKey) {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modalImage").src = image;
        currentIndex = imageGroups[projectKey].indexOf(image);
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {
    const projectKey = getProjectKey(document.getElementById("modalImage").src);
    const images = imageGroups[projectKey];

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // İlk resimden önce giderse son resme git
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Son resimden sonra giderse ilk resme git
    }

    document.getElementById("modalImage").src = images[currentIndex];
}

function getProjectKey(image) {
    if (image.includes("project1")) return "project1";
    if (image.includes("project2")) return "project2";
    if (image.includes("project3")) return "project3";
    if (image.includes("project4")) return "project4";
    if (image.includes("project5")) return "project5";
    if (image.includes("project6")) return "project6";
    return null; // Eğer hiçbiri değilse null döner
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach((el) => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}

// Varsayılan dil olarak Türkçe'yi ayarla
changeLanguage('tr');

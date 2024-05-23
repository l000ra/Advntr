// script.js

// JavaScript-Code einfügen, um interaktive Elemente und Dropdowns zu implementieren

// Menu hamburger
function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show-menu");
}

// Bild-Galerie
let currentIndex = 0;
const images = document.querySelectorAll('.image-box');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);


//Insta
function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/discoverearth/';
}

// Liste des emojis de drapeaux
var flagEmojis = {
    'post1.jpg': '🇩🇪',
    'post2.jpg': '🇺🇸',
    'post3.jpg': '🇫🇷',
    'post4.jpg': '🇪🇸',
    'post5.jpg': '🇮🇹',
    'post6.jpg': '🇨🇳'
};

// Fonction pour ajouter l'overlay lors du survol avec le drapeau associé à chaque poste
function addOverlay(element, flag) {
    var overlay = document.createElement('div');
    overlay.classList.add('instagram-overlay');
    overlay.innerHTML = flag;
    element.appendChild(overlay);
}

// Fonction pour supprimer l'overlay
function removeOverlay(element) {
    var overlay = element.querySelector('.instagram-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// UHR FUNKTION
function updateTime(timezone) {
    const options = { timeZone: timezone, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    setInterval(() => {
        const timeString = new Date().toLocaleString('de-CH', options);
        document.getElementById("clock").textContent = timeString;
    }, 1000);
}

function initWorldClock() {
    // Ajouter un écouteur d'événement pour chaque bouton
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Récupérer le fuseau horaire correspondant au bouton cliqué
            const timezone = this.getAttribute("data-timezone");
            updateTime(timezone);
        });
    });

    // Afficher l'heure en temps réel au chargement de la page
    updateTime("UTC");
}

function initWorldClock() {
    // Ajouter un écouteur d'événement pour chaque bouton
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Supprimer la classe 'active' de tous les boutons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Ajouter la classe 'active' au bouton cliqué
            this.classList.add('active');

            // Récupérer le fuseau horaire correspondant au bouton cliqué
            const timezone = this.getAttribute("data-timezone");
            updateTime(timezone);
        });
    });

    // Sélectionner le premier bouton par défaut et le mettre en surbrillance
    buttons[0].click();
}


window.onload = initWorldClock;

//KONTAKT
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Créer une instance de l'objet XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurer la requête
    xhr.open('POST', 'send_email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Définir la fonction de rappel lors de la réception de la réponse
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Traitement de la réponse si nécessaire
            alert('E-mail envoyé avec succès !');
        } else {
            alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
        }
    };

    // Préparer les données à envoyer
    var data = 'name=' + encodeURIComponent(name) +
               '&email=' + encodeURIComponent(email) +
               '&message=' + encodeURIComponent(message);

    // Envoyer la requête avec les données du formulaire
    xhr.send(data);
}

//REISEBERICHTE
const upcomingReports = [
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
    {
        id: 'report2',
        title: 'Abenteuer in der Sahara',
        description: 'Ein Abenteuer durch die endlose Wüste.',
        image: 'img/Heißluftballon Patrik Svedberg.jpg',
        details: 'Erfahren Sie mehr über die Herausforderungen und Schönheiten der Sahara.',
        tips: 'Bringen Sie genügend Wasser mit und schützen Sie sich vor der Sonne.'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const reportsContainer = document.getElementById('upcoming-reports');

    upcomingReports.forEach(report => {
        const reportElement = document.createElement('div');
        reportElement.className = 'report';
        reportElement.id = report.id;
        reportElement.innerHTML = `
            <img src="${report.image}" alt="${report.title}">
            <h3>${report.title}</h3>
            <p>${report.description}</p>
        `;
        reportElement.addEventListener('click', () => openPopup(report.id));
        reportsContainer.appendChild(reportElement);
    });
});

function openPopup(reportId) {
    const report = upcomingReports.find(r => r.id === reportId);
    if (report) {
        document.getElementById('popup-image').src = report.image;
        document.getElementById('popup-title').textContent = report.title;
        document.getElementById('popup-description').textContent = report.description;
        document.getElementById('popup-details').textContent = report.details;
        document.getElementById('popup-tips').textContent = report.tips;
        document.getElementById('popup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Funktion zum Öffnen des Teilen-Modals
function openShareModal() {
    document.getElementById('share-modal').style.display = 'block';
}

// Funktion zum Schließen des Teilen-Modals
function closeShareModal() {
    document.getElementById('share-modal').style.display = 'none';
}



// WELTZEITUHR
const map = L.map('map').setView([0, 0], 2); // Centre de la carte et zoom par défaut
const apiUrl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=8GZH068JE3CE'; // Remplacez YOUR_API_KEY par votre propre clé d'API TimeZoneDB

// Ajout de la carte de base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fonction pour obtenir l'heure locale en fonction des coordonnées géographiques
async function getTimezone(lat, lng) {
  const response = await fetch(`${apiUrl}&format=json&by=position&lat=${lat}&lng=${lng}`);
  const data = await response.json();
  return data.formatted;
}

// Ajout d'un gestionnaire d'événement de clic sur la carte
map.on('click', async function(e) {
  const latlng = e.latlng;
  const formattedTime = await getTimezone(latlng.lat, latlng.lng);
  L.popup()
    .setLatLng(latlng)
    .setContent(`<div class="popup-content">Lokale Zeit : ${formattedTime}</div>`)
    .openOn(map);
});


// JavaScript-Code für die Kartenansicht mit Google Maps
document.addEventListener('DOMContentLoaded', function() {
    // Funktion zur Anzeige der Kartenansicht mit Google Maps
    function zeigeKartenansicht() {
        // Erstelle eine neue Google Maps-Karte
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644}, // Koordinaten für das Zentrum der Karte
            zoom: 8 // Zoomstufe der Karte
        });
    }

    // Button-Element auswählen
    var mapButton = document.getElementById('mapButton');

    // Event Listener hinzufügen
    mapButton.addEventListener('click', zeigeKartenansicht);
});

//KONTAKTFORMULAR
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Erstellen einer Mailto-URL mit den Formulardaten
    var mailtoLink = "mailto:yannick.hofmann00@gmail.com"
                     + "?subject=" + encodeURIComponent("Kontaktanfrage von " + name)
                     + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nNachricht: " + message);

    // Outlook-App URI
    var outlookAppUri = "ms-outlook://compose?to=yannick.hofmann00@gmail.com&subject=" + encodeURIComponent("Kontaktanfrage von " + name) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nNachricht: " + message);

    // Versuche, die Outlook-App zu öffnen
    window.location.href = outlookAppUri;

    // Wenn die Outlook-App nicht geöffnet werden kann, öffne den Mailto-Link
    setTimeout(function() {
        window.location.href = mailtoLink;
    }, 500);
}


// JavaScript pour gérer l'ouverture et la fermeture de la fenêtre pop-up
function openPopup() {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}



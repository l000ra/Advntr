// script.js

// JavaScript-Code einfügen, um interaktive Elemente und Dropdowns zu implementieren
//Funktionen wurden mit Chat GPT erstellt und mit eigenem Wissen korrekt eingesetzt, korrigiert oder ergänzt

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

// UHR FUNKTION
function updateTime(timezone) {
    const options = { timeZone: timezone, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    setInterval(() => {
        const timeString = new Date().toLocaleString('de-DE', options); // Übersetzung von 'de-CH' nach 'de-DE'
        document.getElementById("clock").textContent = timeString;
    }, 1000);
}

function initWorldClock() {
    // Hinzufügen eines Eventlisteners für jeden Button
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Entfernen der 'active'-Klasse von allen Buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Hinzufügen der 'active'-Klasse zum angeklickten Button
            this.classList.add('active');

            // Abrufen der Zeitzone, die dem angeklickten Button entspricht
            const timezone = this.getAttribute("data-timezone");
            updateTime(timezone);
        });
    });

    // Standardmäßig den ersten Button auswählen und markieren
    buttons[0].click();
}

window.onload = initWorldClock;

//KONTAKT
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Erstellen einer XMLHttpRequest-Instanz
    var xhr = new XMLHttpRequest();

    // Konfigurieren der Anfrage
    xhr.open('POST', 'send_email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Definieren der Rückruffunktion beim Empfangen der Antwort
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Verarbeiten der Antwort bei Bedarf
            alert('E-Mail erfolgreich versendet!');
        } else {
            alert('Beim Senden der E-Mail ist ein Fehler aufgetreten.');
        }
    };

    // Vorbereiten der zu sendenden Daten
    var data = 'name=' + encodeURIComponent(name) +
               '&email=' + encodeURIComponent(email) +
               '&message=' + encodeURIComponent(message);

    // Senden der Anfrage mit den Formulardaten
    xhr.send(data);
}

//REISEBERICHTE
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
const map = L.map('map').setView([0, 0], 2); // Zentrum der Karte und Standardzoom
const apiUrl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=8GZH068JE3CE'; // Ersetzen Sie YOUR_API_KEY durch Ihren eigenen TimeZoneDB-API-Schlüssel

// Hinzufügen der OpenStreetMap-Grundkarte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Funktion zum Abrufen der lokalen Uhrzeit basierend auf geografischen Koordinaten
async function getTimezone(lat, lng) {
  const response = await fetch(`${apiUrl}&format=json&by=position&lat=${lat}&lng=${lng}`);
  const data = await response.json();
  return data.formatted;
}

// Hinzufügen eines Klick-Eventhandlers auf der Karte
map.on('click', async function(e) {
  const latlng = e.latlng;
  const formattedTime = await getTimezone(latlng.lat, latlng.lng);
  L.popup()
    .setLatLng(latlng)
    .setContent(`<div class="popup-content">Lokale Zeit: ${formattedTime}</div>`)
    .openOn(map);
});

// KONTAKTFORMULAR
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
}

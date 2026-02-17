document.getElementById('monFormulaire').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la page de se recharger

    // Récupération des valeurs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const destination = "odreymvula05@gmail.com";

    // Construction du sujet et du corps du mail
    const sujet = encodeURIComponent("Nouveau message de " + nom);
    const corps = encodeURIComponent("Nom: " + nom + "\nEmail: " + email + "\n\nMessage:\n" + message);

    // Ouverture du client mail
    window.location.href = `mailto:${destination}?subject=${sujet}&body=${corps}`;
});

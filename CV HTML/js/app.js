// Sélection des éléments
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier si l'utilisateur a déjà choisi un thème dans le passé
const savedTheme = localStorage.getItem('theme');

// Si un thème est sauvegardé et qu'il est 'dark', on l'applique
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Écouteur d'événement sur le bouton
themeToggleBtn.addEventListener('click', () => {
    // Basculer la classe dark-mode sur le body
    body.classList.toggle('dark-mode');
    
    // Vérifier si le mode sombre est maintenant actif
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Mettre à jour l'aria-label pour l'accessibilité
    themeToggleBtn.setAttribute('aria-label', isDarkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre');
});
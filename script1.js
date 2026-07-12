/**
 * script1.js
 * Handles the logic for the Khmer Curriculum interactions and card highlighting.
 * Target Site: HUOKAING THARA INTERNATIONAL SCHOOL
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Khmer Curriculum Track initialized successfully.");
});

/**
 * Automatically forwards students to the official MOEYS E-Learning portal 
 * for their specific grade level.
 * 
 * @param {number} grade - The primary grade number (1 to 6)
 */
function navigateToKhmerLesson(grade) {
    if (!grade || grade < 1 || grade > 6) {
        console.error("Invalid grade level selected.");
        return;
    }

    // Official Ministry of Education, Youth and Sports (MoEYS) portal links mapping
    const moeysKhmerRoutes = {
        1: "https://elearning.moeys.gov.kh/k1/khmer/",
        2: "https://elearning.moeys.gov.kh/k2/khmer/",
        3: "https://elearning.moeys.gov.kh/k3/khmer/",
        4: "https://elearning.moeys.gov.kh/k4/khmer/",
        5: "https://elearning.moeys.gov.kh/k5/khmer/",
        6: "https://elearning.moeys.gov.kh/k6/khmer/"
    };

    const targetUrl = moeysKhmerRoutes[grade];
    console.log(`Redirecting to Grade ${grade} Khmer Portal: ${targetUrl}`);
    window.location.href = targetUrl;
}

/**
 * Highlights a specific curriculum card when selected via announcement or click notifications,
 * utilizing the smooth transition styles defined in section 3 of your style.css.
 * 
 * @param {string} cardId - The DOM element ID of the card to focus on
 */
function highlightCurriculumCard(cardId) {
    const cardElement = document.getElementById(cardId);
    
    if (!cardElement) {
        console.warn(`Card element with ID "${cardId}" not found.`);
        return;
    }

    // Scroll to the card smoothly
    cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Apply the ring-4 style configuration for the focus indicator
    cardElement.classList.add('ring-4');
    
    // Smoothly remove the emphasis indicator after 2.5 seconds
    setTimeout(() => {
        cardElement.classList.remove('ring-4');
    }, 2500);
}

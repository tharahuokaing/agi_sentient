/**
 * script.js
 * Interactivity file demonstrating AGI vs Sentience processing parameters.
 */

function analyzeFeature(type) {
    if (type === 'agi') {
        alert("🤖 AGI Action Triggered:\nProcessing quantum equations, translation loops, and deep-reasoning matrix data simultaneously. Output produced efficiently!");
    } else if (type === 'sentient') {
        // Find the target box
        const targetBox = document.getElementById('sentient-box');
        
        // Add custom shake animation indicating failure to programmatically force sentience
        if (targetBox) {
            targetBox.classList.add('animate-shake');
            
            // Remove the shake class after animation completes
            setTimeout(() => {
                targetBox.classList.remove('animate-shake');
            }, 400);
        }
        
        alert("⚠️ Consciousness Error:\nAn algorithm can execute complex logic (AGI), but cannot programmatically spark raw subjective feelings or sentient self-awareness.");
    }
}

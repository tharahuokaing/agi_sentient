/**
 * script1.js
 * Handles language localization and interactive content updates for 
 * HUOKAING THARA INTERNATIONAL SCHOOL.
 */

// 1. Translation Data Matrix
const khmerTranslations = {
    // School Branding & Universal Elements
    schoolTitle: "សាលាអន្តរជាតិ ហួកាំង ថារ៉ា",
    schoolSubtitle: "កម្មវិធីសិក្សាតាមប្រព័ន្ធអនឡាញ (ថ្នាក់ទី១ ដល់ ថ្នាក់ទី៦)",
    heroTagline: "អប់រំប្រកបដោយគុណភាព វិន័យ និងគុណធម៌",
    heroDesc: "ស្វាគមន៍មកកាន់ប្រព័ន្ធសិក្សាបែបឌីជីថលឈានមុខគេ។ យើងផ្តល់ជូននូវបរិយាកាសសិក្សាតាមអនឡាញដ៏សំបូរបែប ងាយស្រួល និងមានប្រសិទ្ធភាពខ្ពស់សម្រាប់កូនៗរបស់លោកអ្នក។",
    
    // Primary Curriculum Headers
    khmerCurriculumTitle: "កម្មវិធីសិក្សាភាសាខ្មែរ",
    mathCurriculumTitle: "កម្មវិធីសិក្សាកម្រិតបឋមសិក្សាគណិតវិទ្យា",
    mathPreCurriculumTitle: "វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា (មុនកម្រិតបឋមសិក្សា)",
    
    // Class Tracks & Descriptions
    prepMathTitle: "ថ្នាក់ត្រៀមគណិតវិទ្យា",
    prepMathDesc: "រៀនស្គាល់លេខ ការរាប់ចំនួនជាមូលដ្ឋាន រូបធរណីមាត្រសាមញ្ញ និងការគណនាកម្រិតដំបូង ដើម្បីបង្កើនភាពជឿជាក់ និងត្រៀមខ្លួនរួចជាស្រេចមុនចូលរៀនថ្នាក់ទី១។",
    
    grade1_2Title: "ថ្នាក់ទី១ និង ទី២",
    grade1_2Desc: "ពង្រឹងមូលដ្ឋានគ្រឹះអក្សរសាស្ត្រខ្មែរ/គណិតវិទ្យាដំបូង និងជំនាញទំនាក់ទំនងជាមូលដ្ឋាន។",
    
    grade3_4Title: "ថ្នាក់ទី៣ និង ទី៤",
    grade3_4Desc: "អភិវឌ្ឍការគិតពិចារណា ការសិក្សាភាសាបរទេសកម្រិតដំបូង និងវិទ្យាសាស្ត្រសង្គមផ្សេងៗ។",
    
    grade5_6Title: "ថ្នាក់ទី៥ និង ទី៦",
    grade5_6Desc: "ត្រៀមលក្ខណៈសម្រាប់ការផ្លាស់ប្តូរទៅកាន់មធ្យមសិក្សា ជាមួយមេរៀនស៊ីជម្រៅ និងបច្ចេកវិទ្យា។",
    
    // Buttons & Miscellaneous
    btnViewDetails: "🔽 មើលលម្អិត",
    btnEnterPrepClass: "ចូលរៀនថ្នាក់ត្រៀមគណិតវិទ្យា",
    complianceText: "រាល់កម្មវិធីសិក្សាតាមអនឡាញទាំងអស់របស់សាលាអន្តរជាតិ ហួកាំង ថារ៉ា ត្រូវបានរៀបចំឡើងយ៉ាងហ្មត់ចត់ ដើម្បីធានាបាននូវគុណភាពសិក្សាខ្ពស់ស្របតាមការណែនាំរបស់ក្រសួង។"
};

/**
 * Automatically applies translation strings to elements matching data attributes
 * with a smooth transition.
 */
function translatePageToKhmer() {
    console.log("Translating interface elements to Khmer...");

    // Query all elements containing a localized data attribute markup
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        
        if (khmerTranslations[translationKey]) {
            // Apply a brief fade-out effect if element has transition classes
            element.style.opacity = '0';
            
            setTimeout(() => {
                // Insert the Khmer text structure
                element.textContent = khmerTranslations[translationKey];
                
                // Add the layout font family class dynamically
                element.classList.add('font-khmer');
                
                // Fade back in smoothly
                element.style.opacity = '1';
                element.style.transition = 'opacity 0.3s ease';
            }, 150);
        }
    });
}

/**
 * Highlight and focus cards when an announcement or navigation trigger is executed
 * @param {string} cardId - The target element ID attribute
 */
function highlightCurriculumCard(cardId) {
    const targetCard = document.getElementById(cardId);
    if (targetCard) {
        // Scroll smoothly to target element context
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Apply the custom transition state ring defined in style.css
        targetCard.classList.add('ring-4');
        
        // Remove the visual ring flash after attention is captured
        setTimeout(() => {
            targetCard.classList.remove('ring-4');
        }, 1600);
    }
}

// Initialize when DOM is structurally verified
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Trigger automatic translation translation layer execution
    // translatePageToKhmer();
});

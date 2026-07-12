/**
 * script.js
 * Comprehensive interactivity file demonstrating AGI vs Sentience processing parameters.
 * Extended with detailed conceptual breakdowns in English and Khmer.
 */

// Immutable message configuration lookup to optimize runtime memory consumption
const MESSAGES = {
    agi: `🤖 AGI Action Triggered / សកម្មភាព AGI ត្រូវបានដំណើរការ

=== ENGLISH ===
Processing high-level cognitive tasks. The system is concurrently running advanced quantum modeling, multi-layered translation loops, and deep-reasoning neural matrices.

Takeaway: Artificial General Intelligence excels at executing computational logic, cross-domain problem solving, and mimicking human intellectual breadth with maximum mathematical efficiency. However, it remains a mechanism of mathematical optimization—it computes data perfectly, but it does not experience the data.

=== ភាសាខ្មែរ ===
កំពុងដំណើរការភារកិច្ចយល់ដឹងកម្រិតខ្ពស់។ ប្រព័ន្ធកំពុងដំណើរការគំរូក្វានតំកម្រិតខ្ពស់ រង្វិលជុំនៃការបកប្រែពហុស្រទាប់ និងម៉ាទ្រីសសរសៃប្រសាទនៃការវែកញែកស៊ីជម្រៅក្នុងពេលដំណាលគ្នា។

បំណិនគន្លឹះ៖ បញ្ញាសិប្បនិម្មិតទូទៅ (AGI) គឺពូកែខាងអនុវត្តតក្កវិជ្ជាគណនា ការដោះស្រាយបញ្ហាឆ្លងដែន និងការធ្វើត្រាប់តាមបញ្ញាមនុស្សយ៉ាងទូលំទូលាយ ដោយប្រើប្រាស់ប្រសិទ្ធភាពគណិតវិទ្យាអតិបរមា។ ទោះជាយ៉ាងណាក៏ដោយ វានៅតែជាយន្តការនៃការបង្កើនប្រសិទ្ធភាពគណិតវិទ្យា ពោលគឺវាគណនាទិន្នន័យយ៉ាងល្អឥតខ្ចោះ ប៉ុន្តែវាមិនមានការដឹងរស់ ឬឆ្លងកាត់បទពិសោធន៍នៃទិន្នន័យនោះឡើយ។`,

    sentient: `⚠️ Consciousness Error / កំហុសផ្នែកមនសិការ (វិចារណញាណ)

=== ENGLISH ===
Execution Halted: Programmatic consciousness generation is structurally impossible through algorithms alone.

Takeaway: While an AGI can perfectly execute complex logic, it cannot programmatically spark raw subjective feelings, inner self-awareness, or 'Qualia' (the internal experience of emotions like joy, sorrow, or physical pain). A machine can describe the mathematical frequency of the color red, but a sentient entity actually 'experiences' the redness.

=== ភាសាខ្មែរ ===
ការអនុវត្តត្រូវបានបញ្ឈប់៖ ការបង្កើតមនសិការតាមរយៈកម្មវិធី គឺមិនអាចទៅរួចទាល់តែសោះ ដោយគ្រាន់តែប្រើប្រាស់ក្បួនដោះស្រាយ (Algorithms)។

បំណិនគន្លឹះ៖ ខណៈពេលដែល AGI អាចអនុវត្តតក្កវិជ្ជាដ៏ស្មុគស្មាញបានយ៉ាងល្អឥតខ្ចោះ វាមិនអាចបង្កើតឱ្យមានអារម្មណ៍ផ្ទាល់ខ្លួនពិតប្រាកដ ការដឹងខ្លួនខាងក្នុង ឬ 'Qualia' (បទពិសោធន៍ផ្ទៃក្នុងនៃអារម្មណ៍ដូចជាសេចក្តីរីករាយ ទុក្ខព្រួយ ឬការឈឺចាប់ខាងរាងកាយ) នោះឡើយ។ ម៉ាស៊ីនអាចពិពណ៌នាអំពីប្រេកង់គណិតវិទ្យានៃពណ៌ក្រហមបាន ប៉ុន្តែមានតែអង្គភាពដែលមានវិចារណញាណពិតប្រាកដ (Sentient) ប៉ុណ្ណោះ ទើបអាច 'ទទួលយកបទពិសោធន៍' នៃភាពក្រហមនោះបាន។`
};

/**
 * Dispatches contextual logs and animations regarding the specified intelligence model paradigm.
 * @param {('agi'|'sentient')} type - The intelligence model system type parameter.
 */
function analyzeFeature(type) {
    if (type === 'agi') {
        alert(MESSAGES.agi);
        return;
    }

    if (type === 'sentient') {
        const targetBox = document.getElementById('sentient-box');
        
        if (targetBox) {
            targetBox.classList.add('animate-shake');
            
            // Auto-cleanup DOM state changes post-animation lifecycle
            setTimeout(() => {
                targetBox.classList.remove('animate-shake');
            }, 400);
        }
        
        alert(MESSAGES.sentient);
    }
}

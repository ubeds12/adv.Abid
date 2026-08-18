// 1. Bar Council of India Disclaimer Logic
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('bci-modal');
    const agreeBtn = document.getElementById('btn-agree');
    
    if(sessionStorage.getItem('bci_agreed') === 'true') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    } else {
        document.body.style.overflow = 'hidden'; 
    }

    agreeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        sessionStorage.setItem('bci_agreed', 'true');
    });

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.nextElementSibling.style.maxHeight = null;
                }
            });

            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 3. Hero Section Right-to-Left Slideshow Logic
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('prev');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides.forEach((slide, index) => {
                if (index !== currentSlide) {
                    slide.classList.remove('prev');
                }
            });
            slides[currentSlide].classList.add('active');
        }, 4500);
    }
});

// 4. Notable Judgments Toggle Dropdown Logic
function toggleJudgments() {
    const extraContent = document.getElementById('extra-judgments');
    const toggleText = document.getElementById('toggle-text');
    const toggleArrow = document.getElementById('toggle-arrow');

    if (extraContent.style.maxHeight && extraContent.style.maxHeight !== "0px") {
        extraContent.style.maxHeight = null;
        toggleText.innerText = "View More Judgments";
        toggleArrow.innerHTML = "&#9662;"; // Down arrow
    } else {
        extraContent.style.maxHeight = extraContent.scrollHeight + "px";
        toggleText.innerText = "View Less Judgments";
        toggleArrow.innerHTML = "&#9652;"; // Up arrow
    }
}

// 5. WhatsApp Form Submission Logic (Contact Section)
function sendToWhatsApp(event) {
    event.preventDefault(); 

    const name = document.getElementById('client-name').value;
    const email = document.getElementById('client-email').value;
    const phone = document.getElementById('client-phone').value;
    const matter = document.getElementById('client-matter').value;

    const waNumber = "917798486728";

    const message = `Hello Adv. Abid Shaikh,\n\nI am contacting you from your website to request a consultation. Here are my details:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Legal Matter:* ${matter}`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waLink, '_blank');
}

// 6. WhatsApp Floating Button Modal Logic
function openWAModal(event) {
    event.preventDefault();
    document.getElementById('wa-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeWAModal() {
    document.getElementById('wa-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sendModalToWhatsApp(event) {
    event.preventDefault(); 

    const name = document.getElementById('modal-client-name').value;
    const email = document.getElementById('modal-client-email').value;
    const phone = document.getElementById('modal-client-phone').value;
    const matter = document.getElementById('modal-client-matter').value;

    const waNumber = "917798486728";

    const message = `Hello Adv. Abid Shaikh,\n\nI am contacting you from your website to request a consultation. Here are my details:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Legal Matter:* ${matter}`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waLink, '_blank');
    closeWAModal();
}

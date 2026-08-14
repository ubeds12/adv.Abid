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
});

// 3. Notable Judgments Toggle Dropdown Logic
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

// 4. Press Photo Lightbox / Slideshow Logic
const pressGalleryData = [
    {
        src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600",
        caption: "[Insert Headline / Publication 1 Description]"
    },
    {
        src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
        caption: "[Insert Headline / Publication 2 Description]"
    },
    {
        src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
        caption: "[Insert Headline / Publication 3 Description]"
    }
];

let currentSlideIndex = 0;

function openLightbox(index) {
    currentSlideIndex = index;
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateSlide();
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= pressGalleryData.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = pressGalleryData.length - 1;
    }
    updateSlide();
}

function updateSlide() {
    const imgElement = document.getElementById('lightbox-img');
    const captionElement = document.getElementById('lightbox-caption');
    
    imgElement.src = pressGalleryData[currentSlideIndex].src;
    captionElement.innerText = pressGalleryData[currentSlideIndex].caption;
}

// 5. WhatsApp Form Submission Logic
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
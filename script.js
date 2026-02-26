// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Random position
    const startPosition = Math.random() * window.innerWidth;
    heart.style.left = `${startPosition}px`;
    
    // Random size
    const size = Math.random() * 25 + 15; // Increased size range
    heart.style.fontSize = `${size}px`;
    
    // Random animation duration
    const duration = Math.random() * 6 + 6; // Increased duration
    heart.style.animationDuration = `${duration}s`;
    
    // Random delay
    const delay = Math.random() * 5;
    heart.style.animationDelay = `${delay}s`;
    
    // Random color variation
    const colors = ['#ff6b6b', '#ff8e8e', '#ffafcc', '#ffb6c1', '#ffc0cb', '#ff69b4'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Append to the correct container based on page
    const heartsContainer = document.querySelector('.floating-hearts') || document.body;
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create initial hearts
for (let i = 0; i < 25; i++) { // Increased from 15 to 25
    setTimeout(() => {
        createFloatingHeart();
    }, i * 300); // Faster creation
}

// Continuously create hearts
setInterval(createFloatingHeart, 500); // More frequent creation

// Function to navigate to individual image page (for gallery.html)
function openImagePage(imageNumber) {
    window.location.href = `image${imageNumber}.html`;
}

// Quotes Section - Cycle through quotes (for index page)
document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quote');
    if (quotes.length > 0) {
        let currentQuoteIndex = 0;

        function showNextQuote() {
            // Hide current quote
            quotes[currentQuoteIndex].classList.remove('active');
            
            // Move to next quote
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            
            // Show next quote
            quotes[currentQuoteIndex].classList.add('active');
        }

        const nextQuoteBtn = document.getElementById('next-quote');
        if (nextQuoteBtn) {
            nextQuoteBtn.addEventListener('click', showNextQuote);
        }

        // Auto cycle quotes every 5 seconds
        setInterval(showNextQuote, 5000);
    }
    
    // Surprise Message
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');
    if (surpriseBtn && surpriseMessage) {
        surpriseBtn.addEventListener('click', function() {
            surpriseMessage.classList.toggle('surprise-visible');
            surpriseMessage.classList.toggle('surprise-hidden');
            
            // Add extra animation effect
            this.textContent = this.textContent === 'Click for Surprise!' ? 'Click Again!' : 'Click for Surprise!';
        });
    }
    
    // Typing animation for special message
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing animation to the special message
    const typedElement = document.getElementById('typed-message');
    if (typedElement) {
        const fullText = "Dear best friend, thank you for being the light in my life...";
        
        // Add a slight delay before starting the typing effect
        setTimeout(() => {
            typeWriter(typedElement, fullText, 70);
        }, 1000);
    }
});

// Theme Toggle - Handle multiple instances safely
document.addEventListener('DOMContentLoaded', function() {
    // Check if theme button exists before adding event listener
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        // Remove any existing event listeners to avoid duplicates
        const newThemeBtn = themeBtn.cloneNode(true);
        if(themeBtn.parentNode) {
            themeBtn.parentNode.replaceChild(newThemeBtn, themeBtn);
        }
        
        newThemeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            this.textContent = isDarkTheme ? '☀️' : '🌙';
        });
    }
    
    // Music functionality with fallback
    const musicBtn = document.getElementById('music-btn');
    const backgroundMusic = document.getElementById('background-music');
    let isMusicPlaying = false;

    if (musicBtn && backgroundMusic) {
        // Try to load the local file first
        backgroundMusic.addEventListener('error', function() {
            console.log('Local music file not found, using fallback');
            // Fallback to a free audio source
            backgroundMusic.innerHTML = `
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
            `;
            backgroundMusic.load();
        });

        musicBtn.addEventListener('click', () => {
            if (isMusicPlaying) {
                backgroundMusic.pause();
                musicBtn.textContent = '🎵';
                musicBtn.classList.remove('playing');
                isMusicPlaying = false;
                // Hide lyrics when music stops
                const lyrics = document.querySelector('.song-lyrics');
                if (lyrics) lyrics.style.display = 'none';
            } else {
                backgroundMusic.play().then(() => {
                    musicBtn.textContent = '⏸️';
                    musicBtn.classList.add('playing');
                    isMusicPlaying = true;
                    // Show romantic lyrics when music starts
                    showRomanticLyrics();
                }).catch(error => {
                    console.log('Autoplay prevented:', error);
                    alert('Click the music button to start playing! 🎵');
                });
            }
        });
    }

    // Function to show romantic lyrics (including "Kaadhal en kaviye" theme)
    function showRomanticLyrics() {
        // Create or show lyrics section
        let lyrics = document.querySelector('.song-lyrics');
        if (!lyrics) {
            lyrics = document.createElement('div');
            lyrics.className = 'song-lyrics';
            lyrics.innerHTML = `
                <div class="lyrics-container">
                    <h3>🎵 Kaadhal en kaviye... 🎵</h3>
                    <p>For my dearest friend, my heart's melody...</p>
                    <p>Love flows like poetry through every moment we share</p>
                    <p>Every beat echoes with memories so sweet</p>
                    <div class="heart-animation">❤️</div>
                </div>
            `;
            document.body.appendChild(lyrics);
        }
        lyrics.style.display = 'block';
    }

    // Add more impressive animations to various elements
    function addImpressiveAnimations() {
        // Add pulse animation to buttons
        const allButtons = document.querySelectorAll('button:not(.close)');
        allButtons.forEach(button => {
            if (!button.classList.contains('pulse')) {
                button.classList.add('pulse');
            }
        });
        
        // Add bounce animation to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            if (!heading.classList.contains('bounce')) {
                heading.classList.add('bounce');
            }
        });
    }

    // Add floating animation to CSS
    if (!document.getElementById('dynamic-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-styles';
        style.innerHTML = `
            @keyframes floatEffect {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            
            .gallery-item {
                animation: fadeIn 0.8s ease-out;
            }
            
            .gallery-item:nth-child(1) { animation-delay: 0.1s; }
            .gallery-item:nth-child(2) { animation-delay: 0.2s; }
            .gallery-item:nth-child(3) { animation-delay: 0.3s; }
            .gallery-item:nth-child(4) { animation-delay: 0.4s; }
            .gallery-item:nth-child(5) { animation-delay: 0.5s; }
            .gallery-item:nth-child(6) { animation-delay: 0.6s; }
            .gallery-item:nth-child(7) { animation-delay: 0.7s; }
            
            .bounce {
                animation: bounce 0.8s ease infinite alternate;
            }

            @keyframes bounce {
                from { transform: translateY(0); }
                to { transform: translateY(-10px); }
            }

            .pulse {
                animation: pulse 1.5s ease infinite;
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize impressive animations on load
    window.addEventListener('load', addImpressiveAnimations);
    
    // Add scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-friendship p, .gallery-grid, .quote-container, .message-box, .image-story, .surprise-content');
        
        elements.forEach(element => {
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }
        });
    }

    // Set initial state for scroll animations
    document.querySelectorAll('.about-friendship p, .gallery-grid, .quote-container, .message-box, .image-story, .surprise-content').forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);

    // Initialize scroll animations on load
    animateOnScroll();
});

// Add a subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${rate}px`;
    }
});

// Add click effect for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn:not(.close):not(#trigger-confetti)');
    buttons.forEach(button => {
        // Remove any existing event listeners to avoid duplicates
        const newButton = button.cloneNode(true);
        if(button.parentNode) {
            button.parentNode.replaceChild(newButton, button);
        }
        
        newButton.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});

// Enhanced Animation Classes - Add only if not already present
if (!document.querySelector('#animation-classes')) {
    const animationStyle = document.createElement('style');
    animationStyle.id = 'animation-classes';
    animationStyle.innerHTML = `
        .bounce {
            animation: bounce 0.8s ease infinite alternate;
        }

        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-10px); }
        }

        .pulse {
            animation: pulse 1.5s ease infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(animationStyle);
}

// Image Modal Functionality - ONLY on pages that are NOT the gallery page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the gallery page by looking for the openImagePage function
    // If we are on gallery page, don't activate modal functionality
    const isGalleryPage = typeof openImagePage !== 'undefined' && document.querySelector('.circular');
    
    if (!isGalleryPage) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if(galleryItems.length > 0) {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-img');
            const captionText = document.getElementById('caption');
            const closeSpan = document.querySelector('.close');

            if(modal && modalImg && captionText && closeSpan) {
                // For each gallery item, add click event
                galleryItems.forEach((item, index) => {
                    item.addEventListener('click', function() {
                        // Get the image source
                        const imgSrc = this.querySelector('img').src;
                        const altText = this.querySelector('img').alt;
                        
                        // Set modal content
                        modalImg.src = imgSrc;
                        captionText.innerHTML = `<h3>Beautiful Memory ${index + 1}</h3><p>${altText}</p>`;
                        
                        // Show modal
                        modal.style.display = 'block';
                        
                        // Add love hearts animation
                        createLoveHearts();
                    });
                });

                // Close modal when clicking on 'x'
                closeSpan.onclick = function() {
                    modal.style.display = 'none';
                };

                // Close modal when clicking outside the image
                window.onclick = function(event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                };

                // Create love hearts when image is clicked
                function createLoveHearts() {
                    const heartsContainer = document.querySelector('.hearts-container');
                    
                    if(heartsContainer) {
                        // Clear previous hearts
                        heartsContainer.innerHTML = '';
                        
                        // Create multiple hearts
                        for (let i = 0; i < 20; i++) {
                            setTimeout(() => {
                                const heart = document.createElement('div');
                                heart.className = 'love-heart';
                                heart.innerHTML = '❤️';
                                
                                // Random position around the image
                                const posX = Math.random() * 100;
                                const posY = Math.random() * 100;
                                
                                heart.style.left = `${posX}%`;
                                heart.style.top = `${posY}%`;
                                
                                // Random size
                                const size = Math.random() * 20 + 15;
                                heart.style.fontSize = `${size}px`;
                                
                                // Random color
                                const colors = ['#ff6b6b', '#ff8e8e', '#ffafcc', '#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493'];
                                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                                
                                // Random animation values
                                const tx = (Math.random() - 0.5) * 200; // -100 to 100
                                const ty = (Math.random() - 0.5) * 200; // -100 to 100
                                
                                heart.style.setProperty('--tx', `${tx}px`);
                                heart.style.setProperty('--ty', `${ty}px`);
                                
                                heartsContainer.appendChild(heart);
                                
                                // Remove heart after animation completes
                                setTimeout(() => {
                                    heart.remove();
                                }, 3000);
                            }, i * 100); // Stagger the creation
                        }
                    }
                }
            }
        }
    }
});
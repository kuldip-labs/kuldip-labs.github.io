// Particle Background Animation
        function createParticles() {
            const bg = document.getElementById('bgAnimation');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.width = particle.style.height = (Math.random() * 4 + 1) + 'px';
                particle.style.opacity = Math.random() * 0.5 + 0.2;
                bg.appendChild(particle);
            }
        }

        // Typing Animation
        const heroText = "Building Tomorrow's Intelligence Today with Microsoft Azure AI";
        let i = 0;
        function typeWriter() {
            const element = document.getElementById('heroText');
            if (i < heroText.length) {
                element.textContent = heroText.slice(0, i + 1);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Counter Animation
        function animateCounters() {
            const counters = {
                projectsCount: 150,
                clientsCount: 50,
                accuracy: 99.8,
                uptime: 99.99
            };

            Object.keys(counters).forEach(key => {
                const element = document.getElementById(key);
                let current = 0;
                const increment = counters[key] / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= counters[key]) {
                        element.textContent = key === 'accuracy' || key === 'uptime' 
                            ? counters[key].toFixed(1) + '%' 
                            : counters[key] + '+';
                        clearInterval(timer);
                    } else {
                        element.textContent = key === 'accuracy' || key === 'uptime' 
                            ? current.toFixed(1) + '%' 
                            : Math.ceil(current) + '+';
                    }
                }, 30);
            });
        }

        // Scroll Reveal Animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
             emailjs.sendForm('service_xk2l4a3', 'template_v0pxdr9', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        alert('Thank you! Your AI project inquiry has been sent. We\'ll contact you within 24 hours.');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            
            this.reset();
        });
              

        // Intersection Observer for Stats Animation
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        statsObserver.observe(document.querySelector('.stats'));

        // Initialize
        window.addEventListener('load', () => {
            createParticles();
            setTimeout(typeWriter, 1000);
            revealOnScroll();
        });

        window.addEventListener('scroll', revealOnScroll);
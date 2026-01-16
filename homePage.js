 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Profile Dropdown
        const profileIcon = document.querySelector('.profile-icon');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        profileIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
        });

        dropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Dropdown item clicks
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const text = item.textContent.trim();

                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = item.classList.contains('sign-in') ? '#e74c3c' : '#0066ff';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '25px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.transform = 'translateX(400px)';
                notification.style.transition = 'transform 0.3s ease';
                notification.textContent = `${text} clicked!`;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(400px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);

                dropdownMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (!this.classList.contains('dropdown-item')) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Category card hover effect
        const categoryCards = document.querySelectorAll('.category-card');

        categoryCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Project card button interactions
        const buyButtons = document.querySelectorAll('.project-card .btn:not(.btn-outline)');
        const previewButtons = document.querySelectorAll('.project-card .btn-outline');

        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectTitle = button.closest('.project-content').querySelector('.project-title').textContent;
                const projectPrice = button.closest('.project-content').querySelector('.project-price').textContent;

                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = '#0066ff';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '25px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.transform = 'translateX(400px)';
                notification.style.transition = 'transform 0.3s ease';
                notification.innerHTML = `<strong>${projectTitle}</strong> added to cart for ${projectPrice}!`;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(400px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            });
        });

        previewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectTitle = button.closest('.project-content').querySelector('.project-title').textContent;

                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = '#4d94ff';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '25px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.transform = 'translateX(400px)';
                notification.style.transition = 'transform 0.3s ease';
                notification.innerHTML = `Opening preview for <strong>${projectTitle}</strong>...`;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(400px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            });
        });

        // // Book card hover effects
        const bookCards = document.querySelectorAll('.book-card');

        bookCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // // Book card button interactions
        const bookButtons = document.querySelectorAll('.book-card .btn');

        bookButtons.forEach(button => {
            button.addEventListener('click', () => {
                const bookTitle = button.closest('.book-content').querySelector('.book-title').textContent;
                const bookPrice = button.closest('.book-content').querySelector('.book-price').textContent;

                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = '#0066ff';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '25px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.transform = 'translateX(400px)';
                notification.style.transition = 'transform 0.3s ease';
                notification.innerHTML = `<strong>${bookTitle}</strong> added to cart for ${bookPrice}!`;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(400px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            });
        });
        const grid = document.getElementById('booksGrid');
        window.addEventListener('scroll', () => {
            const rect = grid.getBoundingClientRect();
            if (rect.top < 300) {
                grid.classList.add('active');
            } else {
                grid.classList.remove('active');
            }
        });

        // Blog card hover effects
        const blogCards = document.querySelectorAll('.blog-card');

        blogCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Pause testimonial scroll on hover
        const testimonialsContainer = document.querySelector('.testimonials-container');
        if (testimonialsContainer) {
            testimonialsContainer.addEventListener('mouseenter', () => {
                testimonialsContainer.style.animationPlayState = 'paused';
            });
            testimonialsContainer.addEventListener('mouseleave', () => {
                testimonialsContainer.style.animationPlayState = 'running';
            });
        }

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        });

        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = e.target.querySelector('input[type="email"]').value;

                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = '#0066ff';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '25px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.transform = 'translateX(400px)';
                notification.style.transition = 'transform 0.3s ease';
                notification.textContent = `Thank you for subscribing with ${email}!`;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(400px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);

                e.target.reset();
            });
        }

        // Add active class to navigation based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
<template>
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#" data-aos="fade-right">
                <img src='../assets/logo.png' style="height: 50px; width: 50px;" /> Ugo & Bertram
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" data-aos="fade-left" data-aos-delay="100">
                        <a class="nav-link" href="#hero">
                            <i class="fas fa-home"></i> Home
                        </a>
                    </li>
                    <li class="nav-item" data-aos="fade-left" data-aos-delay="200">
                        <a class="nav-link" href="#story">
                            <i class="fas fa-heart"></i> Our Story
                        </a>
                    </li>
                    <li class="nav-item" data-aos="fade-left" data-aos-delay="300">
                        <a class="nav-link" href="#timeline">
                            <i class="fas fa-clock"></i> Timeline
                        </a>
                    </li>
                    <li class="nav-item" data-aos="fade-left" data-aos-delay="400">
                        <a class="nav-link" href="#gallery">
                            <i class="fas fa-images"></i> Gallery
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section with Bootstrap Carousel -->
    <section id="hero" class="hero">
        <div id="heroCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel" data-bs-interval="4000">
            <!-- Carousel Indicators -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Forever Together"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Our Journey"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"
                    aria-label="First Meeting"></button>
            </div>

            <!-- Carousel Items -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="hero-content">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Forever & Always</h1>
                        <p class="subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Where
                            Our Love Story Began</p>
                        <p class="wedding-date" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">{{
                            weddingDate }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="hero-content">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Our Beautiful Journey</h1>
                        <p class="subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Through
                            Every Step Together</p>
                        <p class="wedding-date" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            {{ weddingDate }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="hero-content">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Ugochi & Bertram</h1>
                        <p class="subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            Celebrating Our Eternal Love</p>
                        <p class="wedding-date" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">{{
                            weddingDate }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Hearts -->
        <div class="floating-hearts">
            <div v-for="(heart, index) in hearts" :key="index" class="heart"
                :style="{ left: heart.x + '%', animationDelay: heart.delay + 's' }">
                ♥
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="story" class="section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">About Us</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="love-story" data-aos="zoom-in" data-aos-delay="200">
                        <div class="love-story-content">
                            <div class="text-center">
                                <p>#BelovedUnion, Officially June 14, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 class="sub-section-title text-center" data-aos="fade-up">About Bertram</h6>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div>
                        <div class="about-text">
                            <p>Bertram emboldens resilience, forward-thinking and positivity. He was trained as a
                                Marine and Offshore Engineer at the Federal University of Petroleum Resources Delta
                                State where he met his B!Loved Ugoo…
                                B! as fondly called by Ugoo is altruistic and carries an amazing charisma of
                                kindness towards humanity.
                                He is an ardent lover of God and passionate about bettering the cause of humanity
                                particularly in the area of education and technical entrepreneurship.
                                His career as an engineer is with a leading Nigerian energy provider.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h6 class="sub-section-title text-center" data-aos="fade-up">About Ugochi</h6>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div>
                        <div class="about-text">
                            <p>Ugochi radiates positivity, determination, and a passion for impact. A graduate of
                                Marine Engineering from the Federal University of Petroleum Resources, Effurun
                                (FUPRE), she specialized in Ship Power Plant Engineering, where her curiosity for
                                solving real-world challenges took root.
                                Deeply passionate about entrepreneurship, Ugochi channels her energy into building
                                digital solutions that transform both the education and maritime sectors through
                                innovation.
                                Known for her strong work ethic and unwavering optimism, Ugochi believes in the
                                power of technology, community, and purpose-driven work to shape a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Love Story Section -->
    <section id="story" class="section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">Our Love Story</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="love-story" data-aos="zoom-in" data-aos-delay="200">
                        <div class="love-story-content">
                            <div class="text-center">
                                <i class="fas fa-quote-left quote-icon"></i>
                            </div>
                            <p data-aos="fade-up" data-aos-delay="400">"From the moment my eyes saw her across that
                                crowded queue to mark our first lecture attendance, I knew something magical was
                                beginning. What started as a heated encounter became the greatest adventure of our
                                lives."</p>
                            <p data-aos="fade-up" data-aos-delay="600">"Through laughter and tears, adventures and
                                quiet moments, we discovered that love isn't just a feeling—it's a choice we make
                                every day to support, cherish, and grow together."</p>
                            <p data-aos="fade-up" data-aos-delay="800">"Today we celebrate not just our wedding day,
                                but the beautiful journey that brought us here and the incredible future we're
                                building together."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Timeline Section -->
    <section id="timeline" class="section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">Our Journey Together</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="timeline">
                        <div v-for="(event, index) in timelineEvents" :key="index" class="timeline-item"
                            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" :data-aos-delay="index * 100">
                            <div class="timeline-date">{{ event.date }}</div>
                            <div class="timeline-icon">
                                <i :class="event.icon"></i>
                            </div>
                            <div class="timeline-content" :class="{ 'ms-auto': index % 2 === 0 }">
                                <h3>{{ event.title }}</h3>
                                <p>{{ event.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">Memory Gallery</h2>
            <div class="row">
                <div v-for="(photo, index) in photos" :key="index" class="col-lg-4 col-md-6" :data-aos="'zoom-in'"
                    :data-aos-delay="index * 100">
                    <div class="gallery-item" @click="openModal(photo)" data-bs-toggle="modal" data-bs-target="#photoModal">
                        <div class="gallery-placeholder">
                            <img :src="photo.image" alt="photo.title" class="img-fluid rounded mb-2"
                                style="height: 250px; object-fit: cover;" />
                            <div class="fw-bold">{{ photo.title }}</div>
                            <small>{{ photo.date }}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-luxury" @click="goImages()">
                    More Photos
                </button>
            </div>
        </div>
    </section>

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="photoModal" tabindex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="photoModalLabel">{{ selectedPhoto?.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-heart text-warning" style="font-size: 3rem;"></i>
                    </div>
                    <p class="lead">{{ selectedPhoto?.description }}</p>
                    <small class="text-muted">{{ selectedPhoto?.date }}</small>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!--- Get Invite -->
    <section id="invite" class="section">
        <h2 class="section-title text-center" data-aos="fade-up">Get Invite</h2>
        <p class="text-center">Click on the button below to get your own personalized invite</p>
        <div class="text-center mt-4">
                                <button type="submit" class="btn btn-luxury" @click="validateAndRedirect()">
                                    <i class="fas fa-paper-plane me-2"></i>Get Invite
                                </button>
                            </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center mb-5">
                    <h2 data-aos="fade-up" style="font-size: 3rem;">Contact Us</h2>
                    <p data-aos="fade-up" data-aos-delay="100" style="font-size: 1.2rem; opacity: 0.8;">Leave us a
                        message</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form" data-aos="fade-up" data-aos-delay="200">
                        <form @submit.prevent="submitForm">
                            <div>
                                <input type="text" class="form-control" placeholder="Your Name" v-model="form.name"
                                    required>
                            </div>
                            <textarea class="form-control" rows="5" placeholder="Drop us a message..."
                                v-model="form.message" required></textarea>
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-luxury">
                                    <i class="fas fa-paper-plane me-2"></i>Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="row background">
        <div class="col-lg-12 text-center foot-text">
            <p style="opacity: 0.6;">&copy; <a href="https://www.eventlord.org" class="foottext"> 2025 Event Lord Events
                    Nigeria </a> - Moments & Memories. All rights
                reserved.</p>
        </div>
    </div>
</template>

<script>
import people from '../assets/people';

export default {
    name: 'HomeView',
    data() {
        return {
            form: {
                name: '',
                message: ''
            },
            inputName: '',
            inputPhone: '',
            selectedPhoto: null,
            weddingDate: "June 14, 2025",
            hearts: [],
            timelineEvents: [
                {
                    date: "2015",
                    title: "First Meeting",
                    description: "We met at the Federal University of Petroleum Resources (FUPRE). We were both in the same department, we had a group project",
                    icon: "fas fa-coffee"
                },
                {
                    date: "2018",
                    title: "Friendship Deepens",
                    description: "Our friendship deepened, we went on dates together.",
                    icon: "fas fa-utensils"
                },
                {
                    date: "2021",
                    title: "Graduation",
                    description: "October 2021, we both graduated from the Marine Engineering Department, College of Engineering, FUPRE.",
                    icon: "fas fa-graduation-cap"
                },
                {
                    date: "2025",
                    title: "Our Wedding Day",
                    description: "Surrounded by family and friends, we promised to love and cherish each other for all the days of our lives.",
                    icon: "fas fa-heart"
                },
                {
                    date: "2025 - Forever",
                    title: "Happily ever after",
                    description: "Together forever",
                    icon: "fas fa-infinity"
                }
            ],
            photos: [
                {
                    title: "Friendship ",
                    date: "March 2020",
                    description: "With our first dinner date after achieving a milestone together, our friendship blossomed into something truly special.",
                    image: '/date.jpeg'
                },
                {
                    title: "Graduation",
                    date: "October 2021",
                    description: "The moments that improved our lives together - our graduation.",
                    image: '/graduation.jpeg'
                },
                {
                    title: "Pre-wedding",
                    date: "June 2025",
                    description: "Proposal, pre-wedding photos.",
                    image: '/prewedding.jpg'
                },
                {
                    title: "Civil",
                    date: "June 2025",
                    description: "The most beautiful day of our lives, surrounded by love.",
                    image: '/civil.jpg'
                },
                {
                    title: "Traditional",
                    date: "June 2025",
                    description: "The most beautiful day of our lives, surrounded by love.",
                    image: '/traditional.jpg'
                },
                {
                    title: "Our Wedding Day",
                    date: "June 2025",
                    description: "The most beautiful day of our lives, surrounded by love.",
                    image: '/wedding.jpg'
                }
            ]
        }
    },
    mounted() {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        this.generateHearts();
        this.setupSmoothScrolling();

        // Initialize carousel with custom options
        const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
            interval: 4000,
            wrap: true,
            touch: true
        });

        // Add slide animation events
        document.getElementById('heroCarousel').addEventListener('slide.bs.carousel', function (e) {
            // Trigger AOS animations when slide changes
            setTimeout(() => {
                AOS.refresh();
            }, 300);
        });

        // Pause carousel on hover
        document.getElementById('heroCarousel').addEventListener('mouseenter', function () {
            heroCarousel.pause();
        });

        document.getElementById('heroCarousel').addEventListener('mouseleave', function () {
            heroCarousel.cycle();
        });
    },
    methods: {
        generateHearts() {
            for (let i = 0; i < 20; i++) {
                this.hearts.push({
                    x: Math.random() * 100,
                    delay: Math.random() * 12
                });
            }
        },
        submitForm() {
            // Simulate form submission
            alert('Thank you for your inquiry! We will redirect you to WhatsApp to complete the message.');
            let res = `Hi, my name is ${this.form.name}, here's my special message to you: ${this.form.message}`;
            let encodedMessage = encodeURIComponent(res);
            let phone = '2348160485223'; // Use the recipient's full WhatsApp number with country code
            let url = `https://wa.me/${phone}?text=${encodedMessage}`;

            window.open(url, '_blank');
            // Reset form
            this.form = {
                name: '',
                message: ''
            };
        },
        goImages() {
            window.location.href = 'https://drive.google.com/drive/folders/12kBjKl5sJRwxD7zibHm_auVMJokXYNSI?usp=sharing';
        },
        setupSmoothScrolling() {
            // Smooth scrolling for navbar links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },
        openModal(photo) {
            this.selectedPhoto = photo;
        },
        async validateAndRedirect() {
      const { value: formValues } = await Swal.fire({
        title: 'Enter your details',
        html:
          '<input id="swal-name" class="swal2-input" placeholder="Enter your name">' +
          '<input id="swal-phone" class="swal2-input" placeholder="Enter your phone number">',
        focusConfirm: false,
        preConfirm: () => {
          const name = document.getElementById('swal-name').value
          const phone = document.getElementById('swal-phone').value
          if (!name || !phone) {
            Swal.showValidationMessage('Both fields are required')
            return false
          }
          return { name, phone }
        }
      })

      if (!formValues) return // user cancelled

      const match = people.find(
        person =>
          person.name.toLowerCase().trim() === formValues.name.toLowerCase().trim()
      )

      if (!match) {
        Swal.fire('Not Found', 'Name not found in the list.', 'error')
        return
      }

      if (match.phone !== formValues.phone.trim()) {
        Swal.fire('Mismatch', 'Phone number does not match.', 'error')
        return
      }

      // Redirect
      this.$router.push(`/invite/${match.id}`)
    }
    }
}
</script>
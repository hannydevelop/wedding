<template>
    <div class="body-container" ref="invitationToDownload">
        <div v-if="isLoading" class="loading-overlay">
            <div class="loading-content">
                <div class="loading-ring"></div>
                <h3>Loading Wedding Invitation...</h3>
                <p>Preparing something beautiful ✨</p>
            </div>
        </div>

        <!-- Main App -->
        <div v-else class="app-container">
            <div v-if="person" class="invitation-container">
                <div>
                    <div class="frame">
                        <div class="frame-red">
                            <div>
                                <div class="line-with-text">
                                    <span>{{ invitationData.invitedGuest }}</span>
                                </div>
                                <div class="celebrating">JOIN US IN CELEBRATING</div>
                                <div class="image-container">
                                    <img src="../assets/chiaka-logo.png" alt="example" style="width: 400px; height: 250px;">
                                </div>
                                <div class="chiaka-ben">CHIAKA BEN-OBI</div>
                            </div>

                            <!-- footer row at the bottom -->
                            <div class="footer-row">
                                <div class="footer-col left">
                                    <p class="top" style="font-size: 11px; margin-bottom: 4px; color: rgb(238, 52, 52);">
                                        Friday, 14th
                                        November 2025</p>
                                    <p class="top" style="font-size: 10px; color: rgb(238, 52, 52);">Thanksgiving Service |
                                        12 Noon</p>
                                    <p style="font-size: 9px;">St Peter's Anglican Church,</p>
                                    <p style="font-size: 9px;">Paradise Hills Estate</p>
                                    <p style="font-size: 9px;">Inside ENL/</p>
                                    <p style="font-size: 9px;">Federal Housing Authority (FHA) Estate,</p>
                                    <p style="font-size: 9px;">Guzape, Abuja.</p>
                                    <p class="top" style="font-size: 10px; margin-top: 3px; color: rgb(238, 52, 52);">
                                        Reception | 6 PM</p>
                                    <p style="font-size: 9px;">Los Angeles Event Center</p>
                                    <p style="font-size: 9px;">Ahmadu Bello Way, Kado, Abuja.</p>
                                </div>
                                <div class="footer-col center">
                                    <img src="../assets/qrcode.png" style="width: 100px; height: 100px;" />
                                </div>
                                <div class="footer-col right">
                                    <p class="top" style="font-size: 16px; margin-bottom: 4px; color: rgb(238, 52, 52);">
                                        RSVP</p>
                                    <p style="font-size: 10px; margin-bottom: 4px; color: rgb(238, 52, 52);">By 15th Oct
                                        2025</p>
                                    <p style="font-size: 10px; color: rgb(238, 52, 52);">+2348101111091</p>
                                    <p
                                        style="color: rgb(238, 52, 52); font-size: 10px; margin-bottom: 4px; border-bottom: 1px solid #ccc; margin-left: 40px;">
                                    </p>
                                    <p style="font-size: 9px;">to gift the celebrant,</p>
                                    <p class="top" style="font-size: 8px; color: rgb(238, 52, 52);">Visit
                                        chiaka-at-60-gift-registry.com</p>
                                    <p class="top" style="font-size: 8px; margin-bottom: 8px;">or scan the QR code with
                                        your device
                                    </p>
                                    <p class="top" style="font-size: 10px;">Your generosity is much appreciated!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-buttons no-print">
                        <button class="btn btn-primary" @click="downloadInvite">
                            📄 Download Invite
                        </button>
                        <button class="btn btn-secondary" @click="addToCalendar">
                            📅 Add to Calendar
                        </button>
                        <button class="btn btn-secondary" @click="goRsvp">
                            🗓️ RSVP
                        </button>
                    </div>

                    <div class="qr-container" style="display: none; text-align: center; margin-top: 20px;">
                        <canvas id="qr-code"></canvas>
                        <p style="font-size: 12px;">Scan to verify invite</p>
                    </div>
                </div>
            </div>
            <!-- Access Denied Screen -->
            <div v-else class="access-denied-container">
                <div class="denied-card">
                    <div class="denied-header">
                        <div class="denied-icon">🚫</div>
                        <h2>Access Restricted</h2>
                    </div>

                    <div class="denied-content">
                        <div class="denied-message">
                            <h3>We're Sorry</h3>
                            <p>Your name is not found in our wedding guest registry.</p>
                            <p>This invitation is exclusive to our invited guests only.</p>
                        </div>

                        <div class="denied-decoration">
                            <div class="denied-ornament">❀</div>
                            <div class="denied-line"></div>
                            <div class="denied-ornament">❀</div>
                        </div>

                        <div class="contact-info">
                            <p><strong>Questions about your invitation?</strong></p>
                            <p>Please contact our wedding coordinator:</p>
                            <p class="contact-details">Ikem Paul<br>+2348101111091</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dynamic Sparkles -->
            <div v-for="sparkle in sparkles" :key="sparkle.id" :style="{ left: sparkle.x + 'px', top: sparkle.y + 'px' }"
                class="sparkle">
                ✨
            </div>
        </div>
    </div>
</template>

<script>
import supabase from '../supabase'
import html2pdf from 'html2pdf.js';
import QRious from 'qrious';
import { CapacitorCalendar } from '@ebarooni/capacitor-calendar';

export default {
    name: 'InviteView',
    data() {
        return {
            isLoading: true,
            person: null,
            sparkles: [],
            sparkleId: 0
        };
    },
    computed: {
        invitationData() {
            return {
                ndaText: 'Please note: Photography and video recording are not permitted during the ceremony. We kindly ask all guests to honor this request.',
                invitedGuest: this.person.name,
                eventType: "JOIN US IN CELEBRATING",
                bride: "Chiaka@60",
                groom: "Dama",
                date: "14th November, 2025",
                time: "at twelve, in the afternoon",
                venueName: "St Peter's Anglican Church, Paradise Hills Estate",
                address: "Inside ENL/Federal Housing Authority (FHA), Estate, Guzape, Abuja",
                rsvpTitle: "RSVP: Event Lord Events",
                rsvpContact: "08160485223"
            }
        }
    },
    methods: {
        createSparkle(x, y) {
            const sparkle = {
                id: this.sparkleId++,
                x: x,
                y: y
            };
            this.sparkles.push(sparkle);

            setTimeout(() => {
                const index = this.sparkles.findIndex(s => s.id === sparkle.id);
                if (index > -1) {
                    this.sparkles.splice(index, 1);
                }
            }, 1000);
        },
        handleMouseMove(e) {
            if (Math.random() > 0.95) {
                this.createSparkle(e.clientX, e.clientY);
            }
        },

        goRsvp() {
            this.$router.push({ path: `/rsvp/${this.person.id}` });
        },

        downloadInvite() {
            const element = this.$refs.invitationToDownload;

            // 1. Generate QR code pointing to Google
            const qrCanvas = element.querySelector('#qr-code');
            const qr = new QRious({
                element: qrCanvas,
                value: `https://belovedunion.eventlord.org/verify/${this.person.id}`,
                size: 120
            });

            // 2. Show QR code container and hide .no-print items
            const qrContainer = element.querySelector('.qr-container');
            const noPrintElems = element.querySelectorAll('.no-print');

            if (qrContainer) qrContainer.style.display = 'block';
            noPrintElems.forEach(el => el.style.display = 'none');

            // 3. Delay to ensure QR renders before capturing
            setTimeout(() => {
                const opt = {
                    margin: 0,
                    filename: `invitation-${this.invitationData.invitedGuest || 'guest'}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 3, useCORS: true },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                    pagebreak: { mode: ['avoid-all'] }
                };

                html2pdf()
                    .set(opt)
                    .from(element)
                    .save()
                    .then(() => {
                        // 4. Restore visibility
                        noPrintElems.forEach(el => el.style.display = '');
                        if (qrContainer) qrContainer.style.display = 'none';
                    });
            }, 300); // Wait briefly to ensure QR is visible before capture
        },
        addToCalendar() {
            const data = this.invitationData;
            const eventDetails = {
                title: `Chiaka@60`,
                start: '20251114T120000Z', // UTC format
                end: '20251114T180000Z',
                location: `${data.venueName}, ${data.address}`,
                description: `Chiaka's Birthday Celebration. ${data.rsvpTitle} (${data.rsvpContact})`,
                uid: `${Date.now()}@peppubuild.com`
            };

            // Check if we're on Android
            const isAndroid = /Android/i.test(navigator.userAgent);

            if (isAndroid) {
                // Try Google Calendar first on Android
                this.tryGoogleCalendar(eventDetails);
            } else {
                // For non-Android devices, go straight to ICS download
                this.downloadICS(eventDetails);
            }
        },

        tryGoogleCalendar(eventDetails) {
            // Format dates for Google Calendar URL (remove Z and add format)
            const startDate = eventDetails.start.replace('Z', '');
            const endDate = eventDetails.end.replace('Z', '');

            // Create Google Calendar URL
            const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;

            // Create a temporary link to test if Google Calendar opens
            const testLink = document.createElement('a');
            testLink.href = googleCalendarUrl;
            testLink.target = '_blank';
            testLink.style.display = 'none';
            document.body.appendChild(testLink);

            // Track if the user left the page (indicating Google Calendar opened)
            let userLeftPage = false;

            const handleVisibilityChange = () => {
                if (document.hidden) {
                    userLeftPage = true;
                }
            };

            const handleFocus = () => {
                if (userLeftPage) {
                    // User came back, Google Calendar likely opened successfully
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    window.removeEventListener('focus', handleFocus);
                    document.body.removeChild(testLink);
                    return;
                }
            };

            // Add event listeners
            document.addEventListener('visibilitychange', handleVisibilityChange);
            window.addEventListener('focus', handleFocus);

            // Try to open Google Calendar
            testLink.click();

            // Fallback to ICS after a short delay if Google Calendar didn't open
            setTimeout(() => {
                if (!userLeftPage) {
                    // Google Calendar didn't open, cleanup and fallback to ICS
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    window.removeEventListener('focus', handleFocus);
                    document.body.removeChild(testLink);

                    // Download ICS file with notification
                    this.downloadICS(eventDetails, true);
                }
            }, 2000);
        },

        downloadICS(eventDetails, showNotification = false) {
            const icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'CALSCALE:GREGORIAN',
                'PRODID:-//Peppubuild//EN',
                'METHOD:PUBLISH',
                'BEGIN:VEVENT',
                `UID:${eventDetails.uid}`,
                `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
                `DTSTART:${eventDetails.start}`,
                `DTEND:${eventDetails.end}`,
                `SUMMARY:${eventDetails.title}`,
                `DESCRIPTION:${eventDetails.description}`,
                `LOCATION:${eventDetails.location}`,
                'STATUS:CONFIRMED',
                'SEQUENCE:0',
                'TRANSP:OPAQUE',
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');

            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${eventDetails.title.replace(/\s+/g, '_')}.ics`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Show notification only for Android ICS downloads or when explicitly requested
            const isAndroid = /Android/i.test(navigator.userAgent);

            if (isAndroid && showNotification) {
                Swal.fire({
                    title: 'Calendar File Downloaded',
                    html: `
                <div style="text-align: left; font-size: 14px;">
                    <p><strong>To add this event to your calendar:</strong></p>
                    <ol style="padding-left: 20px;">
                        <li>Open your <strong>Downloads</strong> folder</li>
                        <li>Tap the downloaded <strong>.ics</strong> file</li>
                        <li>Choose <strong>Calendar</strong> or <strong>Google Calendar</strong></li>
                        <li>Tap <strong>Add to Calendar</strong></li>
                    </ol>
                    <p style="margin-top: 15px; font-size: 12px; color: #666;">
                        💡 The file will usually be in your notification panel or Downloads app
                    </p>
                </div>
            `,
                    icon: 'info',
                    confirmButtonText: 'Got it!',
                    confirmButtonColor: '#4CAF50'
                });
            }
        },

        // Alternative method using Android Intent (if you want to try native calendar app)
        tryAndroidCalendarIntent(eventDetails) {
            // Convert UTC to milliseconds
            const startMs = new Date(eventDetails.start.replace('Z', '')).getTime();
            const endMs = new Date(eventDetails.end.replace('Z', '')).getTime();

            // Create Android Calendar Intent URL
            const intentUrl = `intent://calendar/0#Intent;` +
                `action=android.intent.action.INSERT;` +
                `type=vnd.android.cursor.item/event;` +
                `S.title=${encodeURIComponent(eventDetails.title)};` +
                `S.description=${encodeURIComponent(eventDetails.description)};` +
                `S.eventLocation=${encodeURIComponent(eventDetails.location)};` +
                `l.beginTime=${startMs};` +
                `l.endTime=${endMs};` +
                `end`;

            // Try to open with intent
            window.location.href = intentUrl;

            // Fallback to ICS after delay
            setTimeout(() => {
                this.downloadICS(eventDetails, true);
            }, 3000);
        }
    },
    mounted() {
        // Simulate loading
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);

        document.addEventListener('mousemove', this.handleMouseMove);
    },
    unmounted() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    },
    async created() {
        const { data, error } = await supabase
            .from('people')
            .select('*');

        if (error) {
            console.error('Error fetching crew:', error.message);
            return [];
        }

        const id = this.$route.params.id;
        this.person = data.find(p => p.id === id);
    }
}
</script>

<style scoped>
.invitation-container {
    max-width: 650px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    /* lower opacity to show background */
    backdrop-filter: blur(10px);
    /* keeps glass effect */
    -webkit-backdrop-filter: blur(10px);
    /* Safari support */
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(212, 175, 55, 0.2);
    min-height: 100vh;
    padding: 20px;
    font-family: 'Georgia', 'Times New Roman', serif;
}

.invitation-container * {
    color: #000 !important;
    /* or a dark solid color */
    text-shadow: none !important;
    opacity: 1 !important;
}

.header-decoration {
    height: 150px;
    background: linear-gradient(45deg, #008971, #012d25);
    position: relative;
    overflow: hidden;
}

.header-decoration::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
}

.header-decoration::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background-size: 200px 30px;
}

@keyframes shimmer {

    0%,
    100% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }
}

.invitation-content {
    padding: 40px 30px;
    text-align: center;
    position: relative;
}

.families-text {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: var(--charcoal);
    opacity: 0.8;
}

.nda-text {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: black;
    opacity: 0.8;
    padding-top: 10px;
    font-weight: bolder;
}

.invitation-line {
    font-size: 18px;
    font-weight: bolder;
    font-style: italic;
    margin-bottom: 20px;
    color: var(--deep-gold);
}

.couple-names {
    font-size: 48px;
    font-weight: bold;
    color: var(--primary-gold);
    margin: 30px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, var(--primary-gold), var(--deep-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease-out;
}

.ampersand {
    font-size: 36px;
    font-style: italic;
}

.event-details {
    margin: 30px 0;
    animation: fadeInUp 1.2s ease-out;
}

.date {
    font-size: 24px;
    font-weight: bold;
    color: var(--charcoal);
    margin-bottom: 10px;
}

.time {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--deep-gold);
}

.venue {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.venue-name {
    font-weight: bold;
    color: var(--primary-gold);
}

.address {
    font-style: italic;
    opacity: 0.8;
}

.rsvp-section {
    margin: 30px 0;
    padding: 20px;
    background: rgba(253, 246, 227, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    border: 2px solid var(--primary-gold);
    animation: fadeInUp 1.4s ease-out;
}

.rsvp-title {
    font-weight: bold;
    color: var(--charcoal);
    margin-bottom: 10px;
}

.rsvp-contact {
    color: var(--deep-gold);
    font-size: 16px;
}

.action-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
    animation: fadeInUp 1.6s ease-out;
}

.btn {
    flex: 1;
    min-width: 200px;
    padding: 15px 25px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(45deg, #008971, #012d25);
    color: var(--white);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.9);
    color: var(--primary-gold);
    border: 2px solid var(--primary-gold);
    backdrop-filter: blur(5px);
}

.btn-secondary:hover {
    background: #008971;
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.3);
}

.decorative-line {
    width: 100px;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--primary-gold), transparent);
    margin: 20px auto;
}


@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(10deg);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.sparkle {
    position: fixed;
    pointer-events: none;
    color: var(--primary-gold);
    font-size: 12px;
    z-index: 1000;
    animation: sparkleFloat 1s ease-out forwards;
}

@keyframes sparkleFloat {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    100% {
        opacity: 0;
        transform: translateY(-50px) scale(0.5);
    }
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--cream), #F5E6D3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loading-content {
    text-align: center;
    color: var(--primary-gold);
}

.loading-ring {
    border: 4px solid rgba(212, 175, 55, 0.3);
    border-top: 4px solid var(--primary-gold);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 768px) {
    .invitation-content {
        padding: 30px 20px;
    }

    .couple-names {
        font-size: 36px;
    }

    .btn {
        min-width: 100%;
        margin-bottom: 10px;
    }

    .action-buttons {
        flex-direction: column;
    }
}

.body-container {
    position: relative;
    background: transparent;
    overflow: hidden;
    /* ensures blur doesn’t spill outside */
}

.body-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            /* black overlay with 50% opacity */
            rgba(0, 0, 0, 0.5)),
        url('/coverr.jpeg');
    background-size: cover;
    /* stretches to cover container */
    background-repeat: no-repeat;
    /* prevents tiling */
    background-position: center;
    /* centers the image */
    background-attachment: fixed;
    /* keeps background fixed while scrolling */
    transform: scale(1.1);
    /* avoids sharp blur edges at borders */
    z-index: -1;
    /* keeps background behind content */
}

body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-image: url('chiaka.png') 40 round;
}

.frame {
    width: 600px;
    height: 800px;
    background: #fcf3e8;
    border: 40px solid transparent;
    -webkit-border-image: url('/saveed.png') 40 round;
    border-image: url('/saveed.png') 40 round;
    box-sizing: border-box;
}

.frame-red {
    width: 500px;
    height: 700px;
    margin: 10px;
    border: 1.5px solid rgb(238, 52, 52);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* pushes footer down */
}

.line-with-text {
    position: relative;
    height: 1px;
    background: #333;
    margin: 100px 60px 40px 60px;
}

.line-with-text span {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -120%);
    font-size: 20px;
    color: #333;
    font-family: 'Great Vibes', 'Brush Script MT', cursive;
}

.celebrating {
    font-family: 'Courier New', Courier, monospace;
    color: rgb(238, 52, 52);
    font-size: 15px;
    text-align: center;
    font-weight: 600;
}

p {
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: -1px;
}

.red {
    color: rgb(238, 52, 52);
}

.top {
    font-weight: bold;
}

.image-container {
    display: flex;
    justify-content: center;
}

.chiaka-ben {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    text-align: center;
    margin-top: 10px;
}

/* footer row */
.footer-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 20px;
    font-family: 'Playfair Display', serif;
    font-size: 14px;
}

.footer-col {
    flex: 1;
}

.footer-col.center {
    text-align: center;
}

.footer-col.right {
    text-align: right;
}

.footer-col p {
    margin: 0;
    /* remove default margins */
    line-height: 1;
    /* tighter vertical spacing */
}

/* Responsive styles for smaller devices */
@media screen and (max-width: 768px) {
    body {
        padding: 10px;
    }

    .frame {
        width: 100%;
        max-width: 100%;
        height: auto;
        min-height: 600px;
        border-width: 20px;
        -webkit-border-image: url('/saveed.png') 20 round;
        border-image: url('/saveed.png') 20 round;
    }

    .frame-red {
        width: calc(100% - 20px);
        height: auto;
        min-height: 560px;
        margin: 10px;
    }

    .line-with-text {
        margin: 60px 30px 20px 30px;
    }

    .line-with-text span {
        font-size: 28px;
    }

    .celebrating {
        font-size: 12px;
    }

    .image-container img {
        width: 280px !important;
        height: 175px !important;
    }

    .chiaka-ben {
        font-size: 28px;
        margin-top: 5px;
    }

    .footer-row {
        padding: 10px 10px;
        font-size: 12px;
    }
}

@media screen and (max-width: 480px) {
    .frame {
        max-width: 100%;
        border-width: 15px;
        -webkit-border-image: url('/saveed.png') 15 round;
        border-image: url('/saveed.png') 15 round;
    }

    .frame-red {
        width: calc(100% - 10px);
        margin: 5px;
    }

    .line-with-text {
        margin: 60px 20px 15px 20px;
    }

    .line-with-text span {
        font-size: 24px;
    }

    .celebrating {
        font-size: 10px;
    }

    .image-container img {
        width: 220px !important;
        height: 140px !important;
    }

    .chiaka-ben {
        font-size: 22px;
    }

    .footer-row {
        padding: 8px 12px;
        gap: 12px;
    }

    .footer-col img {
        width: 80px !important;
        height: 80px !important;
    }
}</style>
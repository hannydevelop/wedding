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
                <div class="main-container">
                    <div class="left-panel">
                        <div class="gift-icon">RSVP: Chiaka at Sixty</div>
                        <h3 class="to-gift"><a href="https://www.chiaka-at-60-gift-registry.com/">To gift the celebrant,
                                visit our gift shop</a></h3>
                        <div class="image-container">
                            <img src="/coverr.jpeg" alt="Profile" class="profile-image">
                            <div class="overlay"></div>
                        </div>
                        <div class="countdown">
                            <div class="time-block">
                                <span class="time-number" id="days">44</span>
                                <span class="time-label">Days</span>
                            </div>
                            <div class="time-block">
                                <span class="time-number" id="hours">07</span>
                                <span class="time-label">Hours</span>
                            </div>
                            <div class="time-block">
                                <span class="time-number" id="mins">21</span>
                                <span class="time-label">Mins</span>
                            </div>
                        </div>
                    </div>

                    <div class="right-panel">
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>

                        <div class="content">
                            <div class="frame">
                                <div class="frame-red">
                                    <div>
                                        <div class="line-with-text">
                                            <span>{{ invitationData.invitedGuest }}</span>
                                        </div>
                                        <div class="celebrating">JOIN US IN CELEBRATING</div>
                                        <div class="image-container-asset">
                                            <img src="../assets/chiaka-logo.png" alt="example"
                                                style="width: 400px; height: 250px;">
                                        </div>
                                        <div class="chiaka-ben">CHIAKA BEN-OBI</div>
                                    </div>

                                    <!-- footer row at the bottom -->
                                    <div class="footer-row">
                                        <div class="footer-col left">
                                            <p class="top"
                                                style="font-size: 11px; margin-bottom: 4px; color: rgb(238, 52, 52);">
                                                Friday, 14th
                                                November 2025</p>
                                            <p class="top" style="font-size: 10px; color: rgb(238, 52, 52);">Thanksgiving
                                                Service |
                                                10 AM</p>
                                            <p style="font-size: 9px;">St Peter's Anglican Church,</p>
                                            <p style="font-size: 9px;">Paradise Hills Estate</p>
                                            <p style="font-size: 9px;">Inside ENL/</p>
                                            <p style="font-size: 9px;">Federal Housing Authority (FHA) Estate,</p>
                                            <p style="font-size: 9px;">Guzape, Abuja.</p>
                                            <p class="top"
                                                style="font-size: 10px; margin-top: 3px; color: rgb(238, 52, 52);">
                                                Reception | 7 PM</p>
                                            <p style="font-size: 9px;">Los Angeles Event Center</p>
                                            <p style="font-size: 9px;">Ahmadu Bello Way, Kado, Abuja.</p>
                                        </div>
                                        <div class="footer-col center">
                                            <img src="../assets/qrcode.png" style="width: 100px; height: 100px;" />
                                        </div>
                                        <div class="footer-col right">
                                            <p class="top"
                                                style="font-size: 16px; margin-bottom: 4px; color: rgb(238, 52, 52);">
                                                RSVP</p>
                                            <p style="font-size: 10px; margin-bottom: 4px; color: rgb(238, 52, 52);">By 15th
                                                Oct
                                                2025</p>
                                            <p style="font-size: 10px; color: rgb(238, 52, 52);">+2348101111091</p>
                                            <p
                                                style="color: rgb(238, 52, 52); font-size: 10px; margin-bottom: 4px; border-bottom: 1px solid #ccc; margin-left: 40px;">
                                            </p>
                                            <p style="font-size: 9px;">to gift the celebrant,</p>
                                            <p class="top" style="font-size: 8px; color: rgb(238, 52, 52);">Visit
                                                chiaka-at-60-gift-registry.com</p>
                                            <p class="top" style="font-size: 8px; margin-bottom: 8px;">or scan the QR code
                                                with
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

                        </div>
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
        updateCountdown() {
            const targetDate = new Date('2025-11-15T00:00:00').getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('mins').textContent = String(minutes).padStart(2, '0');
            document.getElementById('secs').textContent = String(seconds).padStart(2, '0');
        },
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
            const frameElement = document.querySelector('.frame');

            // 1. Create a temporary wrapper (not attached to DOM)
            const tempWrapper = document.createElement('div');

            // 2. Clone the frame so we don’t overwrite the original
            const clonedFrame = frameElement.cloneNode(true);
            tempWrapper.appendChild(clonedFrame);

            // 3. Create a QR code on a temporary canvas
            const tempCanvas = document.createElement('canvas');
            new QRious({
                element: tempCanvas,
                value: `https://belovedunion.eventlord.org/verify/${this.person.id}`,
                size: 120
            });

            // 4. Add "SCAN TO VERIFY INVITE" label
            const qrLabel = document.createElement('p');
            qrLabel.innerText = "SCAN TO VERIFY INVITE";
            qrLabel.style.textAlign = "center";
            qrLabel.style.marginTop = "20px";
            qrLabel.style.fontWeight = "bold";
            qrLabel.style.fontSize = "14px";
            qrLabel.style.letterSpacing = "1px";
            qrLabel.style.color = "#333";

            tempWrapper.appendChild(qrLabel);

            // 5. Convert QR canvas to an image and add under cloned frame
            const qrImg = document.createElement('img');
            qrImg.src = tempCanvas.toDataURL('image/png');
            qrImg.width = 120;
            qrImg.height = 120;
            qrImg.style.display = 'block';
            qrImg.style.margin = '10px auto 20px auto'; // top+bottom spacing, center

            tempWrapper.appendChild(qrImg);

            // 6. Generate PDF from this combined wrapper
            const opt = {
                margin: 10,
                filename: `invitation-${this.invitationData.invitedGuest || 'guest'}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compress: true
                }
            };

            html2pdf().from(tempWrapper).set(opt).save();
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
        setInterval(this.updateCountdown, 1000);
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

body {
    font-family: 'Georgia', serif;
    overflow-x: hidden;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    min-height: 100vh;
}

.main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    position: relative;
}

/* Left Panel - Image */
.left-panel {
    position: relative;
    overflow: hidden;
    height: 100vh;
    background: linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(160, 82, 45, 0.2));
}

.image-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoomIn 1.5s ease-out;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;
}

.gift-icon {
    position: absolute;
    top: 40px;
    left: 40px;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    z-index: 10;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    animation: fadeInDown 1s ease-out;
}

.gift-icon::before {
    content: '📩';
    font-size: 28px;
    animation: float 3s ease-in-out infinite;
}

/* Countdown Timer */
.countdown {
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: flex;
    gap: 30px;
    z-index: 10;
    animation: fadeInUp 1s ease-out 0.3s both;
}

.time-block {
    text-align: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 20px 25px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.time-block:hover {
    transform: translateY(-5px);
}

.time-number {
    display: block;
    font-size: 36px;
    font-weight: bold;
    color: white;
    font-family: 'Arial', sans-serif;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.time-label {
    display: block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 8px;
    font-weight: 500;
}

/* Right Panel - Content */
.right-panel {
    background: linear-gradient(135deg, #f5f5f0 0%, #faf9f6 100%);
    padding: 80px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.right-panel::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
}

.content {
    position: relative;
    z-index: 1;
    animation: fadeIn 1s ease-out 0.5s both;
}

.cart-icon {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cart-icon:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
}

h1 {
    font-size: 32px;
    color: #2d2d2d;
    margin-bottom: 30px;
    font-weight: 600;
}

.tagline {
    font-style: italic;
    font-size: 22px;
    color: #8b6914;
    margin-bottom: 30px;
    line-height: 1.6;
    position: relative;
    padding-left: 20px;
}

.tagline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #daa520 0%, #b8860b 100%);
    border-radius: 3px;
}

p {
    font-size: 17px;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 25px;
    text-align: justify;
}

.highlight {
    color: #8b6914;
    font-weight: 600;
}

.cta-section {
    margin-top: 40px;
    padding: 35px;
    background: linear-gradient(135deg, rgba(218, 165, 32, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%);
    border-radius: 20px;
    border: 2px solid rgba(218, 165, 32, 0.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.buttons {
    display: flex;
    gap: 20px;
    margin-top: 25px;
}

.btn {
    flex: 1;
    padding: 18px 35px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn span {
    position: relative;
    z-index: 1;
}

.btn-primary {
    background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.4);
}

.btn-secondary {
    background: white;
    color: #2d2d2d;
    border: 2px solid #daa520;
}

.btn-secondary:hover {
    transform: translateY(-3px);
    background: #fafafa;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.signature {
    margin-top: 50px;
    text-align: right;
    font-family: 'Brush Script MT', cursive;
    font-size: 32px;
    color: #8b6914;
    animation: fadeIn 1s ease-out 1s both;
}

/* Floating particles */
.particle {
    position: absolute;
    background: radial-gradient(circle, rgba(218, 165, 32, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    animation: floatParticle 15s infinite ease-in-out;
}

.particle:nth-child(1) {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.particle:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation-delay: 5s;
}

.particle:nth-child(3) {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 10s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    from {
        transform: scale(1.1);
    }

    to {
        transform: scale(1);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes floatParticle {

    0%,
    100% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(30px, -30px);
    }

    50% {
        transform: translate(-20px, -50px);
    }

    75% {
        transform: translate(40px, -20px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 1024px) {
    .main-container {
        grid-template-columns: 1fr;
    }

    .left-panel {
        min-height: 60vh;
    }

    .right-panel {
        padding: 60px 40px;
    }

    .countdown {
        gap: 15px;
    }

    .time-block {
        padding: 15px 20px;
    }
}

.frame {
    width: 600px;
    height: 800px;
    background: #fcf3e8;
    position: relative;
    box-sizing: border-box;
    padding: 40px;
    background-image: url('/saveed.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-50%);
}

.frame-red {
    width: 100%;
    height: 100%;
    border: 1.5px solid rgb(238, 52, 52);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fcf3e8;
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

.chiaka-ben {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    text-align: center;
    margin-top: 10px;
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

.image-container-asset {
    display: flex;
    justify-content: center;
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

    .action-buttons {
        flex-direction: column;
    }

    .frame {
        width: 90vw;
        margin: 0px;
    }

    .line-with-text {
        margin: 60px 30px 20px 30px;
    }

    .celebrating {
        font-size: 12px;
    }

    .image-container-asset img {
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

    .right-panel {
        height: auto;
    }
}

@media screen and (max-width: 480px) {
    .frame {
        width: 90vw;
        margin: 0px;
    }

    .line-with-text {
        margin: 60px 20px 15px 20px;
    }

    .celebrating {
        font-size: 10px;
    }

    .image-container-asset img {
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
}

.to-gift {
    position: absolute;
    bottom: 30vh;
    left: 40px;
    display: flex;
    gap: 30px;
    z-index: 10;
    animation: fadeInUp 1s ease-out 0.3s both;
    color: #8b8b8b;
}

.action-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: nowrap;
    /* keep everything on one line */
    animation: fadeInUp 1.6s ease-out;
}

.action-buttons a,
.action-buttons button {
    flex: 0 0 auto;
    /* prevent stretching */
    white-space: nowrap;
    /* prevent text wrapping inside */
}

a {
    text-decoration: none;
    /* removes underline */
    color: #daa520;
    margin: 0px;
    /* sets link color (blue example) */
}

a:hover {
    color: wheat;
    /* optional: hover color */
}
</style>
<template>
    <div id="app-rsvp">
        <div class="invitation-card">
            <h1 class="couple-names"> {{ this.person.name }} </h1>

            <div class="decorative-line"></div>

            <p class="invitation-text">You are invited to a special celebration</p>

            <p class="question">How many of you will be attending?</p>

            <div class="guest-count-container">
                <select class="guest-select" v-model="guestCount">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <button class="rsvp-button" @click="submitRSVP">
                I will be there
            </button>
        </div>
    </div>
</template>

<script>
import supabase from '../supabase'

export default {
    name: 'RsvpView',
    data() {
        return {
            person: null,
            guestCount: '1'
        };
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
        this.guestCount = this.person.guest;
    },
    methods: {
        async submitRSVP() {
            // Update in Supabase
            const { data, error } = await supabase
                .from('people')
                .update({ 'guest': this.guestCount })
                .eq('id', this.person.id)

            if (error) {
                Swal.fire('Error', `We could not update your list ${error}`, 'error')
                return;
            } else {
                Swal.fire(
                    'Thank you for your RSVP',
                    `We have you down for ${this.guestCount} guest${this.guestCount > 1 ? 's' : ''}`,
                    'success'
                );
                this.$router.push({ path: `/invite/${this.person.id}` });
            }
        }
    }
}
</script>

<style scoped>
#app-rsvp {
    font-family: 'Georgia', serif;
    background: linear-gradient(135deg, var(--cream) 0%, #f8f1dc 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.invitation-card {
    background: var(--white);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(44, 44, 44, 0.15);
    padding: 60px 50px;
    max-width: 500px;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--primary-gold);
}

.invitation-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-gold), var(--deep-gold), var(--primary-gold));
}

.couple-names {
    font-size: 2.5rem;
    color: var(--charcoal);
    margin-bottom: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.2;
}

.invitation-text {
    font-size: 1.2rem;
    color: var(--charcoal);
    margin-bottom: 40px;
    font-style: italic;
}

.question {
    font-size: 1.1rem;
    color: var(--charcoal);
    margin-bottom: 20px;
    font-weight: 500;
}

.guest-count-container {
    margin-bottom: 30px;
}

.guest-select {
    appearance: none;
    background: var(--white);
    border: 2px solid var(--primary-gold);
    border-radius: 8px;
    padding: 12px 40px 12px 20px;
    font-size: 1.1rem;
    color: var(--charcoal);
    cursor: pointer;
    position: relative;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    transition: all 0.3s ease;
}

.guest-select:hover {
    border-color: var(--deep-gold);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
}

.guest-select:focus {
    outline: none;
    border-color: var(--deep-gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.rsvp-button {
    background: linear-gradient(135deg, var(--primary-gold), var(--deep-gold));
    color: var(--white);
    border: none;
    padding: 16px 40px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.rsvp-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.rsvp-button:active {
    transform: translateY(0);
}

.decorative-line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
    margin: 30px auto;
}

@media (max-width: 480px) {
    .invitation-card {
        padding: 40px 30px;
    }

    .couple-names {
        font-size: 2rem;
    }

    .invitation-text {
        font-size: 1.1rem;
    }
}
</style>
<template>
    <div v-if="isLoading" class="loading-overlay">
        <div class="loading-content">
            <div class="loading-ring"></div>
            <h3>Loading Wedding RSVP...</h3>
            <p>Preparing something beautiful ✨</p>
        </div>
    </div>
    <div v-else>
        <!-- Accepted Status -->
        <div v-if="person" class="status-container">
            <div class="status-card accepted">
                <div class="status-icon accepted">✓</div>
                <h2 class="status-title accepted">Genuine Invitation</h2>
                <p class="status-message accepted">The guest {{ person.name }} has a genuine invitation</p>
                <h6>Guests: {{ person.guest }}</h6>
                <span class="status-badge accepted">Please, grant access</span>
            </div>
        </div>

        <!-- Denied Status -->
        <div v-else class="status-container">
            <div class="status-card denied">
                <div class="status-icon denied">✕</div>
                <h2 class="status-title denied">Denied</h2>
                <p class="status-message denied">We cannot find your invitation nor name in our system.</p>
                <span class="status-badge denied">Rejected</span>
            </div>
        </div>
    </div>
</template>

<script>
import supabase from '../supabase'

export default {
    name: 'VerifyView',
    data() {
        return {
            isLoading: true,
            person: null,
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
    },
    mounted() {
        // Simulate loading
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);

    },
}
</script>

<style scoped>
.status-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}

.status-card {
    background: var(--white);
    border-radius: 12px;
    padding: 40px 60px;
    box-shadow: 0 8px 25px rgba(44, 44, 44, 0.15);
    text-align: center;
    min-width: 300px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.status-card.accepted {
    border-color: var(--primary-gold);
    background: linear-gradient(135deg, var(--white) 0%, var(--cream) 100%);
}

.status-card.denied {
    border-color: var(--charcoal);
    background: linear-gradient(135deg, var(--white) 0%, #f8f8f8 100%);
}

.status-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    font-size: 40px;
    font-weight: bold;
}

.status-icon.accepted {
    background: linear-gradient(135deg, var(--primary-gold), var(--deep-gold));
    color: var(--white);
}

.status-icon.denied {
    background: linear-gradient(135deg, var(--charcoal), #404040);
    color: var(--white);
}

.status-title {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 600;
}

.status-title.accepted {
    color: var(--deep-gold);
}

.status-title.denied {
    color: var(--charcoal);
}

.status-message {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
}

.status-message.accepted {
    color: var(--deep-gold);
}

.status-message.denied {
    color: var(--charcoal);
}

.status-badge {
    display: inline-block;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
}

.status-badge.accepted {
    background: var(--primary-gold);
    color: var(--white);
}

.status-badge.denied {
    background: var(--charcoal);
    color: var(--white);
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
</style>
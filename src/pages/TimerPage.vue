<template>
    <div>
        Dota 2 Timer: {{ timerValue }}
        <v-btn elevation="2" large @click="play()">Play</v-btn>
        <v-btn elevation="2" large @click="pause()">Pause</v-btn>
    </div>
</template>

<script>
export default {
    name: 'TestResultDetails',
    data() {
        return {
            timerValue: 0,
            timerEnabled: true,
        }
    },
    methods: {
        startTimer() {
            if (this.timerEnabled) {
                setTimeout(() => {
                    this.timerValue += 1
                    this.startTimer();
                }, 1000);
            }
        },
        play() {
            if (!this.timerEnabled) {
                this.timerEnabled = true;
                this.startTimer();
            }

        },
        pause() {
            this.timerEnabled = false;
        }

    },
    mounted() {
        // this.startTimer();
    },
}
</script>
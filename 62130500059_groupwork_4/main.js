const app = {
    data() {
        return {
            conts: [
                {image: "./images/1.jpg", text: "Geysers Valley, Russia", heart: false},
                {image: "./images/2.jpg", text: "Khumbu Valley, Nepal", heart: false},
                {image: "./images/3.jpg", text: "Waipi'o Valley, Hawaii", heart: false}
            ],
            search: false,
            input: '',
            backup: [
                {image: "./images/1.jpg", text: "Geysers Valley, Russia", heart: false},
                {image: "./images/2.jpg", text: "Khumbu Valley, Nepal", heart: false},
                {image: "./images/3.jpg", text: "Waipi'o Valley, Hawaii", heart: false}
            ]
        }
    },
    methods: {
        toggleHeart(index) {
            this.conts[index].heart = !this.conts[index].heart
        },
        toggleSearch() {
            this.search = !this.search;
            this.input = ''
        }
    },
    computed: {
        countPhoto() {
            return this.conts.length
        },
        countHeart() {
            return this.conts.filter( c => c.heart ).length
        },
        searchPicture() {
            this.conts = this.backup
            if (this.input) {
                return this.conts = this.conts.filter(c => {
                    return c.text.toLowerCase().includes(this.input.toLowerCase())
                })
            }
        }
    }
}
Vue.createApp(app).mount('#app')
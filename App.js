const App = {
    data() {
        return {
            holder: 'Enter title',
            title: 'Notes',
            name: '',
            notes: ['Note One', 'Note Two', 'Note Three']
        }
    },
    methods: {
        addNewNote() {
            if (this.name !== '') {
                this.notes.push(this.name)
                this.name = ''
            }
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        name(value) {
            if(value.length > 25) {
                this.name = ''
            }
            console.log('input value changed', value)
        }
    }
}

Vue.createApp(App).mount('#app')
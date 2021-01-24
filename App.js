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
        inputChangeHandler(event) {
            this.name = event.target.value
        },
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
    }
}

Vue.createApp(App).mount('#app')
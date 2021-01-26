Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'I am a title',
        person: {
            firstName: 'Andrii',
            lastName: 'Pyrih',
            age: 27
        },
        items: [1, 2, 3, 4, 5, 6, 7]

    })
}).mount('#app')
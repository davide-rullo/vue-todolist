const { createApp } = Vue
createApp({
    data() {
        return {
            todos: [
                {
                    text: "",
                    done: false
                },

                {
                    text: "Fare la spesa",
                    done: false
                },

                {
                    text: "Chiamare Roberto",
                    done: false
                }
            ]
        };
    }


}).mount('#app')

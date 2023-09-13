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
                    done: true
                }
            ]
        };
    }, 
    
    methods: {

        addTask(){
            if (this.newTask != "") {
             this.todos.push(this.newTask)   
            }
        },

        removeTask(index){
           console.log("click" + index); 
           console.log(this.todos[index].text)
           this.todos.splice(index, 1);
        }

    }


}).mount('#app')

const { createApp } = Vue
createApp({
    data() {
        return {
            todos: [
                {
                    text: "Fare lavatrice",
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

        addTask() {

            if (this.newTask != "") {
                let newTaskObj = {
                    text: this.newTask,
                    done: false
                };



                this.todos.push(newTaskObj);

            }
        },


        removeTask(index) {
            console.log("click" + index);
            console.log(this.todos[index].text)
            this.todos.splice(index, 1);
        },

        taskUndone(index){
            // this.todos[index].done=false;
            console.log("click" + this.todos[index]);
            if (this.todos[index].done === true) {
                this.todos[index].done=false;
            } else{
                this.todos[index].done=true;
            }
            
        },

        taskDone(index){
            if (this.todos[index].done === false) {
                this.todos[index].done=true;
            } else{
                this.todos[index].done=false;
            }
        }

    }


}).mount('#app')

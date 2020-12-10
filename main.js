
var root = new Vue({
   el: "#root",
   data: {
      todoItem: "",
      todoList: [
         { text: "Buy milk" },
         { text: "Do christmas tree" },
         { text: "Call daddy" },
         { text: "Clean up room" },
         { text: "Wash laundery" }
      ]
   },
   methods: {
      addTodoItem() {
         if (this.todoItem != "") {
            this.todoList.push({
               text: this.todoItem
            });
            this.todoItem = "";
         }

      },
      deleteTodoItem(index) {
         this.todoList.splice(index, 1);
      }
   }
})


<script>
    import { ref } from 'vue';
    export default {
        name: 'App',
        setup () {
            const newTodo = ref('');
            const defaultData = [{
                done: false,
                content: 'Write a blog post'
            }]
            const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
            const todos = ref(todosData);
            function addTodo () {
                if (newTodo.value) {
                    todos.value.push({
                        done: false,
                        content: newTodo.value
                    });
                    newTodo.value = '';
                }
                saveData();
            }
            function doneTodo (todo) {
                todo.done = !todo.done
                saveData();
            }
            function removeTodo (index) {
                todos.value.splice(index, 1);
                saveData();
            }
            function saveData () {
                const storageData = JSON.stringify(todos.value);
                localStorage.setItem('todos', storageData);
            }
            return {
                todos,
                newTodo,
                addTodo,
                doneTodo,
                removeTodo,
                saveData
            }
        }
    }
</script>

<template>
  <div class="main">
  <div class="todo-container">
  <h1>LỊCH BIỂU CÔNG TY</h1>
  <form class="form" @submit.prevent="addTodo()">
      <label>Nhập nội dung thông tin lịch biểu của công ty:</label>
      <input class="input"
          v-model="newTodo"
          name="newTodo"
          autocomplete="off"
      >
      <hr>
      <button class="submit-button">Thêm</button>
  </form>
  <div class="todo-container">
    <hr>
  <h2>DANH SÁCH LỊCH BIỂU</h2>
  <ul>
      <li
          v-for="(todo, index) in todos"
          :key="index"
      >
          <span class="todo-name"
              :class="{ done: todo.done }"
              @click="doneTodo(todo)"
          >{{ todo.content }}</span>
          <button class="delete-btn" @click="removeTodo(index)">Xóa</button>
      </li>
  </ul>
  <h4 v-if="todos.length === 0">Lịch trống :></h4>
</div>
  </div>
  </div>

</template>


<style>
.main {
  margin: auto;
  margin-top: 3rem;
  max-width: 400px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

 h3{
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}

.input {
  width: 100%;
  padding: 10px;
}

.submit-button {
  width: 100px;
  padding: 2px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-container ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

.todo-container ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  max-width: 250px;
}

.todo-name {
  font-size: 18px;
  font-weight: bold;
}

.todo-description {
  max-width: 70%;
  font-size: 14px;
}

.delete-btn {
  background-color: #f44336;
  color: white;

  cursor: pointer;
  border: none;
  width: 50px;
  padding: 2px;
  
 
}
</style>


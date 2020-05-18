const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: false,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: false,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  }
];

(function(arrOfTasks) {
  const objOfTasks = tasks.reduce(function(acc, currentVal) {
    acc[currentVal._id] = currentVal;
    return acc;
  }, {});

  // element
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];
  const unfinishedButton = document.querySelector(".btn-unfinished");

  //btn
  const btnAll = document.querySelector(".btn-all-tasks");
  btnAll.classList.add("btn");
  const btnUnfinished = document.querySelector(".btn-unfinished");
  btnUnfinished.classList.add("btn", "unfinished");
  const btnCompleted = document.querySelector(".btn-finished");
  btnCompleted.classList.add("btn", "finished");

  //events
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeletehandler);
  listContainer.addEventListener("click", highlightsCompletedTasks);
  btnCompleted.addEventListener("click", finishedTasks);
  unfinishedButton.addEventListener("click", unfinishedTasks);
  btnAll.addEventListener("click", allTasks);
  checkEmpty();

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Submit task list!");
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }
  function renderCompletedTasks(tasksList) {
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      if (task.completed) {
        const li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }
  function renderUnfinishedTasks(tasksList) {
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      if (!task.completed) {
        const li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.textContent = title;
    span.classList.add("span-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn","delete-btn");

    const performedBtn = document.createElement("button");
    performedBtn.textContent = "Task completed";
    performedBtn.classList.add(
      "btn",
      "btn-warning",
      "performed-btn"
    );

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100", "p-text");

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(performedBtn);
    li.appendChild(deleteBtn);
    

    if (completed) {
      li.classList.add("color");
    }

    return li;
  }

  function onFormSubmitHandler(e) {
    checkEmpty();
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Enter the title and body");
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`
    };

    objOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Do you want to delete a task: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
    checkEmpty();
  }

  function checkEmpty() {
    const ulChildren = document.querySelector("ul").children;
    const classNoti = document.querySelector(".notification");
    if (ulChildren.length == 0) {
      notificationAppears();
    } else if (classNoti) {
      classNoti.remove();
    }
  }

  function notificationAppears() {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2",
      "notification"
    );

    const span = document.createElement("span");
    span.textContent = "The task list is empty!";
    span.style.fontWeight = "bold";

    li.appendChild(span);

    const ul = document.querySelector(".list-group");
    ul.appendChild(li);
    return li;
  }

  function highlightsCompletedTasks({ target }) {
    if (target.classList.contains("performed-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      if (objOfTasks[id].completed) {
        parent.classList.remove("color");
        objOfTasks[id].completed = false;
      } else {
        parent.classList.add("color");
        objOfTasks[id].completed = true;
      }
    }
  }

  function allTasks() {
    clearTasks();
    renderAllTasks(objOfTasks);
  }

  function clearTasks() {
    const tasks = document.querySelector(".list-group");
    while (tasks.firstChild) {
      tasks.removeChild(tasks.lastChild);
    }
  }
  function finishedTasks() {
    clearTasks();
    renderCompletedTasks(objOfTasks);
  }

  function unfinishedTasks() {
    clearTasks();
    renderUnfinishedTasks(objOfTasks);
  }
})(tasks);

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('taskList');
  const input = document.getElementById('newTask');
  const addBtn = document.querySelector('.addTaskBtn');
  
  function addTask() {
    const val = input.value.trim();
    if (!val) { alert('Please Name Your Task'); return; }
    const li = document.createElement('li');
    li.textContent = val;
    const remove = document.createElement('span');
    remove.type = 'button';
    remove.className = 'remove';
    remove.setAttribute('aria-label', 'Remove task');
    remove.textContent = '\u00D7';
    li.appendChild(remove);
    list.appendChild(li);
    input.value = '';
    input.focus();
  }
  addBtn.addEventListener('click', addTask);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });
  list.addEventListener('click', (e) => {
    let target = e.target;
    if (target.nodeType === Node.TEXT_NODE) target = target.parentElement;

    // remove
    if (target.closest('.remove')) {
      target.closest('li')?.remove();
      return;
    }

    // completed
    const li = target.closest('li');
    if (li && list.contains(li)) {
      li.classList.toggle('completed');
    }
  });
});
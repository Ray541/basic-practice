const addBtn = document.getElementById("add-notes");
const saveBtn = document.querySelector(".save");
const deleteBtn = document.querySelector(".delete");
const message = document.querySelector(".message");
const list = document.querySelector(".list");
let noteCount = 0;

const genreateID = () => "note" + new Date().getTime();

const addNote = (text = "") => {
  const note = document.createElement("li");
  const id = genreateID();

  /**Increases the Note Counter ever click by one*/
  noteCount++;

  note.className = "note";
  note.id = id;
  note.innerHTML = `
  <div class="header">
    <h4>Note ${noteCount}</h4>
    <div class="actions">
      <i class="ri-save-2-fill save" onclick="saveNote()"></i>
      <i class="ri-delete-bin-2-fill delete" onclick="deleteNote('${id}')"></i>
    </div>
  </div>
  <textarea class="message" placeholder="Enter Your Note">${text}</textarea>`;

  list.append(note);
  saveNote();

  note.querySelector(".message").addEventListener("focusout", () => {
    saveNote();
  });
};

const deleteNote = (id) => {
  document.getElementById(id).remove();
  saveNote();
};

const saveNote = () => {
  const message = document.querySelectorAll(".message");
  const data = [];

  message.forEach((note) => {
    data.push(note.value);
  });

  data.length === 0
    ? localStorage.removeItem("notes")
    : localStorage.setItem("notes", JSON.stringify(data));
};

(function () {
  const lsmessage = JSON.parse(localStorage.getItem("notes"));

  lsmessage === null
    ? addNote()
    : lsmessage.forEach((lsnote) => {
        addNote(lsnote);
      });
})();

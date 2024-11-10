const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener(
  "click", function () {
    addNote();
  });

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};


const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add(
    "note",
    "w-60",
    "h-60",
    "bg-white",
    "m-2",
    "rounded-2xl",
    "shadow-lg",
    "hover:shadow-xl",
    "transition-shadow",
    "duration-300"
  );

  note.innerHTML = `
    <div class="tool w-full h-10 bg-zinc-800 text-white flex justify-end items-center gap-2 px-1 rounded-t-2xl">
      <i class="text-xl save ri-save-2-fill hover:text-green-400 transition-colors duration-200 cursor-pointer"></i>
      <i class=" text-xl trash ri-delete-bin-5-line mr-2 hover:text-red-400 transition-colors duration-200 cursor-pointer"></i>
    </div>
    <textarea
      class="w-full h-[calc(100%-2rem)] resize-none focus:border-0 outline-0 p-2 rounded-b-2xl bg-gray-50 text-gray-700"
      placeholder="Start typing your note..."
    >${text}</textarea>
  `;

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};

(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();

const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener("click", function () {
  addNote();
});

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note", "w-60", "h-60", "bg-white", "m-2", "rounded-2xl", "shadow-lg", "hover:shadow-xl", "transition-shadow", "duration-300");
  
  note.innerHTML = `
    <div class="tool w-full h-8 bg-gray-800 text-white flex justify-end items-center gap-2 px-2 rounded-t-2xl">
      <i class="ri-file-edit-fill hover:text-yellow-400 transition-colors duration-200 cursor-pointer"></i>
      <i class="ri-delete-bin-5-line mr-2 hover:text-red-400 transition-colors duration-200 cursor-pointer"></i>
    </div>
    <textarea
      class="w-full h-[calc(100%-2rem)] resize-none focus:border-0 outline-0 p-2 rounded-b-2xl bg-gray-50 text-gray-700"
      placeholder="Start typing your note..."
    ></textarea>
  `;
  main.appendChild(note);
};


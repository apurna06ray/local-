document.addEventListener("DOMContentLoaded", function () {
  let noteArea = document.getElementById("note");

  // Load saved note
  chrome.storage.local.get(["note"], function (result) {
    if (result.note) {
      noteArea.value = result.note;
    }
  });

  // Save note
  document.querySelector("button").addEventListener("click", function () {
    let note = noteArea.value;
    chrome.storage.local.set({ note: note }, function () {
      alert("Note saved!");
    });
  });
});
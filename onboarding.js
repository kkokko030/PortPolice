
// 자격증 증빙 자료 업로드
const uploadBox = document.querySelector("#certificateUpload");
const fileInput = document.querySelector("#certificateFile");
const fileName = document.querySelector("#fileName");

// 클릭
uploadBox.addEventListener("click", () => {
    fileInput.click();
});

// 파일 선택
fileInput.addEventListener("change", () => {

    if(fileInput.files.length){

        fileName.textContent =
            fileInput.files[0].name;

    }

});

// 드래그
uploadBox.addEventListener("dragover",(e)=>{

    e.preventDefault();

    uploadBox.classList.add("dragover");

});

uploadBox.addEventListener("dragleave",()=>{

    uploadBox.classList.remove("dragover");

});

function showFileNames(files) {
  if (!files.length) {
    fileName.textContent = "선택된 파일이 없습니다.";
    return;
  }

  fileName.innerHTML = Array.from(files)
    .map(file => `<span>${file.name}</span>`)
    .join("");
}

fileInput.addEventListener("change", () => {
  showFileNames(fileInput.files);
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.classList.remove("dragover");

  fileInput.files = e.dataTransfer.files;
  showFileNames(e.dataTransfer.files);
});


const uploadBox = document.querySelector("#portfolioUpload");
const fileInput = document.querySelector("#portfolioFile");
const fileName = document.querySelector("#fileName");
const nextBtn = document.querySelector("#project-uploadNextBtn");
const portfolioCount = document.querySelector("#portfolioCount");
const warningModal = document.querySelector("#warningModal");
const warningText = document.querySelector("#warningText");
const warningCloseBtn = document.querySelector("#warningCloseBtn");

function showWarning(message) {
    warningText.innerHTML = message;
    warningModal.hidden = false;
}

if (warningCloseBtn) {
    warningCloseBtn.addEventListener("click", () => {
        warningModal.hidden = true;
    });
}

function showFileNames(files) {
    if (!files.length) {
        fileName.textContent = "선택된 파일이 없습니다.";
        return;
    }

    fileName.innerHTML = Array.from(files)
        .map(file => `<span>${file.name}</span>`)
        .join("");
}

if (uploadBox && fileInput && fileName) {
    uploadBox.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", () => {
        showFileNames(fileInput.files);
    });

    uploadBox.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadBox.classList.add("dragover");
    });

    uploadBox.addEventListener("dragleave", () => {
        uploadBox.classList.remove("dragover");
    });

    uploadBox.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadBox.classList.remove("dragover");

        fileInput.files = e.dataTransfer.files;
        showFileNames(e.dataTransfer.files);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {

        if (fileInput.files.length === 0) {
            showWarning(`
        프로젝트 자료가 없습니다.<br><br>
        JSON, ZIP 등의 AI 대화 내보내기 파일이나<br>
        프로젝트 정리 파일을 업로드해주세요.
    `);
            return;
        }

        location.href = "analysis.html";
    });
}
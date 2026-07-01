const uploadBox = document.querySelector("#certificateUpload");
const fileInput = document.querySelector("#certificateFile");
const fileName = document.querySelector("#fileName");
const nextBtn = document.querySelector("#onboardingNextBtn");
const certificateCount = document.querySelector("#certificateCount");
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
        const selects = document.querySelectorAll(".onboarding-form select");

        const job = selects[0];
        const career = selects[1];
        const education = selects[2];
        const employment = selects[3];
        const certificateCount = document.querySelector("#certificateCount");

        const region = document.querySelector('input[placeholder="예: 서울, 경기, 부산"]');
        const certificate = document.querySelector('input[placeholder="예: 정보처리기사, SQLD, ADsP"]');

        const missing = [];

        if (!job.value) missing.push("직무");
        if (!region.value.trim()) missing.push("지역");
        if (!career.value) missing.push("경력");
        if (!education.value) missing.push("학력");
        if (!employment.value) missing.push("고용형태");
        if (!certificateCount.value) missing.push("자격증 개수");

        if (certificateCount.value !== "0") {
            if (!certificate.value.trim()) missing.push("자격증");
            if (fileInput.files.length === 0) missing.push("자격증 증빙 파일");
        }

        if (missing.length > 0) {
            showWarning(`${missing.join(", ")}`);
            return;
        }

        location.href = "project-upload.html";
    });
}
//테스트용 포트폴리오 카드형 디자인 및 반응
const jobPosting = {
    companyName: "㈜비상교육",
    jobTitle: "Backend 개발자(AI Speak)",
    careerLevel: "경력 7년 이상",
    employmentType: "정규직",
    sourcePlatform: "잡코리아",
    mainResponsibilities: [
        "AI Speak 서비스 운영 유지보수 및 고도화",
        "LTI 1.3 기반 모두 교육 플랫폼 연동 코드 개발",
        "WebSocket 기반 실시간 기능 운영 및 유지보수"
    ],
    requiredSkills: [
        "Java Spring Boot",
        "REST API 설계",
        "MariaDB / RDBMS",
        "MyBatis",
        "React",
        "외부 API 연동"
    ],
    preferredSkills: [
        "풀스택 개발 및 운영",
        "AWS EC2 기반 서비스 배포 및 운영",
        "AI 기반 API 활용 서비스 개발",
        "대용량 트래픽 모니터링 및 장애 대응",
        "FE / BE / Admin 통합 구조 설계 및 운영"
    ]
};

const projects = [
    {
        id: "simple-ftp-server",
        title: "리눅스 기반 간이 FTP 서버 구현",
        type: "시스템 프로그래밍 기반 서버 프로젝트",
        image: "assets/ftp-server-card.svg",
        oneLine: "Linux 소켓 통신과 인증 흐름을 직접 구현한 서버 프로그래밍 프로젝트",
        badges: ["Junior Portfolio", "Backend 기초", "채용공고 연계"],
        tags: ["Linux", "Socket", "TCP/IP", "Authentication", "Signal", "Client-Server"],
        scores: {
            techFit: "72%",
            careerFit: "낮음",
            portfolioFit: "높음"
        },
        background:
            "시스템프로그래밍 수업에서 배운 리눅스 명령어 처리, 소켓 통신, 시그널 처리, 인증 기능을 바탕으로 간이 FTP 서버를 제작한 경험입니다.",
        relatedCourse: "시스템프로그래밍",
        learnedTechnologies: [
            "리눅스 명령어 처리",
            "소켓 프로그래밍",
            "TCP/IP 기반 통신",
            "시그널 처리",
            "사용자 인증",
            "서버-클라이언트 구조"
        ],
        implementedFeatures: [
            "클라이언트와 서버 간 소켓 통신 처리",
            "FTP 서버와 유사한 명령어 처리 구조 구현",
            "사용자 인증 기능 구현",
            "시그널을 활용한 프로세스 제어 또는 예외 상황 처리",
            "리눅스 환경에서 서버 프로그램 실행 및 테스트"
        ],
        recruiterHighlights: [
            "리눅스 환경에서 서버 프로그램을 직접 구현한 경험",
            "소켓을 활용한 클라이언트-서버 통신 구조 이해",
            "FTP와 유사한 명령어 처리 흐름 구현",
            "사용자 인증 기능을 통한 기본적인 보안 흐름 경험",
            "시그널 처리를 통한 예외 상황 또는 프로세스 제어 경험"
        ],
        portfolioDescription:
            "시스템프로그래밍 수업에서 학습한 리눅스 명령어 처리, 소켓 통신, 시그널 처리, 인증 기능을 활용하여 간이 FTP 서버를 구현하였다. 클라이언트와 서버 간 통신 구조를 직접 설계하고, 명령어 처리 및 사용자 인증 흐름을 구현하며 서버 프로그램의 기본 동작 방식을 이해하였다.",
        jobRelevanceSummary:
            "이 공고의 핵심은 서비스 운영, WebSocket 실시간 기능, 외부 플랫폼 연동, Spring Boot 기반 백엔드 개발입니다. 간이 FTP 서버 프로젝트는 Spring Boot나 DB 경험을 직접 보여주지는 않지만, 서버-클라이언트 통신, 인증 흐름, TCP/IP 기반 네트워크 이해를 강조하는 포트폴리오 카드로 활용할 수 있습니다.",
        matchRows: [
            {
                requirement: "WebSocket 기반 실시간 기능 운영",
                projectEvidence: "소켓 통신으로 클라이언트와 서버 간 요청·응답 구조 구현",
                fit: "중간",
                className: "fit-mid"
            },
            {
                requirement: "LTI 1.3 기반 외부 플랫폼 연동",
                projectEvidence: "FTP 유사 명령어 프로토콜을 설계하고 서버가 명령을 해석하도록 구현",
                fit: "중간",
                className: "fit-mid"
            },
            {
                requirement: "Java Spring Boot / REST API 설계",
                projectEvidence: "현재 프로젝트는 저수준 서버 구현 중심으로, Spring Boot API는 직접 포함되지 않음",
                fit: "낮음",
                className: "fit-low"
            },
            {
                requirement: "MariaDB / MyBatis / SQL",
                projectEvidence: "사용자 인증은 구현했지만 계정·로그 저장을 DB로 확장하면 연결 가능",
                fit: "낮음",
                className: "fit-low"
            },
            {
                requirement: "운영 유지보수 및 예외 대응",
                projectEvidence: "시그널 처리로 서버 종료, 예외 상황, 프로세스 제어 흐름 경험",
                fit: "중간",
                className: "fit-mid"
            },
            {
                requirement: "경력 7년 이상",
                projectEvidence: "수업 기반 프로젝트이므로 시니어 경력 조건을 충족하지는 않음",
                fit: "낮음",
                className: "fit-low"
            }
        ],
        improvementPoints: [
            "Spring Boot로 FTP 서버 상태 조회용 REST API 추가",
            "MariaDB에 사용자 계정, 로그인 이력, 명령어 실행 로그 저장",
            "MyBatis로 로그 조회 기능 구현",
            "파일 전송 진행률을 WebSocket으로 전달하는 기능 추가",
            "AWS EC2에 서버를 배포하고 포트, 방화벽, 로그 확인 과정을 문서화",
            "React 관리자 페이지에서 접속자·로그·서버 상태 확인 기능 구현"
        ]
    }
];

const portfolioGrid = document.querySelector("#portfolioGrid");
const modal = document.querySelector("#portfolioModal");
const modalContent = document.querySelector("#modalContent");

function createBadge(label, index) {
    const className = index === 0 ? "soft" : index === 1 ? "green" : "gray";
    return `<span class="badge ${className}">${label}</span>`;
}

function createTags(tags) {
    return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function createList(items) {
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderCards() {
    portfolioGrid.innerHTML = projects
        .map(
            (project) => `
          <button class="portfolio-card" type="button" data-project-id="${project.id}" aria-label="${project.title} 상세 포트폴리오 보기">
            <div class="card-image-wrap">
              <img src="${project.image}" alt="${project.title} 예시 이미지" />
            </div>
            <div class="card-content">
              <div class="card-meta">
                ${project.badges.map(createBadge).join("")}
              </div>
              <h3>${project.title}</h3>
              <p class="one-line">${project.oneLine}</p>
              <div class="tag-list" aria-label="기술 태그">
                ${createTags(project.tags)}
              </div>
              <div class="card-footer">
                <div class="score-group">
                  <div>
                    <small>기술 연결성</small>
                    <strong>${project.scores.techFit}</strong>
                  </div>
                  <div>
                    <small>경력 조건</small>
                    <strong>${project.scores.careerFit}</strong>
                  </div>
                  <div>
                    <small>포트폴리오 적합도</small>
                    <strong>${project.scores.portfolioFit}</strong>
                  </div>
                </div>
                <span class="view-detail">상세 보기 →</span>
              </div>
            </div>
          </button>
        `
        )
        .join("");
}

function renderMatchTable(rows) {
    return `
      <div class="table-wrap">
        <table class="match-table">
          <thead>
            <tr>
              <th>공고 요구사항</th>
              <th>프로젝트에서 보여줄 수 있는 근거</th>
              <th>적합도</th>
            </tr>
          </thead>
          <tbody>
            ${rows
            .map(
                (row) => `
                  <tr>
                    <td>${row.requirement}</td>
                    <td>${row.projectEvidence}</td>
                    <td><span class="${row.className}">${row.fit}</span></td>
                  </tr>
                `
            )
            .join("")}
          </tbody>
        </table>
      </div>
    `;
}

function renderModal(project) {
    modalContent.innerHTML = `
      <section class="modal-hero">
        <img src="${project.image}" alt="${project.title} 대표 이미지" />
        <div class="modal-hero-copy">
          <span class="eyebrow">Portfolio Detail</span>
          <h2 id="modalTitle">${project.title}</h2>
          <p>${project.oneLine}</p>
          <div class="tag-list" style="margin-top: 22px; margin-bottom: 0;">
            ${createTags(project.tags)}
          </div>
        </div>
      </section>
  
      <section class="modal-body">
        <div class="detail-grid">
          <article class="detail-card">
            <h3>프로젝트 개요</h3>
            <p>${project.portfolioDescription}</p>
          </article>
          <article class="detail-card">
            <h3>채용공고 연결 요약</h3>
            <p>${project.jobRelevanceSummary}</p>
          </article>
          <article class="detail-card">
            <h3>학습 및 사용 기술</h3>
            ${createList(project.learnedTechnologies)}
          </article>
          <article class="detail-card">
            <h3>구현 기능</h3>
            ${createList(project.implementedFeatures)}
          </article>
        </div>
  
        <h3 class="detail-section-title">공고 요구사항과의 매칭</h3>
        ${renderMatchTable(project.matchRows)}
  
        <div class="detail-grid">
          <article class="detail-card">
            <h3>리크루터에게 강조할 점</h3>
            ${createList(project.recruiterHighlights)}
          </article>
          <article class="detail-card">
            <h3>이 공고 기준 보완하면 좋은 점</h3>
            ${createList(project.improvementPoints)}
          </article>
        </div>
  
        <h3 class="detail-section-title">채용공고 참고 스냅샷</h3>
        <div class="posting-preview">
          <img src="assets/job-posting.png" alt="비상교육 Backend 개발자 AI Speak 채용공고 캡처" />
          <div>
            <p style="margin-top:0; color:#344054; font-weight:800;">${jobPosting.companyName} · ${jobPosting.jobTitle}</p>
            <ul>
              <li>포지션: ${jobPosting.jobTitle}</li>
              <li>경력 조건: ${jobPosting.careerLevel}</li>
              <li>주요 업무: ${jobPosting.mainResponsibilities.join(" / ")}</li>
              <li>요구 기술: ${jobPosting.requiredSkills.join(", ")}</li>
              <li>우대 기술: ${jobPosting.preferredSkills.join(", ")}</li>
            </ul>
          </div>
        </div>
      </section>
    `;
}

function openModal(projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;

    renderModal(project);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

if (portfolioGrid && modal && modalContent) {
    portfolioGrid.addEventListener("click", (event) => {
        const card = event.target.closest(".portfolio-card");
        if (!card) return;
        openModal(card.dataset.projectId);
    });

    modal.addEventListener("click", (event) => {
        if (event.target.dataset.close === "true") {
            closeModal();
        }
    });


    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });

    renderCards();
}
//  로그인 예시
const continueBtn = document.querySelector("#continueBtn");

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        // 로그인 검증

        // 성공하면
        location.href = "onboarding.html";
    });
}

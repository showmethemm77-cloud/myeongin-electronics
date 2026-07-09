document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".review-relay").forEach((relay) => {
  Array.from(relay.querySelectorAll(".review-chip"))
    .sort(() => Math.random() - 0.5)
    .forEach((chip) => relay.appendChild(chip));
});

const liveInquiryItems = [
  ["방금 전", "LG 2IN1", "송파구 김*현", "견적 접수"],
  ["1분 전", "LG 싱글", "강동구 박*영", "상담 대기"],
  ["2분 전", "중대형", "잠실동 이*수", "현장 확인"],
  ["3분 전", "A/S 문의", "위례동 최*민", "접수 완료"],
  ["4분 전", "LG 2IN1", "하남시 정*아", "가격 상담"],
  ["5분 전", "중대형", "문정동 오*훈", "방문 일정"],
  ["6분 전", "LG 싱글", "가락동 한*진", "견적 발송"],
  ["7분 전", "LG 2IN1", "성남시 윤*서", "상담 완료"],
  ["8분 전", "중대형", "방이동 신*호", "용량 확인"],
  ["9분 전", "A/S 문의", "석촌동 장*우", "연락 예정"],
  ["10분 전", "LG 싱글", "광진구 서*연", "견적 접수"],
  ["11분 전", "LG 2IN1", "분당구 임*정", "설치 상담"],
  ["12분 전", "중대형", "강남구 조*준", "현장 견적"],
  ["13분 전", "A/S 문의", "마천동 홍*희", "접수 완료"],
  ["14분 전", "LG 2IN1", "오금동 노*빈", "가격 비교"],
  ["15분 전", "LG 싱글", "풍납동 배*영", "상담 대기"],
  ["16분 전", "중대형", "천호동 문*식", "견적 발송"],
  ["17분 전", "LG 2IN1", "송파동 백*지", "설치 일정"],
  ["18분 전", "A/S 문의", "거여동 권*태", "연락 예정"],
  ["19분 전", "중대형", "하남시 유*석", "현장 확인"],
  ["20분 전", "LG 싱글", "강일동 남*주", "견적 접수"],
  ["21분 전", "LG 2IN1", "잠실동 안*라", "상담 완료"],
  ["22분 전", "중대형", "위례동 전*욱", "용량 상담"],
  ["23분 전", "A/S 문의", "문정동 차*은", "접수 완료"],
  ["24분 전", "LG 2IN1", "가락동 고*민", "가격 상담"],
  ["25분 전", "LG 싱글", "방이동 손*아", "설치 상담"],
  ["26분 전", "중대형", "석촌동 민*재", "방문 일정"],
  ["27분 전", "LG 2IN1", "성남시 류*현", "견적 발송"],
  ["28분 전", "A/S 문의", "오륜동 지*훈", "연락 예정"],
  ["29분 전", "중대형", "강동구 이*혁", "현장 견적"],
  ["30분 전", "LG 싱글", "송파구 김*나", "견적 접수"],
  ["31분 전", "LG 2IN1", "하남시 박*호", "설치 일정"],
  ["32분 전", "중대형", "마천동 서*준", "상담 대기"],
  ["33분 전", "A/S 문의", "풍납동 윤*경", "접수 완료"],
  ["34분 전", "LG 2IN1", "광진구 한*솔", "가격 비교"],
  ["35분 전", "LG 싱글", "분당구 임*우", "견적 발송"],
  ["36분 전", "중대형", "잠실동 최*석", "현장 확인"],
  ["37분 전", "LG 2IN1", "천호동 강*리", "상담 완료"],
  ["38분 전", "A/S 문의", "거여동 신*정", "연락 예정"],
  ["39분 전", "중대형", "위례동 배*찬", "용량 확인"],
  ["40분 전", "LG 싱글", "강남구 장*아", "견적 접수"],
  ["41분 전", "LG 2IN1", "오금동 조*연", "설치 상담"],
  ["42분 전", "중대형", "문정동 백*규", "방문 일정"],
  ["43분 전", "A/S 문의", "석촌동 유*정", "접수 완료"],
  ["44분 전", "LG 2IN1", "송파동 홍*민", "가격 상담"],
  ["45분 전", "LG 싱글", "하남시 권*서", "상담 대기"],
  ["46분 전", "중대형", "방이동 남*호", "견적 발송"],
  ["47분 전", "LG 2IN1", "가락동 문*영", "설치 일정"],
  ["48분 전", "A/S 문의", "성남시 전*우", "연락 예정"],
  ["49분 전", "중대형", "강동구 차*진", "현장 견적"]
];

const formatInquiryTime = (index) => {
  const now = new Date();
  const elapsedMinutes = 12 + (index * 37) + (index * index * 6);
  if (elapsedMinutes < 60) return `${elapsedMinutes}분 전`;

  const inquiryDate = new Date(now.getTime() - (elapsedMinutes * 60 * 1000));
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inquiryDay = new Date(
    inquiryDate.getFullYear(),
    inquiryDate.getMonth(),
    inquiryDate.getDate()
  );
  const dayDifference = Math.round((today - inquiryDay) / 86400000);
  const time = inquiryDate.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  if (dayDifference === 0) return `오늘 ${time}`;
  if (dayDifference === 1) return `어제 ${time}`;
  return `${inquiryDate.getMonth() + 1}월 ${inquiryDate.getDate()}일`;
};

document.querySelectorAll("[data-inquiry-ticker-list]").forEach((list) => {
  const cards = liveInquiryItems.map(([, type, name, status], index) => `
    <article class="popular-card inquiry-live-card">
      <span>${formatInquiryTime(index)}</span>
      <strong>${type} · ${name}</strong>
      <em>${status}</em>
    </article>
  `).join("");
  list.innerHTML = `
    <div class="inquiry-ticker-group">${cards}</div>
    <div class="inquiry-ticker-group" aria-hidden="true">${cards}</div>
  `;
});

document.querySelectorAll("[data-popular-ticker]").forEach((ticker) => {
  const track = ticker.querySelector(".hero-popular-track");
  if (!track) return;

  ticker.addEventListener("mouseenter", () => {
    track.classList.add("is-paused");
  });

  ticker.addEventListener("mouseleave", () => {
    track.classList.remove("is-paused");
  });
});

document.querySelectorAll("[data-hero-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".hero-track");
  const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
  const dots = Array.from(carousel.querySelectorAll(".hero-dots button"));
  const prev = carousel.querySelector(".hero-prev");
  const next = carousel.querySelector(".hero-next");
  if (!track || slides.length < 2) return;

  let index = 0;
  let timerId;
  let startX = 0;
  let isDragging = false;

  const goTo = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  };

  const play = () => {
    window.clearInterval(timerId);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerId = window.setInterval(() => goTo(index + 1), 3000);
  };

  prev?.addEventListener("click", () => {
    goTo(index - 1);
    play();
  });

  next?.addEventListener("click", () => {
    goTo(index + 1);
    play();
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      goTo(dotIndex);
      play();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timerId));
  carousel.addEventListener("mouseleave", play);

  carousel.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    window.clearInterval(timerId);
  });

  carousel.addEventListener("pointerup", (event) => {
    if (!isDragging) return;
    const distance = event.clientX - startX;
    isDragging = false;
    if (Math.abs(distance) > 48) {
      goTo(distance < 0 ? index + 1 : index - 1);
    }
    play();
  });

  carousel.addEventListener("pointercancel", () => {
    isDragging = false;
    play();
  });

  goTo(0);
  play();
});

const quoteForm = document.querySelector(".quote-form");
const inquiryList = document.querySelector("[data-inquiry-list]");
const formStatus = document.querySelector("[data-form-status]");
const inquiryStorageKey = "myeongin-inquiries";
const memberStorageKey = "myeongin-members";
const sessionStorageKey = "myeongin-current-member";
const authModal = document.querySelector("[data-auth-modal]");
const authOpenButtons = document.querySelectorAll("[data-auth-open]");
const authClose = document.querySelector("[data-auth-close]");
const authTabs = document.querySelectorAll("[data-auth-tab]");
const authPanels = document.querySelectorAll("[data-auth-panel]");
const socialSignupButtons = document.querySelectorAll("[data-social-signup]");

function getMembers() {
  try {
    return JSON.parse(localStorage.getItem(memberStorageKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveMembers(members) {
  localStorage.setItem(memberStorageKey, JSON.stringify(members));
}

function getCurrentMember() {
  try {
    return JSON.parse(sessionStorage.getItem(sessionStorageKey));
  } catch (error) {
    return null;
  }
}

function setCurrentMember(member) {
  if (member) {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify({
      name: member.name,
      phone: member.phone,
      provider: member.provider || "연락처"
    }));
  } else {
    sessionStorage.removeItem(sessionStorageKey);
  }
  updateAuthUI();
}

function updateAuthUI() {
  const currentMember = getCurrentMember();
  const loginButton = document.querySelector('[data-auth-open="login"]');
  const registerButton = document.querySelector('[data-auth-open="register"]');
  if (!loginButton || !registerButton) return;

  if (currentMember) {
    loginButton.textContent = `${currentMember.name}님`;
    loginButton.dataset.loggedIn = "true";
    registerButton.textContent = "로그아웃";
    registerButton.dataset.authAction = "logout";
    return;
  }

  loginButton.textContent = "로그인";
  delete loginButton.dataset.loggedIn;
  registerButton.textContent = "간편가입";
  delete registerButton.dataset.authAction;
}

function setAuthPanel(target) {
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === target));
  authPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.authPanel === target));
}

function openAuthModal(target = "login") {
  if (!authModal) return;
  setAuthPanel(target);
  authModal.hidden = false;
  window.setTimeout(() => {
    authModal.querySelector(`[data-auth-panel="${target}"] input`)?.focus();
  }, 0);
}

function closeAuthModal() {
  if (!authModal) return;
  authModal.hidden = true;
}

authOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.authAction === "logout") {
      setCurrentMember(null);
      return;
    }
    openAuthModal(button.dataset.authOpen);
  });
});

authClose?.addEventListener("click", closeAuthModal);

authModal?.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && authModal && !authModal.hidden) {
    closeAuthModal();
  }
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAuthPanel(tab.dataset.authTab));
});

authPanels.forEach((form) => {
  form.querySelectorAll("input").forEach((input) => {
    input.required = true;
  });
  form.querySelectorAll('input[type="password"]').forEach((input) => {
    input.minLength = 4;
  });
});

socialSignupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const provider = button.dataset.socialSignup;
    const status = document.querySelector('[data-auth-status="register"]');
    const socialId = `${provider}-${Date.now()}`;
    const member = {
      name: `${provider} 회원`,
      phone: socialId,
      password: "",
      provider
    };
    const members = getMembers();
    members.unshift(member);
    saveMembers(members.slice(0, 20));
    setCurrentMember(member);
    if (status) {
      status.textContent = `${provider} 간편가입이 완료되었습니다.`;
    }
    window.setTimeout(closeAuthModal, 650);
  });
});

authPanels.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const panel = form.dataset.authPanel;
    const status = document.querySelector(`[data-auth-status="${panel}"]`);

    if (panel === "register") {
      const member = {
        name: String(formData.get("name") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        password: String(formData.get("password") || "")
      };

      if (!member.name || !member.phone || !member.password) {
        if (status) status.textContent = "이름, 연락처, 비밀번호를 모두 입력해주세요.";
        return;
      }

      const members = getMembers().filter((item) => item.phone !== member.phone);
      members.unshift(member);
      saveMembers(members);
      form.reset();
      setCurrentMember(member);
      if (status) status.textContent = "간편가입과 로그인이 완료되었습니다.";
      window.setTimeout(closeAuthModal, 650);
      return;
    }

    if (panel === "find") {
      const findName = String(formData.get("findName") || "").trim();
      const findPhone = String(formData.get("findPhone") || "").trim();
      const matchedMember = getMembers().find((member) => {
        return member.name === findName && member.phone === findPhone;
      });

      if (status) {
        status.textContent = matchedMember?.password
          ? `가입하신 비밀번호는 "${matchedMember.password}" 입니다.`
          : "일치하는 회원 정보를 찾지 못했습니다.";
      }
      return;
    }

    const loginId = String(formData.get("loginId") || "").trim();
    const loginPassword = String(formData.get("loginPassword") || "");
    const matchedMember = getMembers().find((member) => {
      return (member.phone === loginId || member.name === loginId) && member.password === loginPassword;
    });

    if (status) {
      status.textContent = matchedMember
        ? `${matchedMember.name}님, 로그인되었습니다.`
        : "회원 정보가 일치하지 않습니다.";
    }
    if (matchedMember) {
      setCurrentMember(matchedMember);
      window.setTimeout(closeAuthModal, 650);
    }
  });
});

updateAuthUI();

function getStoredInquiries() {
  try {
    return JSON.parse(localStorage.getItem(inquiryStorageKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveStoredInquiries(inquiries) {
  localStorage.setItem(inquiryStorageKey, JSON.stringify(inquiries));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function maskPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) return "연락처 확인 필요";
  return `${digits.slice(0, 3)}-****-${digits.slice(-4)}`;
}

function renderInquiries() {
  if (!inquiryList) return;
  const inquiryKind = inquiryList.dataset.inquiryKind || "as";
  const inquiries = getStoredInquiries().filter((inquiry) => {
    return inquiry.kind === inquiryKind || (!inquiry.kind && inquiryKind === "as");
  });

  if (!inquiries.length) {
    inquiryList.innerHTML = '<p class="empty-inquiry">아직 등록된 문의글이 없습니다. 아래에서 첫 문의를 남겨주세요.</p>';
    return;
  }

  inquiryList.innerHTML = inquiries.map((inquiry) => `
    <article class="inquiry-card">
      <div class="inquiry-card-head">
        <strong>${escapeHtml(inquiry.product)}</strong>
        <span>${escapeHtml(inquiry.createdAt)}</span>
      </div>
      <p>${escapeHtml(inquiry.message)}</p>
      <div class="inquiry-meta">
        <span>${escapeHtml(inquiry.name)}</span>
        <span>${escapeHtml(maskPhone(inquiry.phone))}</span>
      </div>
    </article>
  `).join("");
}

const inquiryEmailEndpoint = "https://formsubmit.co/ajax/anckd1ehd@naver.com";

if (quoteForm) {
  quoteForm.querySelectorAll("input, select, textarea").forEach((field) => {
    if (field.type !== "hidden") {
      field.required = true;
    }
  });

  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const phone = String(formData.get("phone") || "").trim();
    if (phone.replace(/\D/g, "").length < 10) {
      if (formStatus) formStatus.textContent = "연락 가능한 전화번호를 정확히 입력해주세요.";
      quoteForm.querySelector('[name="phone"]')?.focus();
      return;
    }

    const inquiry = {
      kind: quoteForm.dataset.inquiryKind || (location.pathname.endsWith("as.html") ? "as" : "estimate"),
      name: String(formData.get("name") || "").trim(),
      phone,
      product: String(formData.get("product") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      createdAt: new Date().toLocaleString("ko-KR", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton?.textContent || "";
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "메일 전송 중...";
    }

    if (formStatus) {
      formStatus.textContent = "문의 내용을 메일로 전송하고 있습니다.";
    }

    try {
      const mailData = new FormData();
      const inquiryType = inquiry.kind === "as" ? "A/S 문의" : "무료 견적 문의";
      mailData.append("_subject", `[명인전자] ${inquiryType} - ${inquiry.name}`);
      mailData.append("_template", "table");
      mailData.append("_captcha", "false");
      mailData.append("문의 구분", inquiryType);
      mailData.append("이름", inquiry.name);
      mailData.append("연락처", inquiry.phone);
      mailData.append("관심 품목", inquiry.product);
      mailData.append("설치 지역/내용", inquiry.message);
      mailData.append("접수 시간", inquiry.createdAt);
      mailData.append("접수 페이지", window.location.href);

      const response = await fetch(inquiryEmailEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: mailData
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === "false") {
        throw new Error(result?.message || "메일 전송 실패");
      }

      const inquiries = [inquiry, ...getStoredInquiries()].slice(0, 50);
      saveStoredInquiries(inquiries);
      renderInquiries();
      quoteForm.reset();

      if (formStatus) {
        formStatus.textContent = "문의가 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.";
      }

      document.querySelector("#quote-board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error("Inquiry email failed", error);
      if (formStatus) {
        formStatus.textContent = "메일 전송을 다시 시도합니다. 잠시만 기다려주세요.";
      }
      quoteForm.submit();
      return;
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}

renderInquiries();

const sentParams = new URLSearchParams(window.location.search);
if (quoteForm && sentParams.get("sent") === "1" && formStatus) {
  formStatus.textContent = "문의가 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.";
}

const quoteParams = new URLSearchParams(window.location.search);
if (quoteForm && quoteParams.has("product")) {
  const productName = quoteParams.get("product");
  const modelName = quoteParams.get("model");
  const productSelect = quoteForm.querySelector('[name="product"]');
  const messageField = quoteForm.querySelector('[name="message"]');
  if (productSelect) {
    const isCommercial = /중대형|냉난방기|천장형|스탠드/.test(productName);
    productSelect.value = isCommercial
      ? "중대형 - LG/삼성/캐리어"
      : productSelect.value;
  }
  if (messageField) {
    messageField.value = `${productName}${modelName ? ` (${modelName})` : ""} 견적을 문의합니다. 설치 지역: `;
  }
}

const lgTwoInOneProducts = [
  {
    model: "FQ18GV4EA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 2in1 (4시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782832/md10782832-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv4ea2",
    area: "58.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "외출 절전, 레이더 센서, 한쪽바람, CAC 인증, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 3280500,
    salePrice: 2539541
  },
  {
    model: "FQ18GV3EE2",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 2in1 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782857/md10782857-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ee2",
    area: "58.5㎡",
    grade: "1등급",
    color: "에센스 화이트",
    features: "외출 절전, 레이더 센서, 한쪽바람, 에어커버",
    filter: "-",
    factoryPrice: 3629000,
    salePrice: 2829668
  },
  {
    model: "FQ22GV3EA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 2in1 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782858/md10782858-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq22gv3ea2",
    area: "74.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "외출 절전, 레이더 센서, 한쪽바람, 에어커버",
    filter: "-",
    factoryPrice: 3618000,
    salePrice: 2820510
  },
  {
    model: "FQ18GV3EA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 2in1 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782858/md10782858-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ea2",
    area: "58.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "레이더 센서, 한쪽바람, 에어커버",
    filter: "-",
    factoryPrice: 3130500,
    salePrice: 2414666
  },
  {
    model: "FQ18GV3BA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 2in1 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782860/md10782860-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ba2",
    area: "58.5㎡",
    grade: "2등급",
    color: "카밍 베이지",
    features: "외출 절전, 레이더 센서, 한쪽바람, 에어커버",
    filter: "-",
    factoryPrice: 3230500,
    salePrice: 2497916
  },
  {
    model: "FQ22GU2EA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 2in1 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10783834/md10783834-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq22gu2ea2",
    area: "74.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "알러지케어 집진필터",
    factoryPrice: 3118000,
    salePrice: 2404260
  },
  {
    model: "FQ18GU1EK2",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 2in1 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10827843/md10827843-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gu1ek2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: null,
    salePrice: null
  },
  {
    model: "FQ18GU1EA2",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 2in1 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10783852/md10783852-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gu1ea2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 2481000,
    salePrice: 1873958
  },
  {
    model: "FQ18GC4EA2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 프로 에어컨 2in1 (4시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10780832/md10780832-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc4ea2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 2431000,
    salePrice: 1832333
  },
  {
    model: "FQ18GC3EA2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 프로 에어컨 2in1 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781832/md10781832-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc3ea2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "에어커버",
    filter: "-",
    factoryPrice: 2331000,
    salePrice: 1749083
  },
  {
    model: "FQ18GC2EU2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 2in1 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781853/md10781853-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc2eu2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 2331000,
    salePrice: 1982294
  },
  {
    model: "FQ18GC2EA2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 2in1 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781853/md10781853-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc2ea2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증",
    filter: "알러지케어 집진필터",
    factoryPrice: 2231000,
    salePrice: 1887944
  },
  {
    model: "FQ18GC1EU2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 2in1 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781880/md10781880-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc1eu2",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "에어커버",
    filter: "-",
    factoryPrice: 2231000,
    salePrice: 1665833
  },
  {
    model: "FQ18GC1EA2",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 2in1 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781880/md10781880-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc1ea2",
    area: "58.5㎡",
    grade: "-",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 2131000,
    salePrice: 1582583
  }
];

const lgSingleProducts = [
  {
    model: "FQ18GV4EA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 싱글 (4시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782826/md10782826-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv4ea1",
    area: "58.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "외출 절전, 레이더 센서, 한쪽바람, CAC 인증, UV 팬살균, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 2930500,
    salePrice: 2314766
  },
  {
    model: "FQ18GV3EE1",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 싱글 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782840/md10782840-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ee1",
    area: "58.5㎡",
    grade: "1등급",
    color: "에센스 화이트",
    features: "외출 절전, 한쪽바람, 레이더 센서, 에어커버",
    filter: "-",
    factoryPrice: 3249000,
    salePrice: 2579918
  },
  {
    model: "FQ22GV3EA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 싱글 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782841/md10782841-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq22gv3ea1",
    area: "74.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "외출 절전, 레이더 센서, 한쪽바람, UV 팬살균, 에어커버",
    filter: "-",
    factoryPrice: 3268000,
    salePrice: 2595735
  },
  {
    model: "FQ18GV3EA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 싱글 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782841/md10782841-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ea1",
    area: "58.5㎡",
    grade: "2등급",
    color: "에센스 화이트",
    features: "외출 절전, 한쪽바람, 레이더 센서, 에어커버",
    filter: "-",
    factoryPrice: 2780500,
    salePrice: 2189891
  },
  {
    model: "FQ18GV3BA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰I 에어컨 싱글 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10782850/md10782850-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gv3ba1",
    area: "58.5㎡",
    grade: "2등급",
    color: "카밍 베이지",
    features: "외출 절전, 한쪽바람, UV 팬살균, 에어커버",
    filter: "-",
    factoryPrice: 2880500,
    salePrice: 2273141
  },
  {
    model: "FQ22GU2EA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 싱글 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10783826/md10783826-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq22gu2ea1",
    area: "74.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증",
    filter: "알러지케어 집진필터",
    factoryPrice: 2768000,
    salePrice: 2179485
  },
  {
    model: "FQ18GU1EK1",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 싱글 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10827829/md10827829-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gu1ek1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: null,
    salePrice: null
  },
  {
    model: "FQ18GU1EA1",
    title: "LG 휘센 AI 오브제컬렉션 뷰II 에어컨 싱글 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10783842/md10783842-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gu1ea1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 2131000,
    salePrice: 1649183
  },
  {
    model: "FQ18GC4EA1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 프로 에어컨 싱글 (4시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10780826/md10780826-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc4ea1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 2081000,
    salePrice: 1607558
  },
  {
    model: "FQ18GC3EA1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 프로 에어컨 싱글 (3시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10780826/md10780826-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc3ea1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 1981000,
    salePrice: 1524308
  },
  {
    model: "FQ18GC2EU1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 싱글 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781840/md10781840-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc2eu1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증, 에어커버",
    filter: "알러지케어 집진필터",
    factoryPrice: 1981000,
    salePrice: 1652069
  },
  {
    model: "FQ18GC2EA1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 싱글 (2시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781840/md10781840-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc2ea1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "CAC 인증",
    filter: "알러지케어 집진필터",
    factoryPrice: 1881000,
    salePrice: 1557719
  },
  {
    model: "FQ18GC1EU1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 싱글 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781866/md10781866-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc1eu1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 1881000,
    salePrice: 1441058
  },
  {
    model: "FQ18GC1EA1",
    title: "LG 휘센 AI 오브제컬렉션 쿨 에어컨 싱글 (1시리즈)",
    image: "https://www.lge.co.kr/kr/images/air-conditioners/md10781866/md10781866-450x450.jpg",
    url: "https://www.lge.co.kr/air-conditioners/fq18gc1ea1",
    area: "58.5㎡",
    grade: "3등급",
    color: "에센스 화이트",
    features: "-",
    filter: "-",
    factoryPrice: 1781000,
    salePrice: 1357808
  }
];

function formatPrice(price) {
  return typeof price === "number" ? `${price.toLocaleString("ko-KR")}원` : "문의";
}

function isPriceVisible(product) {
  return typeof product.factoryPrice === "number" && typeof product.salePrice === "number";
}

function getPyeongLabel(product) {
  const modelMatch = product.model.match(/^FQ(\d{2})/);
  if (modelMatch) return `${Number(modelMatch[1])}평`;
  return product.area || "";
}

function renderCatalog(selector, products) {
  const catalogTarget = document.querySelector(selector);
  if (!catalogTarget) return;

  catalogTarget.innerHTML = products.map((product, index) => `
    <article class="catalog-card reveal reveal-up" style="--reveal-delay: ${Math.min(index % 4, 3) * 0.06}s">
      <div class="catalog-media">
        <div class="catalog-photo-tags">
          <span>${getPyeongLabel(product)}</span>
          <span>${product.grade}</span>
        </div>
        <img src="${product.image}" alt="${product.model} 제품 이미지" loading="lazy">
      </div>
      <div class="catalog-info">
        <div class="catalog-topline">
          <span class="catalog-model">${product.model}</span>
          <span class="catalog-kind">LG</span>
        </div>
        <h4 class="catalog-title">${product.title}</h4>
        <div class="price-box ${isPriceVisible(product) ? "" : "price-box-pending"}">
          <p class="market-note">4대 오픈마켓 최저가</p>
          <div class="factory-row"><span>기준가</span><strong>${formatPrice(product.factoryPrice)}</strong></div>
          <div class="sale-row"><span>판매가</span><strong>${formatPrice(product.salePrice)}</strong></div>
          ${isPriceVisible(product) ? `<p class="saving-text"><span class="market-line"><span class="market coupang">쿠팡</span><span class="dot">·</span><span class="market gmarket">G마켓</span><span class="dot">·</span><span class="market eleven">11번가</span><span class="dot">·</span><span class="market auction">옥션</span> 최저가 기준</span><span class="saving-line">8~15% 절감 판매</span></p>` : `<p class="saving-text">가격은 별도 문의가 필요합니다.</p>`}
        </div>
        <div class="catalog-actions">
          <a href="${product.url}" target="_blank" rel="noopener">LG 상세</a>
          <a href="index.html?product=${encodeURIComponent(product.title)}&model=${encodeURIComponent(product.model)}#quote">견적문의</a>
        </div>
      </div>
    </article>
  `).join("");
}

const lgCeilingProducts = [
  { area: "6평형", voltage: "220V", type: "1WAY 냉난방기", model: "TW0230U2S", price: 1050000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "8평형", voltage: "220V", type: "1WAY 냉난방기", model: "TW0320U2S", price: 1120000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "10평형", voltage: "220V", type: "1WAY 냉난방기", model: "TW0400U2S", price: 1330000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "13평형", voltage: "220V", type: "2WAY 냉난방기", model: "TW0522S2S", price: 1650000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "15평형", voltage: "220V", type: "2WAY 냉난방기", model: "TW0651S2SR", price: 1850000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "15평형", voltage: "220V", type: "1WAY 냉난방기 프리미엄", model: "TW0600P2L", price: 1350000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "18평형", voltage: "220V", type: "4WAY 냉난방기 프리미엄", model: "TW0720P2L", price: 1460000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "25평형", voltage: "220V", type: "4WAY 냉난방기 프리미엄", model: "TW0900M2L", price: 1560000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "28평형", voltage: "220/380V", type: "4WAY 냉난방기 프리미엄", model: "TW1000M9L", price: 1700000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "31평형", voltage: "220/380V", type: "4WAY 냉난방기 프리미엄", model: "TW1100M9L", price: 1750000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "36평형", voltage: "220/380V", type: "4WAY 냉난방기 프리미엄", model: "TW1300M9L", price: 1860000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "40평형", voltage: "380V", type: "4WAY 냉난방기 프리미엄", model: "TW1450M9L", price: 2030000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "18평형", voltage: "220V", type: "원형 천장형 냉난방기", model: "TW0722Y2SR", price: 1700000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "25평형", voltage: "220V", type: "원형 천장형 냉난방기", model: "TW0900Y2SR", price: 1870000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "31평형", voltage: "220/380V", type: "원형 천장형 냉난방기", model: "TW1100Y9SR", price: 2160000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "40평형", voltage: "380V", type: "원형 천장형 냉난방기", model: "TW1450Y9SR", price: 2550000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "31평형", voltage: "380V", type: "매립덕트형 냉난방기", model: "BW1100M9S", price: null, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "40평형", voltage: "380V", type: "매립덕트형 냉난방기", model: "BW1450M9S", price: null, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "6평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0232U2S", price: 800000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "8평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0322U2S", price: 900000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "10평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0401U2S", price: 1050000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "13평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0521T2S", price: 1160000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0601T2S", price: 1250000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "18평형", voltage: "220V", type: "1WAY 냉방기", model: "TQ0721T2S", price: 1320000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "4WAY 냉방기", model: "TQ0600B2SD", price: 1300000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "18평형", voltage: "220V", type: "4WAY 냉방기", model: "TQ0720B2SD", price: 1350000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "25평형", voltage: "220V", type: "4WAY 냉방기", model: "TQ0900A2SD", price: 1500000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "31평형", voltage: "220V", type: "4WAY 냉방기", model: "TQ1100A2DR", price: 1820000, image: "assets/commercial-ceiling-lg-transparent.png" },
  { area: "40평형", voltage: "220V", type: "4WAY 냉방기", model: "TQ1450A2DR", price: 2110000, image: "assets/commercial-ceiling-lg-transparent.png" }
];

const samsungCeilingProducts = [
  { area: "6평형", voltage: "220V", type: "1WAY 냉난방기", model: "AC023CS1PBH1SY", price: 810000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "8평형", voltage: "220V", type: "1WAY 냉난방기", model: "AC032CS1PBH1SY", price: 840000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "10평형", voltage: "220V", type: "1WAY 냉난방기", model: "AC040CS1PBH1SY", price: 1090000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "13평형", voltage: "220V", type: "1WAY 냉난방기", model: "AC052CS1PBH1SY", price: 1330000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "1WAY 냉난방기", model: "AC060CS1PBH1SY", price: 1380000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "4WAY 냉난방기", model: "AC060BS4PBH7SY", price: 1320000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "18평형", voltage: "220V", type: "4WAY 냉난방기", model: "AC072BS4PBH7SY", price: 1440000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "25평형", voltage: "220V", type: "4WAY 냉난방기", model: "AC090BS4PBH7SY", price: 1540000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "28평형", voltage: "220/380V", type: "4WAY 냉난방기", model: "AC100BS4PBH7SY", price: 1640000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "30평형", voltage: "220/380V", type: "4WAY 냉난방기", model: "AC110BS4PBH7SY", price: 1730000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "36평형", voltage: "220/380V", type: "4WAY 냉난방기", model: "AC130BS4PBH7SY", price: 1840000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "40평형", voltage: "380V", type: "4WAY 냉난방기", model: "AC145BS4PHH7SY", price: 2000000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "15평형", voltage: "220V", type: "360 원형 냉난방기", model: "AC060CS6PBH1SY", price: 1490000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "18평형", voltage: "220V", type: "360 원형 냉난방기", model: "AC072CS6PBH1SY", price: 1520000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "25평형", voltage: "220V", type: "360 원형 냉난방기", model: "AC090CS6PBH1SY", price: 1690000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "28평형", voltage: "220/380V", type: "360 원형 냉난방기", model: "AC100BS6PBH1SY", price: 1950000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "30평형", voltage: "220/380V", type: "360 원형 냉난방기", model: "AC110CS6PBH1SY", price: 1970000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "36평형", voltage: "220/380V", type: "360 원형 냉난방기", model: "AC130CS6PBH1SY", price: 2240000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "40평형", voltage: "380V", type: "360 원형 냉난방기", model: "AC145CS6PHH1SY", price: 2280000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "30평형", voltage: "220/380V", type: "매립덕트형 냉난방기", model: "AC110RAMDHH1SY", price: null, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "40평형", voltage: "380V", type: "매립덕트형 냉난방기", model: "AC145RAMDHH1SY", price: null, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "6평형", voltage: "220V", type: "1WAY 냉방기", model: "AC023CS1DBC1SY", price: 700000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "8평형", voltage: "220V", type: "1WAY 냉방기", model: "AC032CS1DBC1SY", price: 780000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "10평형", voltage: "220V", type: "1WAY 냉방기", model: "AC040CS1DBC1SY", price: 910000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "13평형", voltage: "220V", type: "1WAY 냉방기", model: "AC052CS1DBC1SY", price: 1070000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "1WAY 냉방기", model: "AC060CS1DBC1SY", price: 1080000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "18평형", voltage: "220V", type: "1WAY 냉방기", model: "AC072CS1DBC1SY", price: 1180000, image: "assets/commercial-samsung-ceiling-wide.png" },
  { area: "15평형", voltage: "220V", type: "4WAY 냉방기", model: "AC060CS4DBC1SY", price: 1230000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "18평형", voltage: "220V", type: "4WAY 냉방기", model: "AC072CS4DBC1SY", price: 1250000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "23평형", voltage: "220V", type: "4WAY 냉방기", model: "AC090CS4DBC1SY", price: 1400000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "28평형", voltage: "220V", type: "4WAY 냉방기", model: "AC100CS4DBC1SY", price: 1490000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "30평형", voltage: "220V", type: "4WAY 냉방기", model: "AC110CS4DBC1SY", price: 1710000, image: "assets/commercial-samsung-cassette-square.png" },
  { area: "40평형", voltage: "220V", type: "4WAY 냉방기", model: "AC145CS4DBC1SY", price: 1970000, image: "assets/commercial-samsung-cassette-square.png" }
];

function renderCeilingProducts(selector, products, brandName) {
  document.querySelectorAll(selector).forEach((list) => {
    list.innerHTML = products.map((product) => `
      <article class="commercial-product-card ceiling-product-card" data-brand="${brandName.toLowerCase()}-ceiling">
        <div class="commercial-card-media">
          <span>${product.area} · ${product.voltage}</span>
          <img src="${product.image}" alt="${brandName} ${product.type} ${product.area} ${product.model}" loading="lazy">
        </div>
        <div class="commercial-card-body">
          <small>${brandName} ${product.type}</small>
          <h3>${product.model}</h3>
          <p class="commercial-price ${product.price ? "" : "price-request"}">${product.price ? formatPrice(product.price) : "협의 요청"}</p>
          <p class="commercial-included">실외기 포함 · 설치비 별도</p>
          <a href="index.html?product=${encodeURIComponent(`${brandName} ${product.type}`)}&model=${encodeURIComponent(product.model)}#quote">견적 문의</a>
        </div>
      </article>
    `).join("");
  });
}

document.querySelectorAll("[data-commercial-ceiling-list]").forEach((list) => {
  list.innerHTML = lgCeilingProducts.map((product) => `
    <article class="commercial-product-card ceiling-product-card" data-brand="lg-ceiling">
      <div class="commercial-card-media">
        <span>${product.area} · ${product.voltage}</span>
        <img src="${product.image}" alt="LG ${product.type} ${product.area} ${product.model}" loading="lazy">
      </div>
      <div class="commercial-card-body">
        <small>LG ${product.type}</small>
        <h3>${product.model}</h3>
        <p class="commercial-price ${product.price ? "" : "price-request"}">${product.price ? formatPrice(product.price) : "협의 요청"}</p>
        <p class="commercial-included">실외기 포함 · 설치비 별도</p>
        <a href="index.html?product=${encodeURIComponent(`LG ${product.type}`)}&model=${encodeURIComponent(product.model)}#quote">견적 문의</a>
      </div>
    </article>
  `).join("");
});

renderCeilingProducts("[data-samsung-ceiling-list]", samsungCeilingProducts, "삼성");

document.querySelectorAll(".commercial-product-card").forEach((card) => {
  const link = card.querySelector(".commercial-card-body a");
  const category = card.querySelector(".commercial-card-body small")?.textContent.trim();
  const model = card.querySelector(".commercial-card-body h3")?.textContent.trim();
  if (!link || !category || !model) return;
  link.href = `index.html?product=${encodeURIComponent(category)}&model=${encodeURIComponent(model)}#quote`;
});

renderCatalog('[data-product-list="lg-two-in-one"]', lgTwoInOneProducts);
renderCatalog('[data-product-list="lg-single"]', lgSingleProducts);

document.querySelectorAll("[data-catalog-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.catalogTab;

    document.querySelectorAll("[data-catalog-tab]").forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    document.querySelectorAll("[data-catalog-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.catalogPanel === target);
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

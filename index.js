// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "12월에도 포레와 함께!!" },
  { "number": 2, "message": "숲별, Are you okey~." },
  { "number": 3, "message": "포레의 베이스는 오직 한명뿐, 늘 기다릴게" },
  { "number": 4, "message": "포레의 상징 숫자" },
  { "number": 5, "message": "포레하면 청춘이지" },
  { "number": 6, "message": "포레하면 청춘, 청순이지" },
  { "number": 7, "message": "포레하면 청춘, 청순, 까리지" },
  { "number": 8, "message": "넘흐 얘쁘ㄷrㅠㅠ" },
  { "number": 9, "message": "우리들만의 유토피아를 만들자" },
  { "number": 10, "message": "포레 의상팀 열일 중" },
  { "number": 11, "message": "포레는 어떤 컨셉이든 찰떡" },
  { "number": 12, "message": "RA- RA- AH AH AH AH-" },
  { "number": 13, "message": "형님즈는 까리하고 동생즈는 귀욤" },
  { "number": 14, "message": "댕댕즈, 냥냥즈 그림체 동기화 무엇" },
  { "number": 15, "message": "왜 다들 귀염, 멋짐, 까리, 예쁨" },
  { "number": 16, "message": "오랜만에 주단 깔러 갑시다" },
  { "number": 17, "message": "잔잔하게 흘러가는 포레시피 너무 좋았어" },
  { "number": 18, "message": "포레 교복 광고 찍어도 되겠어(☞ ͡° ͜ʖ ͡°)☞" },
  { "number": 19, "message": "하트가 무려 2²" },
  { "number": 20, "message": "포레 단독콘에는 포레스텔라 분들이랑 포레스텔라 분들이랑...." },
  { "number": 21, "message": "이때는 형호님이 아직 두피의 고통을 느끼기 전이었지" },
  { "number": 22, "message": "올블랙 포레 폼 포레했다" },
  { "number": 23, "message": "숲별 선정)내 생애 최고의 선택" },
  { "number": 24, "message": "모두 즐거운 포레 크리스마스되세요~~" }
];

<template>
    <div class="body overflow-hidden">
        <div class="team-section">

          <div class="carousel-container">
            <button
              class="nav-arrow left"
              @click="prevSlide"
              :disabled="isAnimating"
            >
              ‹
            </button>

            <div class="carousel-track">
              <div
                v-for="(member, index) in teamMembers"
                :key="member.id"
                class="card"
                :class="getCardClass(index)"
                @click="goToSlide(index)"
                :data-index="index"
              >
                <img
                  :src="member.image"
                  :alt="member.name"
                />
              </div>
            </div>

            <button
              class="nav-arrow right"
              @click="nextSlide"
              :disabled="isAnimating"
            >
              ›
            </button>
          </div>

          <div class="dots">
            <div
              v-for="(member, index) in teamMembers"
              :key="'dot-' + member.id"
              class="dot"
              :class="{ active: currentIndex === index }"
              @click="goToSlide(index)"
              :data-index="index"
            ></div>
          </div>
        </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import config from '@/config'

  const teamMembers = [
    {
      id: 1,
      image: config.getUploadUrl('/2025/10/photo_2025-10-31_09-48-45-1.jpg')
    },
    {
      id: 2,
      image: config.getUploadUrl('/2022/03/aktion-1.jpeg')
    },
    {
      id: 3,
      image: config.getUploadUrl('/2022/03/aktion.jpeg')
    },
    {
      id: 4,
      image: config.getUploadUrl('/2022/03/0001-1-scaled.jpg')
    },
    {
      id: 5,
      image: config.getUploadUrl('/2022/03/ПравовойДиктант-1-scaled.jpg')
    },
    {
      id: 6,
      image: config.getUploadUrl('/2022/03/0001-scaled.jpg')
    },
    {
      id: 7,
      image: config.getUploadUrl('/2022/05/TIN.jpg')
    },
    {
      id: 8,
      image: config.getUploadUrl('/2022/05/SertifikatK.jpg')
    },
    {
      id: 9,
      image: config.getUploadUrl('/2021/11/PenPaper-scaled.jpg')
    }
  ]

  // Реактивные переменные
  const currentIndex = ref(0)
  const isAnimating = ref(false)
  const nameOpacity = ref(1)
  const roleOpacity = ref(1)

  // Вычисляемые свойства
//   const currentMember = computed(() => teamMembers[currentIndex.value])

  // Методы - ВАЖНО: исправленная логика позиционирования
  const getCardClass = (index) => {
    const total = teamMembers.length
    const offset = (index - currentIndex.value + total) % total

    // Для 6 элементов показываем 5: 2 слева, 1 центр, 2 справа
    if (offset === 0) {
      return 'center'
    } else if (offset === 1) {
      return 'right-1'
    } else if (offset === 2) {
      return 'right-2'
    } else if (offset === total - 1) { // Последний элемент = левый-1
      return 'left-1'
    } else if (offset === total - 2) { // Предпоследний элемент = левый-2
      return 'left-2'
    } else {
      return 'hidden' // 6-й элемент скрыт
    }
  }

  const goToSlide = (index) => {
    if (isAnimating.value) return
    isAnimating.value = true

    // Анимация исчезновения текста
    nameOpacity.value = 0
    roleOpacity.value = 0

    setTimeout(() => {
      // Корректировка индекса для циклической карусели
      currentIndex.value = (index + teamMembers.length) % teamMembers.length

      // Анимация появления текста
      setTimeout(() => {
        nameOpacity.value = 1
        roleOpacity.value = 1
      }, 50)

      // Завершение анимации
      setTimeout(() => {
        isAnimating.value = false
      }, 500)
    }, 300)
  }

  const nextSlide = () => goToSlide(currentIndex.value + 1)
  const prevSlide = () => goToSlide(currentIndex.value - 1)

  // Swipe для мобильных
  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  // Обработка клавиатуры
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  // Хуки жизненного цикла
  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchend', handleTouchEnd)
  })
  </script>

  <style scoped>
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	overflow: hidden;
}


.carousel-container {
    width: 100%;
    max-width: 313px;
    height: 450px;
    position: relative;
    perspective: 1000px;
    margin-top: 80px;
    margin: auto;
}

.carousel-track {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card {
	position: absolute;
	width: 280px;
	/* height: 380px; */
	background: white;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	cursor: pointer;
}

.card img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card.center {
	z-index: 10;
	transform: scale(1.1) translateZ(0);
}

.card.center img {
	filter: none;
}

.card.left-2 {
	z-index: 1;
	transform: translateX(-400px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}

.card.left-2 img {
	filter: grayscale(100%);
}

.card.left-1 {
	z-index: 5;
	transform: translateX(-200px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}

.card.left-1 img {
	filter: grayscale(100%);
}

.card.right-1 {
	z-index: 5;
	transform: translateX(200px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}

.card.right-1 img {
	filter: grayscale(100%);
}

.card.right-2 {
	z-index: 1;
	transform: translateX(400px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}

.card.right-2 img {
	filter: grayscale(100%);
}

.card.hidden {
	opacity: 0;
	pointer-events: none;
}

.member-info {
	text-align: center;
	margin-top: 40px;
	transition: all 0.5s ease-out;
}

.member-name {
	color: rgb(8, 42, 123);
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 10px;
	position: relative;
	display: inline-block;
}

.member-name::before,
.member-name::after {
	content: "";
	position: absolute;
	top: 100%;
	width: 100px;
	height: 2px;
	background: rgb(8, 42, 123);
}

.member-name::before {
	left: -120px;
}

.member-name::after {
	right: -120px;
}

.member-role {
	color: #848696;
	font-size: 1.5rem;
	font-weight: 500;
	opacity: 0.8;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	padding: 10px 0;
	margin-top: -15px;
	position: relative;
}
.dots {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 60px;
}

.dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: rgba(8, 42, 123, 0.2);
	cursor: pointer;
	transition: all 0.3s ease;
}

.dot.active {
	background: rgb(8, 42, 123);
	transform: scale(1.2);
}

.nav-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(8, 42, 123, 0.6);
	color: white;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 20;
	transition: all 0.3s ease;
	font-size: 1.5rem;
	border: none;
	outline: none;
	padding-bottom: 4px;
}

.nav-arrow:hover {
	background: rgba(0, 0, 0, 0.8);
	transform: translateY(-50%) scale(1.1);
}

.nav-arrow.left {
	left: 20px;
	padding-right: 3px;
}

.nav-arrow.right {
	right: 20px;
	padding-left: 3px;
}

@media (max-width: 768px) {

	.card {
		width: 200px;
		height: 280px;
	}

	.card.left-2 {
		transform: translateX(-250px) scale(0.8) translateZ(-300px);
	}

	.card.left-1 {
		transform: translateX(-120px) scale(0.9) translateZ(-100px);
	}

	.card.right-1 {
		transform: translateX(120px) scale(0.9) translateZ(-100px);
	}

	.card.right-2 {
		transform: translateX(250px) scale(0.8) translateZ(-300px);
	}

	.member-name {
		font-size: 2rem;
	}

	.member-role {
		font-size: 1.2rem;
	}

	.member-name::before,
	.member-name::after {
		width: 50px;
	}

	.member-name::before {
		left: -70px;
	}

	.member-name::after {
		right: -70px;
	}
}

  </style>

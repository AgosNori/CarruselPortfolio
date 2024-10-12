var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            const slides = document.querySelectorAll('.tranding-slide');
            slides.forEach(slide => {
                const info = slide.querySelector('.tranding-slide-info');
                info.style.display = 'none'; // Ocultar información de todos los slides
            });
  
            const activeSlide = slides[this.activeIndex];
            const activeInfo = activeSlide.querySelector('.tranding-slide-info');
            activeInfo.style.display = 'block'; // Mostrar solo la información del slide activo
        },
    },
  });
  
  // Inicialmente ocultar la información de todos los slides
  document.querySelectorAll('.tranding-slide-info').forEach(info => {
    info.style.display = 'none';
  });
  
  // Mostrar la información del primer slide
  const firstSlide = document.querySelector('.tranding-slide');
  const firstInfo = firstSlide.querySelector('.tranding-slide-info');
  firstInfo.style.display = 'block';
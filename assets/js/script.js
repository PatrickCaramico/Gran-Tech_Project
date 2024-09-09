// Esperar o carregamento completo da página
window.addEventListener('load', () => {
    // Variáveis do Carrossel de Imagens
    let currentImageIndex = 0;
    const sliderImages = document.querySelectorAll('.slider-image');
    const totalSliderImages = sliderImages.length;

    // Função para mostrar a imagem atual
    function showImage(index) {
        // Ocultar todas as imagens
        sliderImages.forEach((image, idx) => {
            image.style.display = (idx === index) ? 'block' : 'none'; // Apenas a imagem atual é exibida
        });
    }

    // Função para mudar a imagem com as setas
    window.changeImage = function(direction) {
        currentImageIndex = (currentImageIndex + direction + totalSliderImages) % totalSliderImages;
        showImage(currentImageIndex);
    };

    // Iniciar mostrando a primeira imagem
    showImage(currentImageIndex);
});

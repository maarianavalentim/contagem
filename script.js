document.addEventListener('DOMContentLoaded', function () {
    // Definir a data do Natal (assumindo que estamos no ano atual)
    const christmasDate = new Date(new Date().getFullYear(), 11, 25).getTime();
  
    // Atualizar o temporizador a cada segundo
    const x = setInterval(function () {
      // Obter a data e hora atuais
      const now = new Date().getTime();
  
      // Calcular a diferença entre a data do Natal e a data atual
      const distance = christmasDate - now;
  
      // Calcular dias, horas, minutos e segundos restantes
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Exibir a contagem regressiva na div com o ID "timer"
      document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // Se a contagem regressiva acabou, exibir uma mensagem
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Feliz Natal!';
      }
    }, 1000);
  });
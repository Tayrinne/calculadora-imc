const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;  
    
    const bmi = (weight * 10000 / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attetion');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Parabéns, você está com peso saudável!';
        value.classList.remove('attetion');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description= 'Cuidado! Você está sobrepeso!';

    } else {
        description= 'Cuidado! Você está com obesidade!';
    }
    
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
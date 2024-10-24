import './style.css'
// src/main.ts

let count: number = 0;

const counterDisplay: HTMLElement | null = document.getElementById('counter');
const incrementButton: HTMLElement | null = document.getElementById('increment');
const decrementButton: HTMLElement | null = document.getElementById('decrement');
const resetButton: HTMLElement | null = document.getElementById('reset');

function updateDisplay(): void {
    if (counterDisplay) {
        counterDisplay.textContent = count.toString();
    }
}

incrementButton?.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton?.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetButton?.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initialize the display
updateDisplay();

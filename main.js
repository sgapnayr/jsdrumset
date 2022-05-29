window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
    if (!audio) return
    audio.play()
}) 

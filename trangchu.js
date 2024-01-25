function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    animateNumber(7, 1000, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('year').innerText = formattedNumber
    })

    animateNumber(100, 50, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('duan').innerText = formattedNumber
    })

    animateNumber(1000, 10, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('khachhang').innerText = formattedNumber
    })
    animateNumber(50, 100, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('doitac').innerText = formattedNumber
    })

})
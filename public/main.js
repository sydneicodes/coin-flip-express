var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
element.addEventListener('click', function(){
const userGuess = this.parentNode.parentNode.childNodes[1].innerText
const coinResult = this.parentNode.parentNode.childNodes[3].innerText
const winOrLose = this.parentNode.parentNode.childNodes[5].innerText
        fetch('results', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'userGuess': userGuess,
            'coinResult': coinResult,
            'winOrLose': winOrLose,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

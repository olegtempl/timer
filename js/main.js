
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){ checkTimer(); }, 500)
}, false);

function checkTimer(){
    // track DOM changes
    document.addEventListener("DOMSubtreeModified", function() {
        // get minutes and secundes data
        let minutes = document.querySelector('#timer-number-value-tmr-minutes');
        let secundes = document.querySelector('#timer-number-value-tmr-secundes');
    
        // if minutes and secundes equals 0
        if(minutes.textContent == '0' && secundes.textContent == '0'){
            // set red color
            let all = document.querySelectorAll('#timer-number-value-tmr-minutes, #timer-number-value-tmr-secundes, #timer-text-tmr-minutes, #timer-text-tmr-secundes');

            all.forEach(function(value){
                value.style.color = 'red';
            });

            // allerw when stop
            console.log('Timer End');
        }
    });
}
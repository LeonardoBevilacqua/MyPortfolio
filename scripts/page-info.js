

const calculate_age = () => { 
    var diff_ms = Date.now() - new Date(1997, 10, 01).getTime();
    var age_dt = new Date(diff_ms); 
  
    document.getElementById('current-age').append(Math.abs(age_dt.getUTCFullYear() - 1970));
}

/* call functions */
calculate_age();
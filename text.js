    // Set date (similar to C's __DATE__ macro)
    document.getElementById('date').textContent = 'Date - ' + new Date().toLocaleDateString();

    const denoms = [500,200,100,50,20,10];

    function getVal(id){ return Math.max(0, parseInt(document.getElementById(id).value) || 0); }

    function updateTotals(){
    const c500 = getVal('count500');
    const c200 = getVal('count200');
    const c100 = getVal('count100');
    const c50  = getVal('count50');
    const c20  = getVal('count20');
    const c10  = getVal('count10');

    const t500 = c500 * 500;
    const t200 = c200 * 200;
    const t100 = c100 * 100;
    const t50  = c50  * 50;
    const t20  = c20  * 20;
    const t10  = c10  * 10;

    document.getElementById('show500Count').textContent = c500;
    document.getElementById('show200Count').textContent = c200;
    document.getElementById('show100Count').textContent = c100;
    document.getElementById('show50Count').textContent = c50;
    document.getElementById('show20Count').textContent = c20;
    document.getElementById('show10Count').textContent = c10;

    document.getElementById('total500').textContent = t500 + ' /-';
    document.getElementById('total200').textContent = t200 + ' /-';
    document.getElementById('total100').textContent = t100 + ' /-';
    document.getElementById('total50').textContent = t50 + ' /-';
    document.getElementById('total20').textContent = t20 + ' /-';
    document.getElementById('total10').textContent = t10 + ' /-';

    const grand = t500 + t200 + t100 + t50 + t20 + t10;
    document.getElementById('grandTotal').textContent = grand + ' /-';

    return grand;
    }

    // Attach live update on input change
    ['count500','count200','count100','count50','count20','count10'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateTotals);
    });

    // Buttons
    document.getElementById('calcBtn').addEventListener('click', (e) => {
        e.preventDefault();
    const total = updateTotals();
    // subtle visual feedback
    const btn = e.currentTarget;
    btn.textContent = 'Calculated: ' + total + ' /-';
      setTimeout(()=> btn.textContent = 'Calculate', 1200);
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        ['count500', 'count200', 'count100', 'count50', 'count20', 'count10'].forEach(id => document.getElementById(id).value = 0);
    updateTotals();
    });

    // init
    updateTotals();

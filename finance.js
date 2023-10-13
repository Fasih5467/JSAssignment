var value = 0;

function income(){
    var income = document.getElementById('In/Ex')
    var amount = document.getElementById('amount')
    var amo = +amount.value;
    value += amo;
    var tr = document.createElement('tr');
    var tbody = document.getElementById('tbody')
    tbody.appendChild(tr)
    var td = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    tr.append(td)
    tr.append(td2)
    tr.append(td3)
    td.innerHTML = income.value
    td2.innerHTML = amount.value
    td3.innerHTML = 'income'
    cls()
    var total = document.getElementById('total')
    total.innerHTML = value
    
    
}

function expense(){
    var expense = document.getElementById('In/Ex')
    var amount = document.getElementById('amount')
    var amo = +amount.value;
        value -= amo;
    var tr = document.createElement('tr');
    var tbody = document.getElementById('tbody')
    tbody.append(tr)
    var td = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    tr.append(td)
    tr.append(td2)
    tr.append(td3)
    td.innerHTML = expense.value
    td2.innerHTML = amount.value
    td3.innerHTML = 'expense'
    cls()
    var total = document.getElementById('total')
    total.innerHTML = value
    
}
function cls(){
    var in_ex = document.getElementById('In/Ex')
    var amount = document.getElementById('amount')
    in_ex.value = ''
    amount.value = ''

}
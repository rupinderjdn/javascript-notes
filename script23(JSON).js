document.getElementById("btn1").addEventListener("click",loadCustomer)

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","customer.json",true)
    // it will work the same way if we are getting our requesdt from a public API
    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            document.getElementById("customer").innerHTML = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `
        }
    }
    xhr.send();
}

// For Customers
document.getElementById("btn2").addEventListener("click",loadCustomers)

function loadCustomers(e){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","customers.json",true);

    xhr.onload=function(){
        if(this.status===200){
            const customers = JSON.parse(this.responseText)
            let output=''
            customers.forEach((customer)=>{
                output+= `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `
            })
            document.getElementById("customers").innerHTML = output
        }
    }
    xhr.send()
}
const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}
const displayPhones = phones => {
        // step1: get element
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container cards before search new phone container cards
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone)
        //step2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        // step3: get innerHTML
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" />
           </figure>
            <div class="card-body items-center text-center">
             <h2 class="card-title">${phone.phone_name}</h2>
               <p>${phone.slug}</p>
             <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
        // step4: appendChild
        phoneContainer.appendChild(phoneCard);
    });
}

const searchHandle = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}

loadPhone()

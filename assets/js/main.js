const ticketsCard = [
  {
    city: "New York",
    date: "Fri 27 Nov 2016",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam mollitia quod molestiae cupiditate accusantium adipisci libero distinctio nesciunt ipsa iste, quibusdam eveniet deserunt rerum autem! Fugiat a iste reprehenderit?",
    src: "https://www.w3schools.com/w3images/newyork.jpg"
  },
  {
    city: "Paris",
    date: "Sat 28 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: "https://www.w3schools.com/w3images/paris.jpg"
  },
  {
    city: "San Francisco",
    date: "Sun 29 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: "https://www.w3schools.com/w3images/sanfran.jpg"
  },
  {
    city: "San Francisco",
    date: "Sun 29 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: "https://www.w3schools.com/w3images/sanfran.jpg"
  },
];

// Khi website tải xong thì sẽ hiển thị tickets card
document.addEventListener("DOMContentLoaded", function() {
    renderTickets();
});

function renderTickets() {
    let html = "";

    for (let i = 0; i < ticketsCard .length; i++) {
        const ticket = ticketsCard  [i];
        
        html += `
            <div class="col l-3 m-4 c-12">
                <li class="tour-ticket-item">
                    <img src="${ticket.src}" alt="New York">
                    <div class="wrap">
                        <h2 class="item-title">${ticket.city}</h2>
                        <p class="item-time">${ticket.date}</p>
                        <p class="item-desc text-ellipsis"
                            title="${ticket.description}">${ticket.description}</p>
                        <button class="wrap-btn btn">Buy Tickets</button>
                    </div>
                </li>
            </div>
        `
    }

    const ticketProducts = document.querySelector("#tour-ticket-list");
    
    ticketProducts.innerHTML = html;
}
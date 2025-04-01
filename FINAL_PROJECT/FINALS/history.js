document.addEventListener("DOMContentLoaded", () => {
    const paymentHistory = [
        { date: "2025-03-01", items: "Pikachu Plush, Pokéball", image: "pikachu-removebg-preview.png", amount: "$25.99", status: "Completed" },
        { date: "2025-03-05", items: "Charmander Keychain", image: "charmander.png", amount: "$9.99", status: "Completed" },
        { date: "2025-03-10", items: "Bulbasaur T-Shirt", image: "bulbasaur.png", amount: "$19.99", status: "Pending" },
        { date: "2025-03-15", items: "Snorlax Mug", image: "snorlax.png", amount: "$12.49", status: "Completed" },
        { date: "2025-03-20", items: "Jigglypuff Hat", image: "jigglypuff.png", amount: "$14.99", status: "Completed" },
        { date: "2025-03-22", items: "Eevee Backpack", image: "eevee.png", amount: "$34.99", status: "Pending" },
        { date: "2025-03-25", items: "Pokédex Notebook", image: "pokedex.png", amount: "$8.99", status: "Completed" },
        { date: "2025-03-28", items: "Team Rocket Hoodie", image: "teamrocket.png", amount: "$29.99", status: "Completed" },
        { date: "2025-03-30", items: "Pokémon Card Deck", image: "pokemoncard.png", amount: "$24.99", status: "Pending" },
        { date: "2025-04-01", items: "Squirtle Water Bottle", image: "squirtle.png", amount: "$11.49", status: "Completed" },
        { date: "2025-04-03", items: "Meowth Coin Bank", image: "meowth.png", amount: "$22.79", status: "Pending" },
        { date: "2025-04-05", items: "Lapras Beach Towel", image: "lapras.png", amount: "$18.50", status: "Completed" }
    ];

    const gridContainer = document.getElementById("payment-history-grid");

    paymentHistory.forEach(entry => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.innerHTML = `
            <img src="${entry.image}" alt="${entry.items}">
            <div class="item-details">
                <h3>${entry.items}</h3>
                <p>${entry.amount}</p>
            </div>
            <div class="hover-details">
                <p>Date: ${entry.date}</p>
                <p>Status: ${entry.status}</p>
            </div>
        `;
        gridContainer.appendChild(gridItem);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const sidebar = document.getElementById("sideBar");
    const closeBtn = document.getElementById("close");

    burger.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && event.target !== burger) {
            sidebar.classList.remove("active");
        }
    });
});


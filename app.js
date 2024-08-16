document.getElementById("search-btn").addEventListener("click", () => {
    const word = document.getElementById("search-box").value;
    if (word) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) =>
            response.json())
            .then((data) => {
                console.log("[data]", data);
                const definition = data[0].meanings[0].definitions[0].definition;

                document.getElementById("definition").innerText = definition;
            })
            .catch((error) => {
                document.getElementById("definition").innerText = "Word not found";
                console.log("Error fetching the defintion", error);

            });
    }
    else {
        document.getElementById("definition").innerText = "Please enter a word";
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const arrayDisplay = document.getElementById("array-display");
    const generateButton = document.getElementById("generate-btn");
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const searchResult = document.getElementById("search-result");

    let currentArray = [];

    function generateRandomArray() {
        const array = [];
        const size = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        return array;
    }

    function displayArray(array) {
        arrayDisplay.textContent = JSON.stringify(array);
    }

    function studentSearch(array, target) {
        let left = 0;
        let right = array.length - 1;
    
        while (left <= right) {
            let mid = Math.floor ((left + right) / 2);
            if (array[mid] === target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return -1;
    }
    

    generateButton.addEventListener("click", function () {
        currentArray = generateRandomArray();
        displayArray(currentArray);
        searchResult.textContent = "Result will appear here";
        searchInput.value = "";
    });

    searchButton.addEventListener("click", function () {
        const target = parseInt(searchInput.value, 10);
        if (isNaN(target)) {
            searchResult.textContent = "Please enter a valid number.";
            return;
        }

        const index = studentSearch(currentArray, target);

        if (index !== -1) {
            searchResult.textContent = `Item found at index ${index}`;
        } else {
            searchResult.textContent = "Item not found";
        }
    });

    // Initial setup
    currentArray = generateRandomArray();
    displayArray(currentArray);
});

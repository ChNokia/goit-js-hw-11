'use strict'

export function fetchData(url = BASE_URL, options = {}) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                return new Error("Error!");
            }
            return response.json();
        });
}
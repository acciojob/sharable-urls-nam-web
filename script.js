// your code here
function updateUrl(event) {
            event.preventDefault(); // Prevent form submission
            const n = document.getElementById('name').value;
            const y = document.getElementById('year').value;
			const queryString = `?name=${encodeURIComponent(n)}&year=${encodeURIComponent(y)}`;
			const urlElement = document.getElementById('url');
            urlElement.textContent = `https://localhost:8080/${queryString}`;
			
            
            
        }

        window.onload = function() {
            // Add event listener to the submit button
            document.getElementById('button').addEventListener('click', updateUrl);
        }
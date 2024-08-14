document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = '1234';

    // Event listener for the password submission
    document.getElementById('password-submit').addEventListener('click', function() {
        const enteredPassword = document.getElementById('password-input').value;
        const errorMessage = document.getElementById('error-message');
        const settingsSection = document.getElementById('settings');
        const passwordSection = document.getElementById('password-section');

        if (enteredPassword === correctPassword) {
            // Hide the password section and show the settings section
            passwordSection.classList.add('hidden');
            settingsSection.classList.remove('hidden');
        } else {
            // Show error message
            errorMessage.classList.remove('hidden');
        }
    });

    // Event listener for applying changes to the layout
    document.getElementById('apply-changes').addEventListener('click', function() {
        const titleText = document.getElementById('title-text').value;
        const buttonPosition = document.getElementById('button-position').value;

        // Apply the changes (this would be updated later to save changes to a database)
        alert(`Changes applied: \nTitle: ${titleText} \nButton Position: ${buttonPosition}px`);
    });
});

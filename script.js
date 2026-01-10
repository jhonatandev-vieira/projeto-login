function updateDateTime() {
    const now = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    document.getElementById('datetime').textContent = formattedDate;
}

updateDateTime();
setInterval(updateDateTime, 60000);

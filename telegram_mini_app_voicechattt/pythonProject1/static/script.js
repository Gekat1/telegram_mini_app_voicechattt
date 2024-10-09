function createGroupChat() {
    const groupName = document.getElementById("groupName").value;
    if (groupName) {
        // Отправляем запрос на сервер для создания группы
        fetch("/create_group_chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: groupName })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Группа '${groupName}' успешно создана!`);
                document.getElementById("groupName").value = '';
                loadGroupChats();
            } else {
                alert("Ошибка при создании группы.");
            }
        });
    } else {
        alert("Пожалуйста, введите название группы.");
    }
}

function startVoiceChat() {
    alert("Голосовой чат запущен! Подключайтесь к группе в Telegram.");
}

function loadGroupChats() {
    // Здесь можно реализовать логику загрузки и отображения групповых чатов
}

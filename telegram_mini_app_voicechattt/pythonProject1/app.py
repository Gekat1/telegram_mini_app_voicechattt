from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Хранилище для групповых чатов
group_chats = []

# Маршрут для главной страницы
@app.route('/')
def index():
    return render_template('index.html')

# Маршрут для создания группового чата
@app.route('/create_group_chat', methods=['POST'])
def create_group_chat():
    data = request.get_json()
    group_name = data.get("name")
    if group_name:
        group_chats.append(group_name)
        return jsonify({"success": True})
    return jsonify({"success": False})

# Запуск приложения
if __name__ == '__main__':
    app.run(debug=True)

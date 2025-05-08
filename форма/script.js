function generateTitlePage() {
    const kafedra = document.getElementById('kafedra').value;
    const group = document.getElementById('group').value;
    const teacher = document.getElementById('teacher').value;
    const student = document.getElementById('student').value;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>Титульный лист</title>
        <style>
          body {
            font-family: Times New Roman, serif;
            text-align: center;
            padding-top: 100px;
          }
          .title {
            margin-top: 200px;
            font-size: 20px;
          }
          .footer {
            margin-top: 150px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div>Министерство образования и науки РФ</div>
        <div>Университет ...</div>
        <div>Кафедра: <strong>${kafedra}</strong></div>
  
        <div class="title">
          <h2>Титульный лист</h2>
          <p>Лабораторная работа</p>
        </div>
  
        <div class="footer">
          <div>Студент: <u>${student}</u></div>
          <div>Группа: <u>${group}</u></div>
          <br>
          <div>Преподаватель: <u>${teacher}</u></div>
          <br><br>
          <div>Город, 2025</div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

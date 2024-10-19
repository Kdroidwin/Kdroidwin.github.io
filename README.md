<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VitePress Style</title>
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@latest/dist/tailwind.min.css">
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    header {
      background-color: #42b883;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    nav {
      margin-top: 1rem;
    }
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>VitePress風サイト</h1>
  </header>
  <nav>
    <ul class="flex justify-center space-x-4">
      <li><a href="#home" class="text-green-500">Home</a></li>
      <li><a href="#docs" class="text-green-500">Docs</a></li>
      <li><a href="#about" class="text-green-500">About</a></li>
    </ul>
  </nav>
  <main>
    <section id="home">
      <h2>Home</h2>
      <p>Welcome to VitePress風のホームページです。</p>
    </section>
    <section id="docs">
      <h2>Docs</h2>
      <p>VitePressのようにシンプルなドキュメントサイトを作成できます。</p>
    </section>
    <section id="about">
      <h2>About</h2>
      <p>これはVitePressのデザインを模倣したサイトです。</p>
    </section>
  </main>
</body>
</html>

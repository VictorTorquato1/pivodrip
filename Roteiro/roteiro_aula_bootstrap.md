# Roteiro de aula: Introdução ao Bootstrap com HTML, CSS e um site simples

## 1. Objetivo da aula

Nesta aula, os alunos vão conhecer o Bootstrap e aprender como ele pode ser usado para acelerar o desenvolvimento de páginas web com HTML e CSS. O foco é entender a ideia principal da biblioteca, saber como adicioná-la ao projeto e construir um site simples com uma estrutura moderna, responsiva e fácil de entender.

Ao final da aula, os alunos deverão conseguir:

1. Explicar o que é o Bootstrap.
2. Adicionar o Bootstrap em um projeto HTML.
3. Usar classes prontas para organizar layout, menus, carrossel, tabela, formulário e galeria.
4. Combinar Bootstrap com CSS próprio para personalizar a interface.
5. Criar um pequeno site com três páginas:
   1. `index.html`, com carrossel e galeria de fotos.
   2. `produtos.html`, com tabela de produtos.
   3. `contato.html`, com formulário.

---

## 2. O que é o Bootstrap

O Bootstrap é uma biblioteca front end que oferece componentes prontos, classes de estilo e um sistema de organização de layout chamado grid system. Ele facilita a criação de interfaces modernas, responsivas e bem organizadas.

Na prática, isso significa que o desenvolvedor não precisa começar tudo do zero. Em vez de escrever muitos estilos em CSS manualmente, ele pode usar classes prontas do Bootstrap para criar botões, menus, cards, formulários, tabelas, carrosséis e muito mais.

### 2.1. Por que usar Bootstrap

O Bootstrap ajuda porque:

1. Economiza tempo.
2. Deixa o layout mais consistente.
3. Facilita a criação de páginas responsivas.
4. Oferece componentes prontos e confiáveis.
5. Reduz a quantidade de código CSS necessário.

### 2.2. O que o Bootstrap não substitui

O Bootstrap não substitui o HTML, nem o CSS. Ele complementa o trabalho do desenvolvedor. O HTML continua sendo usado para estruturar o conteúdo, o CSS para personalizar a aparência, e o Bootstrap para acelerar a criação da interface.

---

## 3. Como o Bootstrap funciona

O Bootstrap funciona por meio de classes que são adicionadas diretamente nos elementos HTML. Essas classes já vêm com estilos prontos.

Por exemplo, um botão comum em HTML pode ser transformado em um botão estilizado apenas com uma classe do Bootstrap:

```html
<button class="btn btn-primary">Clique aqui</button>
```

Nesse exemplo:

1. `btn` indica que o elemento será tratado como botão do Bootstrap.
2. `btn-primary` define a cor principal do botão.

O mesmo acontece com menus, tabelas, formulários, colunas e outros componentes.

---

## 4. Estrutura do projeto

Para esta aula, vamos criar uma estrutura simples no Codespace do GitHub.

### 4.1. Pastas e arquivos

Crie a seguinte organização:

```txt
meu-site-bootstrap/
│
├── index.html
├── produtos.html
├── contato.html
├── css/
│   └── style.css
└── img/
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── foto4.jpg
    ├── foto5.jpg
    ├── foto6.jpg
    ├── banner1.jpg
    ├── banner2.jpg
    └── banner3.jpg
```

### 4.2. Observação importante sobre as imagens

As imagens podem ser colocadas dentro da pasta `img`. Para a aula, o professor pode usar imagens próprias, imagens do acervo da instituição ou imagens livres de uso. O importante é que os nomes usados no código sejam iguais aos nomes reais dos arquivos.

---

## 5. Como adicionar o Bootstrap ao projeto

O Bootstrap pode ser adicionado por CDN, que é a forma mais simples para iniciantes.

No arquivo HTML, dentro da tag `<head>`, adicionamos o link do CSS do Bootstrap. Antes do fechamento da tag `<body>`, adicionamos o script do Bootstrap, que é necessário para componentes interativos como o carrossel e o menu responsivo.

### 5.1. Exemplo de inclusão do Bootstrap

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
>
```

E no final da página:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### 5.2. O que cada parte faz

1. O link do CSS carrega os estilos do Bootstrap.
2. O script do Bootstrap ativa os componentes interativos.
3. O arquivo `bootstrap.bundle.min.js` já traz recursos necessários para o funcionamento de menus e carrosséis.

---

## 6. Explicação da estratégia da aula

Nesta aula, o site será construído com três partes principais:

1. `index.html`, com estrutura inicial, menu, carrossel e galeria.
2. `produtos.html`, com tabela organizada.
3. `contato.html`, com formulário simples.

Todas as páginas terão a mesma identidade visual, para que o aluno perceba a importância da padronização no desenvolvimento web.

Usaremos:

1. HTML para estruturar o conteúdo.
2. Bootstrap para facilitar layout e componentes.
3. CSS próprio para detalhes visuais como cores, sombras, animações e efeitos de hover.

---

## 7. Página principal, `index.html`

A página principal terá:

1. Header com título.
2. Navbar horizontal com links para as três páginas.
3. Main com um carrossel de imagens.
4. Galeria de fotos com legenda.
5. Footer com informações finais.

### 7.1. Código completo do `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap na Prática</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="topo">
    <div class="container py-4">
      <h1 class="m-0">Bootstrap na Prática</h1>
      <p class="m-0">Aprendendo HTML, CSS e Bootstrap com um site simples e moderno.</p>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg navbar-dark menu-principal">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">Meu Site</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Alternar navegação">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuNavegacao">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="produtos.html">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contato.html">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container my-5">

    <section class="mb-5">
      <h2 class="titulo-secao mb-4">Carrossel de imagens</h2>

      <div id="carrosselPrincipal" class="carousel slide shadow-sm rounded-4 overflow-hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carrosselPrincipal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carrosselPrincipal" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carrosselPrincipal" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/banner1.jpg" class="d-block w-100 imagem-carrossel" alt="Imagem 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>Aprendizado com prática</h5>
              <p>Construindo interfaces com organização e simplicidade.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="img/banner2.jpg" class="d-block w-100 imagem-carrossel" alt="Imagem 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Layout responsivo</h5>
              <p>O Bootstrap ajuda a adaptar a página a diferentes telas.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="img/banner3.jpg" class="d-block w-100 imagem-carrossel" alt="Imagem 3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Interface moderna</h5>
              <p>Um visual bonito, simples e funcional para os alunos.</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carrosselPrincipal" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carrosselPrincipal" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>

    <section>
      <h2 class="titulo-secao mb-4">Galeria de fotos</h2>

      <div class="row g-4">
        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto1.jpg" alt="Foto 1" class="img-fluid">
            <figcaption>Projeto visual moderno e limpo.</figcaption>
          </figure>
        </div>

        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto2.jpg" alt="Foto 2" class="img-fluid">
            <figcaption>Uso de componentes prontos do Bootstrap.</figcaption>
          </figure>
        </div>

        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto3.jpg" alt="Foto 3" class="img-fluid">
            <figcaption>Responsividade com grid system.</figcaption>
          </figure>
        </div>

        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto4.jpg" alt="Foto 4" class="img-fluid">
            <figcaption>Navegação simples e organizada.</figcaption>
          </figure>
        </div>

        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto5.jpg" alt="Foto 5" class="img-fluid">
            <figcaption>Boas práticas na estrutura do conteúdo.</figcaption>
          </figure>
        </div>

        <div class="col-sm-6 col-lg-4">
          <figure class="card-galeria">
            <img src="img/foto6.jpg" alt="Foto 6" class="img-fluid">
            <figcaption>Interface agradável para o usuário.</figcaption>
          </figure>
        </div>
      </div>
    </section>

  </main>

  <footer class="rodape">
    <div class="container py-4 text-center">
      <p class="m-0">Desenvolvido para fins didáticos, com HTML, CSS e Bootstrap.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 7.2. Explicação dos principais trechos do código

#### a) `container`
A classe `container` cria uma área centralizada com margens automáticas e largura responsiva.

#### b) `navbar`
O Bootstrap oferece uma barra de navegação pronta. Ela pode ser expandida, recolhida e adaptada para telas menores.

#### c) `carousel`
O carrossel é um componente interativo que permite exibir várias imagens em sequência.

#### d) `row` e `col`
Essas classes fazem parte do grid system. A `row` organiza a linha e as `col-sm-6` ou `col-lg-4` definem como os elementos se distribuem em diferentes tamanhos de tela.

#### e) `figure` e `figcaption`
Esses elementos semânticos ajudam a organizar imagem e legenda.

---

## 8. Página de produtos, `produtos.html`

Esta página vai demonstrar como apresentar dados em formato de tabela de maneira elegante e legível.

### 8.1. Código completo do `produtos.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Produtos</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="topo">
    <div class="container py-4">
      <h1 class="m-0">Bootstrap na Prática</h1>
      <p class="m-0">Tabela de produtos com layout limpo e organizado.</p>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg navbar-dark menu-principal">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">Meu Site</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Alternar navegação">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuNavegacao">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="produtos.html">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contato.html">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container my-5">
    <section>
      <h2 class="titulo-secao mb-4">Tabela de produtos</h2>

      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle tabela-personalizada">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Produto</th>
              <th scope="col">Categoria</th>
              <th scope="col">Preço</th>
              <th scope="col">Estoque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Caderno universitário</td>
              <td>Papelaria</td>
              <td>R$ 24,90</td>
              <td>35</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Caneta esferográfica</td>
              <td>Papelaria</td>
              <td>R$ 3,50</td>
              <td>120</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Fone de ouvido</td>
              <td>Eletrônicos</td>
              <td>R$ 89,90</td>
              <td>18</td>
            </tr>
            <tr>
              <td>004</td>
              <td>Mouse sem fio</td>
              <td>Eletrônicos</td>
              <td>R$ 74,90</td>
              <td>22</td>
            </tr>
            <tr>
              <td>005</td>
              <td>Garrafa térmica</td>
              <td>Acessórios</td>
              <td>R$ 59,90</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer class="rodape">
    <div class="container py-4 text-center">
      <p class="m-0">Tabela criada com classes do Bootstrap e pequenos ajustes personalizados.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 8.2. Explicação da tabela

1. `table` aplica o estilo básico de tabela do Bootstrap.
2. `table-striped` adiciona linhas alternadas.
3. `table-hover` destaca a linha quando o mouse passa por cima.
4. `table-responsive` permite que a tabela se adapte melhor em telas pequenas.

---

## 9. Página de formulário, `contato.html`

Nesta página, os alunos irão conhecer os principais componentes de formulário do Bootstrap.

### 9.1. Código completo do `contato.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="topo">
    <div class="container py-4">
      <h1 class="m-0">Bootstrap na Prática</h1>
      <p class="m-0">Formulário simples para aprender os fundamentos.</p>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg navbar-dark menu-principal">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">Meu Site</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Alternar navegação">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuNavegacao">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="produtos.html">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="contato.html">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container my-5">
    <section class="row justify-content-center">
      <div class="col-lg-8">
        <h2 class="titulo-secao mb-4">Formulário de contato</h2>

        <form class="card-form p-4 p-md-5">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome completo</label>
            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome completo">
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com">
          </div>

          <div class="mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <input type="tel" class="form-control" id="telefone" placeholder="(00) 00000-0000">
          </div>

          <div class="mb-3">
            <label for="assunto" class="form-label">Assunto</label>
            <select class="form-select" id="assunto">
              <option selected>Selecione uma opção</option>
              <option value="duvida">Dúvida</option>
              <option value="suporte">Suporte</option>
              <option value="orcamento">Orçamento</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea class="form-control" id="mensagem" rows="5" placeholder="Escreva sua mensagem"></textarea>
          </div>

          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" value="" id="confirmacao">
            <label class="form-check-label" for="confirmacao">
              Concordo em receber retorno por e-mail.
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-lg">Enviar mensagem</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="rodape">
    <div class="container py-4 text-center">
      <p class="m-0">Formulário construído com os principais componentes do Bootstrap.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 9.2. Explicação dos principais elementos do formulário

1. `form-label` organiza os rótulos.
2. `form-control` estiliza campos de texto, e-mail, telefone e textarea.
3. `form-select` estiliza listas suspensas.
4. `form-check` organiza o campo de confirmação.
5. `btn btn-primary btn-lg` cria um botão maior e visualmente destacado.

---

## 10. CSS personalizado, `css/style.css`

O Bootstrap oferece uma base pronta, mas o CSS próprio serve para deixar o projeto com identidade visual.

### 10.1. Código completo do `style.css`

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #f4f7fb;
  color: #1f2937;
}

.topo {
  background: linear-gradient(135deg, #0f172a, #1d4ed8);
  color: #ffffff;
}

.menu-principal {
  background: #111827;
}

.titulo-secao {
  font-weight: 700;
  color: #0f172a;
}

.imagem-carrossel {
  height: 500px;
  object-fit: cover;
}

.card-galeria {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0;
}

.card-galeria img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.card-galeria figcaption {
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  background: #ffffff;
}

.card-galeria:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.14);
}

.tabela-personalizada {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.card-form {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.rodape {
  background: #111827;
  color: #ffffff;
  margin-top: 40px;
}

.btn-primary {
  background: #2563eb;
  border: none;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.form-control,
.form-select {
  border-radius: 12px;
  padding: 0.85rem 1rem;
}

@media (max-width: 768px) {
  .imagem-carrossel {
    height: 280px;
  }
}
```

### 10.2. Explicação do CSS

1. `body` define a fonte, a cor do texto e o fundo da página.
2. `.topo` cria o cabeçalho com gradiente.
3. `.menu-principal` define a cor da navegação.
4. `.card-galeria` cria o efeito de card na galeria.
5. `transform` e `box-shadow` criam o efeito de hover.
6. `.imagem-carrossel` controla a altura das imagens.
7. A regra com `@media` melhora a experiência em celulares.

---

## 11. Como funciona a interação ao passar o mouse na galeria

A interação simples da galeria foi criada com CSS, usando o seletor `:hover`.

Exemplo:

```css
.card-galeria:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.14);
}
```

### 11.1. O que acontece aqui

1. Quando o mouse passa sobre o card, ele sobe um pouco.
2. A sombra aumenta.
3. O usuário percebe visualmente que o elemento ficou destacado.

Essa é uma forma simples e elegante de criar interatividade sem usar JavaScript.

---

## 12. Conclusão

O Bootstrap é uma excelente ferramenta para quem está começando no desenvolvimento web, porque permite criar páginas bonitas, organizadas e responsivas com menos esforço. Neste projeto, os alunos aprendem não apenas a usar a biblioteca, mas também a combinar Bootstrap com HTML e CSS para construir uma interface moderna e funcional.

O mais importante é entender que o Bootstrap não substitui o conhecimento de estrutura e estilo. Ele serve como apoio para acelerar a criação e facilitar a padronização dos componentes.

---
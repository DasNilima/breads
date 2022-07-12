const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
        <link rel="stylesheet" href="/main.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1><a href="/breads">BreadCRUD</a></h1>
        </header>
        <div className="container mt-3">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

module.exports = Default

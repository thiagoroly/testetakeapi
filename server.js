const app = require('./index');
port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {throw err}
    console.log('Teste Take API running in ' + port);
})

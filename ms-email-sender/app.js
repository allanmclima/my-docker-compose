const express = require('express');
const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;

    console.log("Simulando envio de email:");
    console.log(`Para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Conteúdo: ${body}`);

    res.json({
        success: true,
        message: 'Email enviado com sucesso (simulado)!',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'Email service is running!' });
});

const PORT = 5001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Email service running on port ${PORT}`);
});
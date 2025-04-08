# maikar
 ```
backend/
│
├── app.js
├── .env
├── package.json
│
├── config/
│   └── db.js                # Conexão com o banco MariaDB
│
├── controllers/
│   ├── auth.controller.js
│   ├── car.controller.js
│   ├── maintenance.controller.js
│   ├── part.controller.js
│   └── service.controller.js
│
├── middlewares/
│   └── auth.middleware.js   # Verifica JWT
│
├── models/
│   ├── user.model.js
│   ├── car.model.js
│   ├── maintenance.model.js
│   ├── part.model.js
│   └── service.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── car.routes.js
│   ├── maintenance.routes.js
│   ├── part.routes.js
│   └── service.routes.js
│
└── utils/
    └── generateToken.js     # Função para gerar JWT
```

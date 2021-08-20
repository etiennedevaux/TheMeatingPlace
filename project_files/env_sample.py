import os

os.environ.setdefault("MONGO_URI", "mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTERNAME].gwvhn.mongodb.net/cokkery_book?retryWrites=true&w=majority")
os.environ.setdefault("IP", "0.0.0.0")
os.environ.setdefault("PORT", "5000")
os.environ.setdefault("SECRET_KEY", "[SECRET_KEY]")
os.environ.setdefault("MONGO_DBNAME", "cookery_book")
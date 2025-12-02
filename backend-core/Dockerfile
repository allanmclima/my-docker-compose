FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requiriments.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
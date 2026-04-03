## 2026-03-23

<br><br>

# Redis 高併發實作練習
## 日誌
最近開始考慮系統中的高併發問題，在不使用悲觀鎖以及樂觀鎖的情況下，redis是在處理極端高併發下的優解；故來練習實作和RDB持久化和AOF持久化。

## 安裝redis
首先需要docker接著執行:

```bash
docker run --name redis-practice -p 6379:6379 -d redis:latest
```


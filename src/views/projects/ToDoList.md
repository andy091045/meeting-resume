## 2026-05-26

<br><br>

# ToDoList - Windows 桌面待辦清單工具

![ToDoList demo](/meeting-resume/img/todolist-demo.png)

ToDoList 是一個使用 Python 製作的 Windows 桌面待辦清單工具，目標是把每天固定要做的事情、臨時新增的事項，以及需要定時開啟的網址或檔案整合在同一個小型桌面視窗中。程式啟動後會讀取 `tasks.json`，依照完成狀態顯示當日任務；勾選完成後任務會從清單消失，當天全部完成後程式會自動關閉。

<br><br>

## 專案動機

這個工具是為了讓日常工作與學習任務更接近「開機後自然出現的提醒清單」。相比單純記錄待辦事項，ToDoList 更重視執行時機：有些任務只需要被看見，有些任務則需要在特定時間自動開啟網站、PDF、批次檔或應用程式，降低忘記啟動工作流程的機率。

<br><br>

## 主要功能

- **固定任務管理**：透過 `tasks.json` 維護每日固定任務。
- **定時任務**：任務 `type` 設為 `timed` 後，可使用 `due_time` 指定完成時間。
- **無時間限制任務**：任務 `type` 設為 `untimed`，適合放置當天任意時間完成的事項。
- **今日臨時任務**：透過畫面上的 `+` 新增當日任務，僅保存在今日狀態，不會污染固定清單。
- **自動啟動資源**：任務可設定 `launch`，支援網址、PDF、一般文件、`.cmd`、`.bat` 與 `.exe`。
- **每日狀態保存**：使用 `todo_state.json` 記錄當日完成狀態、已啟動項目與臨時任務。
- **Windows 開機啟動**：打包成 EXE 後，第一次執行會自動註冊到目前使用者的 Windows Run Registry。
- **可調整視窗**：桌面視窗可拖曳調整大小，方便依螢幕空間放置。

<br><br>

## 技術重點

- **Python + Tkinter**：使用標準 GUI 工具建立桌面介面，降低外部相依性。
- **JSON 設定檔設計**：將任務資料與程式邏輯分離，方便直接編輯與備份。
- **每日狀態切換**：以日期作為 state key，跨日後自動建立新的完成狀態。
- **資源啟動判斷**：依照 `launch` 內容判斷要使用瀏覽器、`cmd.exe`、`subprocess.Popen` 或 Windows `os.startfile`。
- **PyInstaller 打包**：提供 `build_exe.ps1` 將專案打包成單一 Windows 執行檔。
- **Windows Registry 整合**：使用 `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run` 實作使用者層級開機啟動。

<br><br>

## 任務設定範例

```json
{
  "tasks": [
    {
      "id": "open-mail",
      "title": "檢查重要信件",
      "type": "timed",
      "due_time": "09:30",
      "launch": "https://mail.google.com"
    },
    {
      "id": "read-pdf",
      "title": "閱讀文件",
      "type": "timed",
      "due_time": "14:00",
      "launch": "C:\\Users\\User\\Desktop\\file.pdf"
    },
    {
      "id": "backup",
      "title": "執行備份",
      "type": "untimed",
      "launch": "C:\\Tools\\backup.exe"
    }
  ]
}
```

<br><br>

## 執行與打包

開發時可直接執行：

```powershell
.\run_dev.ps1
```

或使用 Python 啟動：

```powershell
python .\main.py
```

打包 Windows EXE：

```powershell
.\build_exe.ps1
```

完成後會產生：

```text
dist\ToDoList.exe
```

<br><br>

## 成果紀錄

這個專案把「待辦清單」和「工作啟動器」結合在一起，讓每日固定流程可以在 Windows 桌面環境中自然出現。它不只是列出任務，也能在指定時間主動開啟對應資源，適合用來管理每天固定的學習、閱讀、檢查與自動化工作。

<br><br>
## 2025-11-24 更新

想研究一個可以在個人電腦上協助一些簡單任務的AI Agent系統。在這套系統中預計在不同的Agent使用適合的AI model。
並且能夠協助完成每日代辦清單，記帳等簡單工作，在需要的時候幫我分析相關的問題如:錢都花在哪了等等。<br><br>

### 目前規劃

1. 評估4070super能夠用的模型大小(幾B)<span style="margin-left:10px;color: green;">V</span>
2. 成功運行模型
3. 與ai agent框架整合並確立可以使用(autogen)
4. 開始建立相關的agent與對應的tool

<br><br>

### 評估4070super能夠用的模型大小
在網路上的資料顯示目前跑7b/13b左右是較為適合的

![4070super_for_LLM](/meeting-resume/img/RTX4070_for_LLM.png)

<br><br>

### 評估4070super能夠用的模型大小
在請AI幫忙調查目前大小符合並且有支援function-calling的模型目前有兩個推薦選擇: Qwen-7B, Mistral-7B-Instruct-v0.3，
目前先暫且選擇Qwen-7B當實驗對象。
<br><br>

### 閒聊
光搞md圖片顯示就搞了好久結果問題出在ASCII跟U+002D字元問題上 QAQ，睡覺
## 交作業流程
1. 開新的一個 branch: `git branch week1`
2. 切換到新開的 branch: `git checkout week1`
3. 確認是否切到新的 branch: `git status`
4. 寫作業: `Coding...`
5. 更新檔案內容: `git commit -am "add"`
6. 把 week1 這個分支的內容，推向 origin 這個位置: `git push origin week1`
7. 到 github 按下 Compare & pull request
8. 填上說明後按下 Create pull request
9. 到 Lidemy/homeworks-3rd
10. 到 Issues 按下 New issue
11. 標題填入[Week1]，內容貼上網址 //標題有規範，開頭需要大寫！
12. 按下 Submit new issue
13. Waiting //等Huli check, merge pull request, delete branch, close issue
14. 切回本來的 branch: `git checkout master`
15. 將 github 的內容拉到本機，再 merge 起來: `git pull origin master // git pull = git fetch + git merge`
16. 刪掉本機端的 branch week1: `git branch -d week1`
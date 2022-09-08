# [Usar a mesma keystore](https://stackoverflow.com/questions/5488339/how-can-i-find-and-run-the-keytool)

Como foi feito a alteracao de pacote, foi pedido ao rodar o preview (eas build -p android --profile preview) uma nova keystore, mas preferi adicionar a que já estava, se não daria probelma ao publicar o .aab

n -> para náo gerar uma nova

Localizacao da keystore: C:\Users\angel\.android\debug.keystore

![image](https://user-images.githubusercontent.com/112843557/189023612-d5eefb69-7dc9-43b3-a452-ae149abeca46.png)

saber o alias

```
 keytool -list -v -keystore c:\Users\angel\.android\debug.keystore
 Informe a senha da área de armazenamento de chaves:  _*android*_
```
![image](https://user-images.githubusercontent.com/112843557/189024014-ccb442dc-a6c7-4cce-9955-8cbde4003010.png)

responder segundo o print, a senha e fora o alias inseri android, que é o padrão

![image](https://user-images.githubusercontent.com/112843557/189023229-a170ba3e-1420-414a-b8a8-695c68462551.png)

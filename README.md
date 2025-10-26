# Example of Next.js project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!---End place for the badge -->

---

## 📘 Introducció teòrica

**GitHub Actions** és una eina d’automatització integrada dins de GitHub que permet definir *workflows* per a executar tasques automàticament cada vegada que ocorre un esdeveniment en el repositori (com ara un *push*, una *pull request* o un *merge*).  
Els *workflows* estan definits mitjançant fitxers YAML dins de `.github/workflows/` i poden contindre *jobs*, que al seu torn inclouen *steps* (passos) que executen accions concretes, com ara:

- Comprovar el codi amb un **linter**
- Executar **tests automàtics**
- **Desplegar** el projecte en un servidor o en una plataforma com **Vercel**

---

## ⚙️ Configuració inicial

Inicialice el repositori i munte els arxius ja donats:

![Captura de pantalla del projecte](captures/1.png)
![Captura de pantalla del projecte](captures/2.png)

En la carpeta `.github/workflows` cree el arxiu `.yml`:

![Captura de pantalla del projecte](captures/3.png)

---

## 🧩 Linter_job

Aquest *job* s’encarrega d’executar el **linter** per comprovar que la sintaxi dels fitxers JavaScript és correcta.

![Captura de pantalla del projecte](captures/4.png)
![Captura de pantalla del projecte](captures/5.png)

Dona error per una sèrie de comilles i una variable que no és `var`, com he posat:

![Captura de pantalla del projecte](captures/6.png)
![Captura de pantalla del projecte](captures/7.png)
![Captura de pantalla del projecte](captures/8.png)
![Captura de pantalla del projecte](captures/9.png)

Una vegada arreglat es veu així el *job* completat:

![Captura de pantalla del projecte](captures/10.png)

---

## 🧪 Cypress_job

El segon *job* és el **Cypress_job**, que executa els tests de Cypress per validar el comportament de l’aplicació.  
El resultat es desa en un fitxer `result.txt` que s’utilitza posteriorment per a generar el *badge*.

![Captura de pantalla del projecte](captures/11.png)
![Captura de pantalla del projecte](captures/12.png)
![Captura de pantalla del projecte](captures/13.png)

Al executar-lo en el `result.txt` se me guarda el resultat dels tests, el qual és *failure*:

![Captura de pantalla del projecte](captures/14.png)

---

## 🏷️ Add_badge_job

El tercer *job* és el **Add_badge_job**, que recupera el resultat dels tests i afegeix un *badge* al final del `README` sota el text  
“**RESULTAT DELS ÚLTIMS TESTS**”, indicant si els tests han passat (*success*) o han fallat (*failure*).
![Cypress Tests](https://img.shields.io/badge/test-failure-red)

![Captura de pantalla del projecte](captures/15.png)

Com aquest *job* gasta una *action*, tinc que crear la carpeta `actions` i la respectiva carpeta de l’acció:

![Captura de pantalla del projecte](captures/16.png)
![Captura de pantalla del projecte](captures/17.png)

Resultat correcte:

![Captura de pantalla del projecte](captures/18.png)
![Captura de pantalla del projecte](captures/19.png)

---

## 🚀 Deploy_job

El quart *job* és el **Deploy_job**, fa servir l’acció `amondnet/vercel-action` per a desplegar automàticament el projecte a la plataforma **Vercel**.

Primer, cree un compte en Vercel:

![Captura de pantalla del projecte](captures/20.png)

Faig un *token* en Vercel:

![Captura de pantalla del projecte](captures/21.png)

Pose el meu projecte de GitHub en Vercel:

![Captura de pantalla del projecte](captures/22.png)

Cree tres *secrets* en GitHub: l’**ID de l’organització**, l’**ID del projecte** i el **token**.

![Captura de pantalla del projecte](captures/23.png)

I els gaste en el *job*:

![Captura de pantalla del projecte](captures/24.png)
![Captura de pantalla del projecte](captures/25.png)

Ací es pot vore en Vercel com ha funcionat:

![Captura de pantalla del projecte](captures/26.png)

---

## ✉️ Notification_job

El cinqué *job* és el **Notification_job**, s’executa sempre (fins i tot si altres *jobs* fallen) i s’encarrega d’enviar un **correu electrònic** amb el resultat complet del *workflow* utilitzant **Nodemailer** i una *action* pròpia.

![Captura de pantalla del projecte](captures/27.png)

Cree un nou *secret* per al correu:

![Captura de pantalla del projecte](captures/28.png)

Cree una altra *action* que utilitza un arxiu JS per a enviar els correus:

![Captura de pantalla del projecte](captures/29.png)

Cree una **contrasenya d’aplicació** per a no utilitzar la meua directament:

![Captura de pantalla del projecte](captures/30.png)
![Captura de pantalla del projecte](captures/31.png)

Aquest és el contingut del JS encarregat d’enviar els correus:

![Captura de pantalla del projecte](captures/32.png)

Job correctament fet:

![Captura de pantalla del projecte](captures/33.png)
![Captura de pantalla del projecte](captures/34.png)

---

## 📊 Mètriques del perfil

Ara, en el meu repositori personal, he fet un *workflow* per a afegir unes **mètriques**.

![Captura de pantalla del projecte](captures/35.png)

He agafat el codi de la documentació de **lowlighter**:

![Captura de pantalla del projecte](captures/36.png)

He afegit un `.svg` en el `README` on es posaran les mètriques i he creat un **token** en GitHub i l’he posat com a *secret*:

![Captura de pantalla del projecte](captures/37.png)
![Captura de pantalla del projecte](captures/38.png)
![Captura de pantalla del projecte](captures/39.png)

Job fet amb èxit:

![Captura de pantalla del projecte](captures/40.png)
![Captura de pantalla del projecte](captures/41.png)

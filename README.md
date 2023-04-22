Для створення SPA я використала React, Ant Design, Formik&Yup, React-Slick, Redux, React-Redux, middleware, CSS.

Коли користувач входить на сторінку, під час завантаження постів висвітлюється спінер Loading.
file(./img_explain/1.png)

На сторінці з’являється компонент Header та карусель з постів.
Запит виконується за допомогою fetch, та зберігаються пости в store, звідки потім беруться для компонента Posts.
file(./img_explain/2.png)

Я вирішила для коментаріїв не використвува store, так як їх 500 штук, і через це сам сайт буде працювати повільніше.

Користувач може натиснути на кнопку Read Comments, щоб відкрити коментарії під конкретним постом, а також може натиснути Close Comments, щоб заховати коментарії.
file(./img_explain/3.png)
file(./img_explain/4.png)

Натиснувши на кнопку Add Post, користувачеві відкриється модальне вікно з формою для створення поста.
file(./img_explain/5.png)

Для створення форми використовувала Formik, для валідації Yup.
file(./img_explain/6.png)

Під час створення поста оновлюється store, та пост додається в список всіх постів.
file(./img_explain/7.png)

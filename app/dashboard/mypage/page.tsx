import { fanwood, pacifico, rubik } from '@/app/ui/fonts';
import style from './mypage.module.css';
export default function Page() {
  return (
    <>
      <h2 className={`${pacifico.className} ${style.title_wrapper}`}>
        Тестовая страница пользователя
      </h2>
      <div className={style.wrapper__input}>
        <input type="text" />
      </div>
    </>
  );
}

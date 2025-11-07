import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./yup.jp";

const schema = yup.object({
  name: yup.string().label("名前").required().max(20),
  gender: yup.string().label("性別").required(),
  email: yup.string().label("メールアドレス").required().email(),
  memo: yup.string().label("備考").required().min(10),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "山田太郎",
      email: "admin@example.com",
      gender: "male",
      memo: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 1000);
    });
  };

  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前：</label>
        <br />
        <input id="name" type="text" {...register("name")} />
      </div>
      <div>{errors.name?.message}</div>
      <div>
        <label htmlFor="gender">性別：</label>
        <br />
        <label>
          <input type="radio" value="male" {...register("gender")} />
          男性
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} />
          女性
        </label>
      </div>
      <div>{errors.gender?.message}</div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <br />
        <input id="email" type="email" {...register("email")} />
      </div>
      <div>{errors.email?.message}</div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo" {...register("memo")} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
